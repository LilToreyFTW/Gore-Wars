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

## Account entry

New visitors see the account gate. **Continue with Google** is the production entry point, but requires a server-side Google OAuth client ID, redirect handler, verified callback, and secure session cookie. The included local demo button is only for previewing the slice and never accepts Google credentials.

During account setup the player chooses a game name. Gore-Wars generates a persistent seven-digit public player ID and renders the identity as `Game Name [1234567]`; this is the lookup format used for player search and social features.
