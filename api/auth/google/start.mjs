import { randomBytes } from 'node:crypto';

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) return res.status(500).json({ error: 'google_client_id_missing' });
  const origin = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${origin}/api/auth/google/callback`;
  const state = randomBytes(24).toString('hex');
  const params = new URLSearchParams({ client_id: clientId, redirect_uri: redirectUri, response_type: 'code', scope: 'openid email profile', state, access_type: 'online', prompt: 'select_account' });
  res.setHeader('Set-Cookie', `gw_oauth_state=${state}; Max-Age=600; Path=/; HttpOnly; SameSite=Lax; ${origin.startsWith('https:') ? 'Secure;' : ''}`);
  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
}
