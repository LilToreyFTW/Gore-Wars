# Security boundary

The prototype stores no secrets and uses no real payments or gambling. It must not be presented as a multiplayer or security-complete build. Production work requires secure sessions, CSRF protection, object-level authorization, output encoding, rate limits, restrictive browser policies, audit logs, dependency checks, and server-authoritative randomness.

Google sign-in must be implemented through an OAuth authorization-code flow on the API service. Keep the client secret server-side, validate issuer/audience/nonce/state, create or link an immutable account ID, and issue a revocable secure session. Never collect a Google password in Gore-Wars.
