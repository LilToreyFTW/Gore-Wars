import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const PORT = Number(process.env.PORT || 8787);
const DB_FILE = resolve(process.cwd(), 'data', 'game.json');
const starter = { accounts: [], players: [], idempotency: [] };

async function loadDb() { try { return { ...starter, ...JSON.parse(await readFile(DB_FILE, 'utf8')) }; } catch { await mkdir(dirname(DB_FILE), { recursive: true }); await writeFile(DB_FILE, JSON.stringify(starter, null, 2)); return structuredClone(starter); } }
async function saveDb(db) { await writeFile(DB_FILE, JSON.stringify(db, null, 2)); }
function send(res, status, body) { res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }); res.end(JSON.stringify(body)); }
async function body(req) { let raw = ''; for await (const chunk of req) raw += chunk; return raw ? JSON.parse(raw) : {}; }
function playerId(db) { let id; do id = String(Math.floor(1_000_000 + Math.random() * 8_999_999)); while (db.players.some(p => p.playerId === id)); return id; }
function publicPlayer(p) { return { playerId: p.playerId, name: p.name, level: p.level, createdAt: p.createdAt, stats: p.stats }; }

const server = createServer(async (req, res) => {
  try {
    if (req.method === 'GET' && req.url === '/health') return send(res, 200, { ok: true, service: 'gore-wars-api', time: new Date().toISOString() });
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`); const db = await loadDb();
    if (req.method === 'POST' && url.pathname === '/v1/auth/demo') {
      const input = await body(req); const name = String(input.name || '').trim();
      if (name.length < 2 || name.length > 24) return send(res, 400, { error: 'name_invalid', message: 'Game name must be 2–24 characters.' });
      const now = new Date().toISOString(); const account = { accountId: randomUUID(), provider: 'demo', createdAt: now };
      const player = { playerId: playerId(db), name, level: 1, createdAt: now, stats: { power: 10, resilience: 10, reflexes: 10, precision: 10 }, resources: { stamina: 100, nerve: 30, vitality: 100, morale: 100 }, wallet: 500, idempotency: [] };
      db.accounts.push(account); db.players.push({ ...player, accountId: account.accountId }); await saveDb(db);
      return send(res, 201, { account: { accountId: account.accountId, provider: account.provider }, player: publicPlayer(player), session: { sessionId: randomUUID(), expiresIn: 86400 } });
    }
    if (req.method === 'GET' && url.pathname === '/v1/players/search') {
      const q = (url.searchParams.get('q') || '').toLowerCase(); const results = db.players.filter(p => p.playerId.includes(q) || p.name.toLowerCase().includes(q)).slice(0, 25).map(publicPlayer); return send(res, 200, { results });
    }
    const profile = url.pathname.match(/^\/v1\/players\/([0-9]+)$/); if (req.method === 'GET' && profile) { const p = db.players.find(x => x.playerId === profile[1]); return p ? send(res, 200, publicPlayer(p)) : send(res, 404, { error: 'player_not_found' }); }
    const crime = url.pathname.match(/^\/v1\/players\/([0-9]+)\/crimes$/); if (req.method === 'POST' && crime) {
      const p = db.players.find(x => x.playerId === crime[1]); if (!p) return send(res, 404, { error: 'player_not_found' }); const key = req.headers['idempotency-key']; if (!key) return send(res, 400, { error: 'idempotency_key_required' });
      const prior = p.idempotency.find(x => x.key === key); if (prior) return send(res, 200, prior.result);
      if (p.resources.nerve < 5) return send(res, 409, { error: 'insufficient_nerve', available: p.resources.nerve });
      p.resources.nerve -= 5; const reward = 120; p.wallet += reward; p.level = Math.max(1, p.level); const result = { outcome: 'success', reward, resources: p.resources, wallet: p.wallet, resolvedAt: new Date().toISOString() }; p.idempotency.push({ key, result }); await saveDb(db); return send(res, 200, result);
    }
    send(res, 404, { error: 'route_not_found' });
  } catch (error) { send(res, 500, { error: 'internal_error', message: error.message }); }
});
server.listen(PORT, () => console.log(`Gore-Wars API listening on http://localhost:${PORT}`));
