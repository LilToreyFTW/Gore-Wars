# Gore-Wars

Phase 1 vertical slice for **Gore-Wars — Build your name. Take the city.** The repository is intentionally small and runnable: it demonstrates the Blackharbor interface, persistent local progression, district map, resources, crimes, gym training, inventory, mission payout, market settlement, and activity history.

## Run

```powershell
npm test
npm run test:api
npm run dev
npm run api
```

Open the local URL printed by `serve`. Progress is stored in browser local storage under `gore-wars-save-v1`; use **Reset save** in the sidebar to start over.

The API foundation runs separately on `http://localhost:8787` and currently provides health, demo account creation, public player lookup, and an idempotent crime command. The browser still uses its local adapter until the PostgreSQL-backed API is wired into the web client.

The supplied Blackharbor key art is used as the account-entry backdrop and is tracked in [ASSETS.md](H:\Gore-Wars\ASSETS.md) as development/reference artwork.

Google credential JSON files are ignored by Git. Store their values in Vercel environment variables; never commit the JSON file.

## Production Google sign-in

The Vercel functions under `api/auth/` implement the OAuth start, callback, and signed-session lookup. Configure these Vercel variables for **Production** (and Preview if you want preview deployments to sign in):

```text
GOOGLE_CLIENT_ID=...apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=...
GOOGLE_REDIRECT_URI=https://gore-wars.vercel.app/api/auth/google/callback
SESSION_SECRET=<long random private value>
```

In Google Cloud, the authorized JavaScript origin is `https://gore-wars.vercel.app` and the authorized redirect URI is exactly `https://gore-wars.vercel.app/api/auth/google/callback`. Redeploy after changing either Google settings or Vercel variables.

## Account entry

New visitors see the account gate. **Continue with Google** is the production entry point, but requires a server-side Google OAuth client ID, redirect handler, verified callback, and secure session cookie. The included local demo button is only for previewing the slice and never accepts Google credentials.

During account setup the player chooses a game name. Gore-Wars generates a persistent seven-digit public player ID and renders the identity as `Game Name [1234567]`; this is the lookup format used for player search and social features.
