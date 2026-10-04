import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const stop=source.indexOf('const views={');
assert.ok(stop>0,'Casino test should include the feature block');
const storage=new Map();
const context=vm.createContext({
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  structuredClone,console,Date,URLSearchParams,location:{search:''},setTimeout,Math,
  document:{createElement:()=>({remove(){}}),getElementById:()=>({append(){},classList:{add(){},remove(){}}})}
});
vm.runInContext(source.slice(0,stop),context);
const run=code=>vm.runInContext(code,context);

run("toast=()=>{};render=()=>{};activePlayerId='casino-test';state={...structuredClone(defaultState),playerId:'7654321',name:'Casino Tester',cash:100000,points:40,level:7,stamina:100,nerve:30,morale:100,inventory:[]};save=()=>{};");
assert.equal(run('ensureCasinoData().tokens'),75);
run('state.casino.tokens=2; refillCasinoTokens();');
assert.equal(run('state.points'),10);
assert.equal(run('state.casino.tokens'),75);

run("state.inventory.push({name:'Casino Pass',qty:1});state.casino.tokens=0;useCasinoPass();");
assert.equal(run('state.casino.tokens'),50);
assert.equal(run('state.inventory.length'),0);

run('toggleCasinoExclusion();state.casino.tokens=3;playCasinoGame("bookie");');
assert.equal(run('state.casino.tokens'),3,'self-exclusion must block games');
run('toggleCasinoExclusion();playCasinoGame("bookie");');
assert.equal(run('state.casino.tokens'),2);
assert.equal(run('state.casino.gamesPlayed'),1);

run("state.job={sector:'casino',rank:1,points:1};state.casino.tokens=0;useJobSpecial();");
assert.equal(run('state.casino.tokens'),25,'Casino job special should add 25 tokens');

run('Math.random=()=>0;state.casino.tokens=1;state.casino.wheelDay=null;state.casino.wheels={};spinCasinoWheel("small");spinCasinoWheel("medium");spinCasinoWheel("large");');
assert.equal(run('state.casino.tokens'),38,'Wheel rewards should be 5, 10, and 25 tokens');

run('state.casino.tokenDay=cityDay()-1;ensureCasinoData();');
assert.equal(run('state.casino.tokens'),75,'New Day should restore 75 tokens');
assert.match(run('casino()'),/Casino Tokens/);
assert.match(run('casino()'),/Spin The Wheel/);
console.log('Casino token, game, exclusion, and daily reset smoke passed.');
