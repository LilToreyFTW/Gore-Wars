# API sketch

Planned commands: `POST /v1/crimes/attempt`, `POST /v1/training/sessions`, `POST /v1/market/purchases`, `POST /v1/missions/:id/claim`. Planned queries: `GET /v1/me`, `GET /v1/city`, `GET /v1/inventory`, `GET /v1/activity`.

Commands accept an actor-scoped idempotency key and return a persisted outcome with a server timestamp. The browser prototype mirrors these response shapes locally so the interface can be migrated without redesign.
