import { readFile } from 'node:fs/promises';
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const js = await readFile(new URL('../app.js', import.meta.url), 'utf8');
for (const [name, value] of [['index.html',html],['styles.css',css],['app.js',js]]) if (!value.trim()) throw new Error(`${name} is empty`);
for (const marker of ['data-view="crimes"','SAVE_KEY','function doCrime','@media']) if (!(html+css+js).includes(marker)) throw new Error(`missing ${marker}`);
console.log('smoke: static shell, persistence model, crime loop, and responsive styles present');
