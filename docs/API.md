# Gore-Wars API

The Gore-Wars API is a read-only interface for player-built tools, browser extensions, faction utilities, and community dashboards. API keys are scoped to one player and must never be requested from users as a password substitute.

## Contents

- [Base URL](#base-url)
- [Authentication](#authentication)
- [Access levels](#access-levels)
- [Player endpoint](#player-endpoint)
- [Response and limits](#response-and-limits)
- [Error codes](#error-codes)
- [Security rules](#security-rules)
- [Production status](#production-status)

## Base URL

Local development uses `http://localhost:8787`. The deployed API base URL will be published with the production backend. Do not hard-code a third-party API URL into the game client.

## Authentication

Every request includes the key as a query parameter or an authorization header:

```http
GET /v1/players/5447921?selections=profile,stats
Authorization: Bearer gw_live_your_key
```

Keys are created and revoked from the signed-in developer account. A key belongs to one player and is never a Google password, OAuth secret, or client secret. Keep it server-side when building a public website.

## Access levels

| Level | Intended use | Data |
| --- | --- | --- |
| `public` | Community tools | Public name, player ID, level, faction, online status |
| `minimal` | Personal utilities | Public data plus basic resources and progression |
| `limited` | Personal dashboards | Minimal data plus approved combat and inventory summaries |
| `full` | Private account tooling | All currently approved read-only fields |

Requests for fields above the key's level return error `16`.

## Player endpoint

```http
GET /v1/players/:playerId?selections=profile,stats
```

Supported selections are deliberately explicit so applications only request what they need:

- `profile`: player ID, name, level, faction, avatar, and online status
- `stats`: progression and combat-stat summary
- `resources`: stamina, nerve, vitality, and morale when the key permits it
- `inventory`: item names, quantities, and remaining uses when the key permits it
- `lookup`: the current selection catalog and required access level

Example:

```js
const response = await fetch(
  'https://api.gore-wars.com/v1/players/5447921?selections=profile',
  { headers: { Authorization: `Bearer ${process.env.GORE_WARS_API_KEY}` } }
);
const player = await response.json();
```

The API never exposes Google tokens, passwords, private email addresses, or another player's private data through a public key.

## Response and limits

Successful responses are JSON and include `data` plus a `meta` object with `requestId` and `generatedAt`. Keys are limited to 100 requests per rolling minute. Applications should cache stable responses, request only the needed selections, remove revoked keys immediately, and back off on `429` responses.

## Error codes

| Code | Meaning |
| ---: | --- |
| 0 | Unknown error |
| 1 | Key is empty |
| 2 | Incorrect key |
| 3 | Wrong type |
| 4 | Wrong fields |
| 5 | Too many requests |
| 6 | Incorrect ID |
| 7 | Incorrect ID-entity relation |
| 8 | IP block |
| 9 | API disabled |
| 10 | Key owner is in federal jail |
| 11 | Key change error |
| 12 | Key read error |
| 13 | Key disabled by inactivity |
| 14 | Daily read limit reached |
| 15 | Temporary backend error |
| 16 | Access level is insufficient |
| 17 | Backend error |
| 18 | Key paused by its owner |

Error example:

```json
{
  "error": { "code": 16, "message": "This key cannot read resources." },
  "meta": { "requestId": "req_..." }
}
```

## Security rules

Applications must not request Gore-Wars passwords, expose API keys in browser JavaScript, sell player data, scrape unnecessary fields, or use the API to create an unfair automated advantage. Requests are logged for abuse detection. A compromised key should be revoked and removed from the application immediately.

## Production status

The repository's `apps/api/server.mjs` is a development foundation with JSON persistence. Production deployment still needs a managed database, encrypted key storage, authenticated key-management routes, distributed rate limiting, and audit logging before issuing live keys to other players.
