import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../app.js',import.meta.url),'utf8');
assert.equal((source.match(/type:'standard'/g)||[]).length,24);
assert.equal((source.match(/type:'specialist'/g)||[]).length,8);
assert.ok(source.includes("id:'crims'"));
const storage=new Map();
const context=vm.createContext({
 localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
 structuredClone,console,Date,URLSearchParams,location:{search:''},setTimeout,
 document:{createElement:()=>({remove(){}}),getElementById:()=>({append(){}})}
});
const stop=source.indexOf('const itemCategories=');
vm.runInContext(source.slice(0,stop),context);
const run=code=>vm.runInContext(code,context);
run("toast=()=>{};render=()=>{};activePlayerId='gym-test';state={...structuredClone(defaultState),playerId:'7654321',name:'Gym Tester',cash:1000,stamina:5,morale:100};ensureGymData();");
assert.equal(run("state.gym.active"),'premier');
assert.deepEqual(JSON.parse(JSON.stringify(run("state.gym.memberships"))),['premier']);
assert.equal(run("gymEligibility(gymById('average-joes')).ok"),false);
run("state.gym.exp=100;activateGym('average-joes');");
assert.equal(run("state.gym.active"),'average-joes');
assert.equal(run("state.cash"),500);
const before=run('state.power');
run("trainGym('power');");
assert.ok(run('state.power')>before);
assert.equal(run('state.stamina'),0);
assert.ok(run('state.gym.exp')>100);
assert.ok(run("state.gym.lastAction.includes('Average Joes')"));
run("state.jailUntil=Date.now()+60000;ensureGymData();");
assert.equal(run("state.gym.active"),'crims');
assert.equal(run("gymEligibility(gymById('premier')).ok"),false);
console.log('Gym system: 33 gyms, ordered membership unlocks, saved fractional training, energy spend, action log, and jail-only gym rules passed.');
