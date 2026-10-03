# Architecture direction

The prototype is a static web shell so it can be run immediately from an empty repository. The production target is a TypeScript modular monolith: `apps/web` (Next.js App Router), `apps/api` (Node HTTP/WebSocket service), `apps/worker` (durable due-time jobs), and shared `packages/domain`, `database`, `contracts`, `ui`, and `config` packages backed by PostgreSQL, Redis, and BullMQ.

Every future mutation must authenticate, authorize, validate, reconcile due state, check an actor idempotency key, lock/version records, write ledger/history/outbox entries atomically, then publish notifications.
