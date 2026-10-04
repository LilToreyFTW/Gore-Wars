export default function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  res.setHeader('Set-Cookie', [
    'gw_session=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax; Secure;',
    'gw_oauth_state=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax; Secure;'
  ]);
  res.redirect('/');
}
