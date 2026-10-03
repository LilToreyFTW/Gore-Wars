import { spawn } from 'node:child_process';
const port = 8899; const api = spawn(process.execPath, ['apps/api/server.mjs'], { env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
try {
  await new Promise(r => setTimeout(r, 250));
  const health = await fetch(`http://localhost:${port}/health`); if (!health.ok) throw new Error('health failed');
  const created = await fetch(`http://localhost:${port}/v1/auth/demo`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: 'Smoke Runner' }) }); const account = await created.json(); if (created.status !== 201 || !/^\d{7}$/.test(account.player.playerId)) throw new Error('account creation failed');
  const crime = await fetch(`http://localhost:${port}/v1/players/${account.player.playerId}/crimes`, { method: 'POST', headers: { 'idempotency-key': 'smoke-1' } }); if (!(await crime.json()).reward) throw new Error('crime failed');
  const retry = await fetch(`http://localhost:${port}/v1/players/${account.player.playerId}/crimes`, { method: 'POST', headers: { 'idempotency-key': 'smoke-1' } }); if ((await retry.json()).reward !== 120) throw new Error('idempotency failed');
  console.log('api smoke: health, account creation, player ID, crime command, and idempotent retry passed');
} finally { api.kill(); }
