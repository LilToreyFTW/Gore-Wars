import { createHmac, timingSafeEqual } from 'node:crypto';

function cookies(req) { return Object.fromEntries((req.headers.cookie || '').split(';').map(x => x.trim().split('=').map(decodeURIComponent)).filter(x => x.length === 2)); }
function sign(value) { return createHmac('sha256', process.env.SESSION_SECRET || process.env.GOOGLE_CLIENT_SECRET || 'development-only-secret').update(value).digest('base64url'); }
function playerId(subject) { let n = 0; for (const c of subject) n = (n * 31 + c.charCodeAt(0)) % 8999999; return String(1000000 + n); }
function session(profile) { const payload = Buffer.from(JSON.stringify(profile)).toString('base64url'); return `${payload}.${sign(payload)}`; }

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  const query = new URL(req.url, `https://${req.headers.host}`); const code = query.searchParams.get('code'); const returnedState = query.searchParams.get('state'); const savedState = cookies(req).gw_oauth_state;
  if (!code || !returnedState || !savedState || returnedState !== savedState) return res.status(400).send('Google sign-in could not be verified. Please try again.');
  const origin = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`; const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${origin}/api/auth/google/callback`;
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ code, client_id: process.env.GOOGLE_CLIENT_ID || '', client_secret: process.env.GOOGLE_CLIENT_SECRET || '', redirect_uri: redirectUri, grant_type: 'authorization_code' }) });
  if (!tokenResponse.ok) return res.status(502).send('Google token exchange failed. Check the OAuth redirect URI and Vercel environment variables.');
  const token = await tokenResponse.json(); const profileResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', { headers: { authorization: `Bearer ${token.access_token}` } });
  if (!profileResponse.ok) return res.status(502).send('Google profile lookup failed.'); const profile = await profileResponse.json();
  const verifiedEmail = String(profile.email || '').trim().toLowerCase();
  if (profile.email_verified !== true) return res.status(403).send('Google account email is not verified.');
  const ownerEmail = String(process.env.OWNER_GOOGLE_EMAIL || '').trim().toLowerCase();
  const isOwner = Boolean(ownerEmail) && verifiedEmail === ownerEmail;
  const player = { playerId: isOwner ? '5447921' : playerId(profile.sub), name: isOwner ? 'Lil Torey' : (profile.name || verifiedEmail.split('@')[0] || 'New Operative'), email: verifiedEmail, picture: profile.picture, provider: 'google', role: isOwner ? 'owner' : 'player' };
  res.setHeader('Set-Cookie', [`gw_session=${session(player)}; Max-Age=604800; Path=/; HttpOnly; SameSite=Lax; ${origin.startsWith('https:') ? 'Secure;' : ''}`, 'gw_oauth_state=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax']); res.redirect('/?auth=success');
}
