import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const stop=source.indexOf('const views={');
const storage=new Map();
const elements=new Map();
const document={
  getElementById:id=>elements.get(id)||null,
  querySelectorAll:()=>[],
  createElement:()=>({remove(){}}),
};
const context=vm.createContext({localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},structuredClone,console,Date,URLSearchParams,location:{search:''},setTimeout,Math,document});
vm.runInContext(source.slice(0,stop),context);
const run=code=>vm.runInContext(code,context);
const field=(id,value)=>elements.set(id,{value});

run("toast=()=>{};render=()=>{};save=()=>{};activePlayerId='forum-test';state={...structuredClone(defaultState),playerId:'7654321',name:'Forum Tester',role:'player',accountCreatedAt:Date.now()-3*86400000,activity:[],faction:null,company:null,karma:0};");
assert.ok(run('forumBoardCatalog.length')>40);
assert.equal(run("forumBoardAccess(forumBoardById('my-faction'))"),false);
assert.equal(run("forumCanPost(forumBoardById('announcements'))"),false);
assert.match(run('forums()'),/General Discussion/);

field('forumNewTitle','A useful city guide');
field('forumNewBody','This guide explains how to plan a safe first week in Blackharbor.');
field('forumNewFormat','text');
field('forumNewMedia','');
run("forumBoard='general';forumCreateThread();");
assert.equal(run('state.forum.threads.length'),3);
assert.equal(run('forumThreadId'),'t3');

field('forumReplyBody','A second player adds a detailed reply with enough words for karma.');
field('forumReplyFormat','text');
field('forumReplyMedia','');
run('forumSubmitReply();');
assert.equal(run("forumThreadById('t3').posts.length"),2);

const postId=run("forumThreadById('t3').posts[0].id");
run("forumBeginEdit('"+postId+"');");
field('forumEditBody','This guide has been edited with a clearer route through the city.');
run("forumSaveEdit('"+postId+"');");
assert.ok(run("!!forumPostById('"+postId+"').post.editedAt"));

run("forumPostById('"+postId+"').post.authorId='9999999';forumPostById('"+postId+"').post.body='This edited post is long enough to qualify for a karma rating.';forumRatePost('"+postId+"',1);");
assert.equal(run("forumPostById('"+postId+"').post.karma"),1);
run("forumRatePost('"+postId+"',-1);");
assert.equal(run('state.karma'),0,'Player karma cannot fall below zero');
assert.ok(run("forumSearchResults('+edited -missing').length")>=1);

run("state.faction={name:'Test faction'};forumBoard='my-faction';");
assert.equal(run("forumBoardAccess(forumBoardById('my-faction'))"),true);
run("state.role='owner';");
assert.equal(run("forumCanPost(forumBoardById('announcements'))"),true);
assert.match(run('forums()'),/Announcements/);
console.log('Forum boards, access, posting, replies, edits, ratings, and search smoke passed.');
