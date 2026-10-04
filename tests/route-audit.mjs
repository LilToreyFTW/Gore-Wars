import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const shell=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const fixtures={
  fresh:{},
  legacy:{name:'Legacy Player',playerId:'7654321',level:12,cash:42000,property:{id:'trailer'},gym:{active:'premier'},faction:{name:'Old Crew',tag:'OLD',treasury:15000000,respect:5000}},
  jailed:{jailUntil:Date.now()+3600000,jailReason:'Failed crime: Search the Trash'},
  hospitalized:{hospitalUntil:Date.now()+3600000,hospitalReason:'Combat injuries'},
  owner:{name:'Owner',playerId:'1234567',role:'owner',cash:1000000000,level:100},
};

function harness(saved){
  const storage=new Map([['gore-wars-save-v1',JSON.stringify(saved)],['gore-wars-auth-v1','demo']]);
  let now=Date.now();
  const intervals=[];
  const nodes=new Map();
  const errors=[];
  const makeNode=(attributes={})=>{
    const classes=new Set((attributes.class||'').split(/\s+/).filter(Boolean));
    return {innerHTML:'',textContent:'',value:attributes.value||'',dataset:Object.fromEntries(Object.entries(attributes).filter(([key])=>key.startsWith('data-')).map(([key,value])=>[key.slice(5).replace(/-([a-z])/g,(_,letter)=>letter.toUpperCase()),value])),attributes,disabled:'disabled' in attributes,
      classList:{add:key=>classes.add(key),remove:key=>classes.delete(key),toggle(key,value){const enabled=value??!classes.has(key);if(enabled)classes.add(key);else classes.delete(key);return enabled},contains:key=>classes.has(key)},
      append(){},remove(){},focus(){},click(){if(!this.disabled)this.onclick?.({currentTarget:this,preventDefault(){}})},
      setAttribute(key,value){attributes[key]=value},removeAttribute(key){delete attributes[key]},getAttribute:key=>attributes[key]??null,querySelectorAll(){return []}};
  };
  function parse(html){return [...html.matchAll(/<[a-z][a-z0-9-]*\b([^>]*)>/gi)].map(([,raw])=>makeNode(Object.fromEntries([...raw.matchAll(/([\w-]+)(?:="([^"]*)")?/g)].map(([,key,value])=>[key,value??'']))));}
  const staticNodes=parse(shell);
  for(const node of staticNodes)if(node.attributes.id)nodes.set(node.attributes.id,node);
  let dynamicNodes=[];
  let mainHtml='';
  Object.defineProperty(nodes.get('main'),'innerHTML',{get:()=>mainHtml,set:value=>{mainHtml=value;dynamicNodes=parse(value)}});
  function matches(node,selector){
    const className=selector.match(/^\.([\w-]+)/)?.[1];
    const attribute=selector.match(/\[([\w-]+)(?:="([^"]*)")?\]/);
    return (!className||node.classList.contains(className))&&(!attribute||(attribute[1] in node.attributes&&(attribute[2]===undefined||node.attributes[attribute[1]]===attribute[2])));
  }
  const document={
    getElementById:id=>nodes.get(id)||dynamicNodes.find(node=>node.attributes.id===id)||null,
    querySelector(selector){return this.querySelectorAll(selector)[0]||null},
    querySelectorAll:selector=>[...staticNodes,...dynamicNodes].filter(node=>matches(node,selector)),createElement:()=>makeNode(),addEventListener(){},hidden:false,
  };
  const location={search:'',pathname:'/',href:'/'};
  class TestDate extends Date{constructor(...args){super(...(args.length?args:[now]))}static now(){return now}}
  const context=vm.createContext({
    localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},
    structuredClone,Date:TestDate,Math,URLSearchParams,console:{log(){},warn(){},error:(...args)=>errors.push(args.map(String).join(' '))},
    location,document,history:{pushState(){},replaceState(){}},
    window:{location,addEventListener(){},scrollTo(){},prompt:()=>null},
    setTimeout:()=>0,setInterval:callback=>intervals.push(callback),clearTimeout(){},clearInterval(){},confirm:()=>false,
    fetch:async()=>({ok:false,json:async()=>({authenticated:false})}),
  });
  vm.runInContext(source,context,{filename:'app.js'});
  const run=code=>vm.runInContext(code,context);
  return {run,errors,nodes,document,advance:milliseconds=>{now+=milliseconds},tick:()=>intervals.forEach(callback=>callback())};
}

let attempts=0;
const failures=[];
function check(app,label,setup){
  attempts++;
  try{
    app.run(setup+';render();');
    assert.ok(app.nodes.get('main').innerHTML.trim(),`${label} produced empty markup`);
    assert.doesNotMatch(app.nodes.get('main').innerHTML,/Page loading error/,`${label} used error fallback`);
  }catch(error){failures.push(`${label}: ${error.stack.split('\n').slice(0,7).join('\n')}`);}
}
for(const [fixture,saved] of Object.entries(fixtures)){
  const setup=harness(saved);
  for(const error of setup.errors)failures.push(`${fixture}/startup: ${error}`);
  const routes=setup.run('Object.keys(views)');
  for(const [,route] of shell.matchAll(/data-(?:view|command)="([^"]+)"/g))assert.ok(routes.includes(route),`Missing renderer for ${route}`);
  for(const route of routes){
    const app=harness(saved);
    check(app,`${fixture}/${route}`,`view=${JSON.stringify(route)};selectedShop=shopLocations[0][0];publicProfileId=state.playerId`);
  }
}
for(const [route,variable,values] of [
  ['factions','window.factionTab',['overview','armory','upgrades','controls','communication','territory']],
  ['newspaper','newspaperTab',['front','archive','classifieds','personals','bounties','comics','chronicles','advertising']],
  ['events','eventsTab',['current','upcoming','calendar','community','history']],
  ['rules','rulesTab',['rules','social','privacy','terms','odds']],
  ['hall','hallTab',['players','factions']],
  ['city','cityMapMode',['territory','rackets','sector','density','size']],
])for(const value of values)check(harness(fixtures.legacy),`${route}/${value}`,`view=${JSON.stringify(route)};${variable}=${JSON.stringify(value)}`);
const populated=harness(fixtures.owner);
for(const id of populated.run('shopLocations.map(s=>s[0])'))check(populated,`shop/${id}`,`view='shop';selectedShop=${JSON.stringify(id)}`);
for(const id of populated.run('forumBoardCatalog.map(b=>b.id)'))check(populated,`forum/${id}`,`view='forums';forumBoard=${JSON.stringify(id)}`);
for(const id of populated.run('forumEnsureData().threads.map(t=>t.id)'))check(populated,`forum thread/${id}`,`view='forums';forumThreadId=${JSON.stringify(id)}`);
check(populated,'company director',"state.company=companyDefault('Candle Shop',500000,4);view='companies'");
check(populated,'hunting abroad',"state.travel={status:'abroad',destination:'South Africa: Johannesburg'};view='hunting'");
for(const status of ['Proposed','Engaged','Married'])check(populated,`marriage/${status}`,`state.marriage={status:${JSON.stringify(status)},targetId:'7654321',marriedAt:Date.now(),witnesses:[]};view='marriage'`);

// Exercise actual bound navigation handlers and timer callbacks, not only renderers.
for(const fixture of ['jailed','hospitalized']){
  const app=harness(fixtures[fixture]);
  const main=()=>app.nodes.get('main').innerHTML;
  assert.ok(app.document.querySelectorAll('.nav-item').every(node=>!node.disabled),`${fixture}: sidebar remains clickable`);
  for(const route of ['faq','rules','reports','settings','profile','events','forums','energy','nerve','happy']){
    app.document.querySelector(`.nav-item[data-view="${route}"]`).click();
    assert.equal(app.run('view'),route,`${fixture}: sidebar opens ${route}`);
    assert.doesNotMatch(main(),/class="card access-restriction"/,`${fixture}: ${route} remains accessible`);
  }
  app.document.querySelector('.nav-item[data-view="crimes"]').click();
  assert.equal(app.run('view'),'crimes');
  assert.match(main(),/class="card access-restriction"/);
  assert.doesNotMatch(main(),/class="btn crime-btn"/);
  assert.ok(app.document.querySelector('.nav-item[data-view="crimes"]').classList.contains('activity-restricted'));
  app.document.querySelector('[data-command="faq"]').click();
  assert.equal(app.run('view'),'faq');
  app.document.querySelector('[data-command="crimes"]').click();
  assert.match(main(),/class="card access-restriction"/,'Command menu cannot bypass restrictions');
  app.document.querySelector('[data-command="gym"]').click();
  assert.equal(/class="card access-restriction"/.test(main()),fixture==='hospitalized','Gym opens only for jail restrictions');
  app.run("activePlayerId='7654321';navigateTo('faq')");
  assert.match(main(),/class="access-status"/);
  app.advance(3601000);
  app.tick();
  assert.equal(app.run('view'),'faq','Expiry retains the current unrelated route');
  assert.doesNotMatch(main(),/class="access-status"/,'Expiry removes banner without changing tabs');
  assert.ok(app.document.querySelectorAll('.nav-item').every(node=>!node.classList.contains('activity-restricted')));
  app.document.querySelector('[data-command="crimes"]').click();
  assert.match(main(),/class="btn crime-btn"/,'Expired activities reopen');
}
const both=harness({...fixtures.jailed,...fixtures.hospitalized});
both.run("navigateTo('gym')");
assert.match(both.nodes.get('main').innerHTML,/Hospital recovery required/,'Hospital still blocks gym when also jailed');
both.run("activePlayerId='7654321';state.jailUntil=Date.now()+1000;state.hospitalUntil=Date.now()+5000;navigateTo('crimes')");
both.advance(2000);both.tick();
assert.match(both.nodes.get('main').innerHTML,/Hospital recovery required/,'One expiry preserves the other restriction');
both.advance(4000);both.tick();
assert.match(both.nodes.get('main').innerHTML,/class="btn crime-btn"/,'Blocked route automatically opens after both expire');

const routing=harness({});
assert.equal(routing.run("navigateTo('missing-route')"),false);
assert.equal(routing.run("navigateTo('__proto__')"),false);
assert.equal(routing.run('view'),'overview','Invalid routes preserve the working page');
routing.run("view='missing-route';render()");
assert.match(routing.nodes.get('main').innerHTML,/Page loading error/);
routing.run("views.faq=()=>{throw new Error('Simulated rendering failure')};navigateTo('faq')");
assert.match(routing.nodes.get('main').innerHTML,/Page loading error/);
routing.document.querySelector('.nav-item[data-view="overview"]').click();
assert.doesNotMatch(routing.nodes.get('main').innerHTML,/Page loading error/,'Navigation recovers after a route rendering exception');
routing.run("save=()=>{throw new Error('Simulated storage failure')};navigateTo('rules')");
assert.equal(routing.run('view'),'rules','Storage failure does not block navigation');

const owner=harness({...fixtures.owner,...fixtures.jailed});
owner.document.querySelector('.nav-item[data-view="owner"]').click();
assert.match(owner.nodes.get('main').innerHTML,/Game owner controls/,'Owner tools remain available while jailed');
const player=harness(fixtures.jailed);
assert.ok(player.document.querySelector('.owner-only-nav').hidden,'Owner nav stays hidden for ordinary players');
player.run("navigateTo('owner')");
assert.equal(player.run('view'),'overview');
assert.doesNotMatch(player.nodes.get('main').innerHTML,/Game owner controls/,'Ordinary players cannot render owner controls');
if(failures.length){console.error(failures.join('\n\n'));process.exitCode=1;}
else console.log(`Route audit: ${attempts} route and nested-tab renders passed across ${Object.keys(fixtures).length} save fixtures; sidebar, command menu, restrictions, automatic expiry, error recovery, and owner authorization passed.`);
