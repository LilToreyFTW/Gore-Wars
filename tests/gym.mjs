import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const storage=new Map();
const context=vm.createContext({
 localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
 structuredClone,console,Date,URLSearchParams,location:{search:''}
});
vm.runInContext(source.slice(0,source.indexOf('function itemAsset')),context);
vm.runInContext(`
function toast(){} function render(){}
function addActivity(icon,title,desc){state.activity.unshift({icon,title,desc})}
function spend(kind,amount){if(state[kind]<amount)return false;state[kind]-=amount;return true}
`,context);
vm.runInContext(source.slice(source.indexOf('function train(stat)'),source.indexOf('function addInventoryItem')),context);
const run=s=>vm.runInContext(s,context);
run("restorePlayer({playerId:'1111111',name:'A'});state.stamina=20;save();train('power');train('power');train('power')");
assert.equal(run('state.power'),16);
assert.equal(run('state.stamina'),0);
assert.equal(run('state.trained'),2);
run("restorePlayer({playerId:'2222222',name:'B'})");
assert.equal(run('state.power'),14);
run("restorePlayer({playerId:'1111111',name:'A'})");
assert.equal(run('state.power'),16);
assert.equal(run('state.stamina'),0);
run("state.staminaUpdatedAt=Date.now()-600000;save();train('resilience')");
assert.equal(run('state.resilience'),13);
assert.equal(run('state.stamina'),5);
run("train('cash')");
assert.equal(run('state.cash'),840);
run("state.staminaUpdatedAt=Date.now()-86400000;recoverStamina()");
assert.equal(run('state.stamina'),100);
run("save();train('reflexes')");
assert.equal(run('state.reflexes'),12);
assert.equal(run('state.stamina'),90);
run("localStorage.setItem(SAVE_KEY,JSON.stringify({playerId:'3333333',power:42,stamina:12}));restorePlayer({playerId:'3333333',name:'Legacy'})");
assert.equal(run('state.power'),42);
run("localStorage.setItem=()=>{throw new Error('quota')};train('power')");
assert.equal(run('state.power'),42);
assert.equal(run('state.stamina'),12);
assert.ok(source.includes("save();localStorage.removeItem(AUTH_KEY);window.location.href"));
console.log('Gym: spending, exhausted stamina, player isolation, restoration, offline recovery, cap, invalid stat, legacy migration and failed-save rollback passed.');

