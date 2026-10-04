import { readFile } from 'node:fs/promises';
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const js = await readFile(new URL('../app.js', import.meta.url), 'utf8');
for (const [name, value] of [['index.html',html],['styles.css',css],['app.js',js]]) if (!value.trim()) throw new Error(`${name} is empty`);
for (const marker of ['data-view="crimes"','data-view="events"','data-view="faq"','data-view="rules"','SAVE_KEY','function doCrime','function events','function faq','function rules','function sendPlayerMessage','function addPlayerFriend','hydrateAuthSession','eventCatalog','@media']) if (!(html+css+js).includes(marker)) throw new Error(`missing ${marker}`);
if (js.includes('Social actions will unlock as the authenticated player service is connected.')) throw new Error('profile still contains disabled social actions');
console.log('smoke: static shell, persistence model, crime loop, events calendar, FAQ, rules, profile actions, auth hydration, and responsive styles present');
