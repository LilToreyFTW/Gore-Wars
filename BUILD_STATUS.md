# Build status

**Milestone:** Phase 1 playable shell + API foundation (0.2.0)

**Verified:** `npm test` checks the static shell. `npm run test:api` checks API health, account creation, generated seven-digit player IDs, a crime command, and idempotent retry behavior.

**Known boundary:** The API foundation uses a replaceable JSON adapter and demo auth. Google OAuth, PostgreSQL ledger transactions, multiplayer sessions, and production hardening remain required before launch.
