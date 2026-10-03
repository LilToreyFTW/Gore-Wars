# Gore-Wars API foundation

This is the first server-authoritative foundation milestone. It uses Node's built-in HTTP server and a JSON persistence adapter so it runs without package installation. It provides health, demo account creation, public player lookup, and an idempotent crime command.

The adapter is deliberately replaceable. Production migration targets PostgreSQL transactions, secure Google OAuth sessions, a ledger, Redis coordination, and an outbox/worker pipeline as described in `ARCHITECTURE.md`.
