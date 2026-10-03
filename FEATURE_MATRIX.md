# Feature matrix — Phase 1

| System | Status | Prototype path | Next proof |
|---|---|---|---|
| Original identity and responsive shell | Complete | `index.html`, `styles.css` | Visual QA + accessibility audit |
| Persistent profile/resources | Slice | `app.js` local save | Authenticated sessions + server timestamps |
| District map and services | Slice | City view | District definitions in PostgreSQL |
| Crimes and outcomes | Slice | Crimes view | Transactional command + idempotency tests |
| Gym and progression | Slice | Gym view | Versioned formulas and offline regen |
| Inventory and market | Slice | Inventory/Market views | Item ownership, escrow, atomic settlement |
| Missions and activity feed | Slice | Missions/Overview views | Durable rewards and outbox |
| Account/player API foundation | In progress | `apps/api/server.mjs` | Google OAuth, secure sessions, PostgreSQL adapter |
| Player ID search and idempotent crime command | Implemented-unverified | `apps/api/server.mjs` | Ledger-backed commands and authorization middleware |
| PvP, factions, travel, racing, casino, community | Planned | Hidden from navigation | Phase 2–4 modules |
