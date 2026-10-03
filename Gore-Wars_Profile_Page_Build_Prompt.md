# GORE-WARS — PLAYER PROFILE, CLICKABLE HEADER NAME & LIVE PRESENCE

## 1. Assignment and visual reference

Build a complete, working player-profile system inside the existing Gore-Wars browser game. Inspect the repository first, preserve existing functionality, and reuse its authentication, player records, navigation, interface components, and realtime infrastructure.

Use the supplied `gore_wars_player_profile_dashboard.png` as the visual reference: charcoal panels, restrained crimson accents, metallic headings, compact information sections, an original character portrait, and clear typography. Rebuild it as responsive HTML and functional components, not as a screenshot with invisible clickable rectangles.

The requested player identity is exactly **Lil Torey [5447921]**. It is one player's identity, not the default identity of every account. Bind it only to the correct verified account. An existing public-ID collision must be reported, never overwritten. Do not grant administrative privileges based on the name or public ID.

Implement three priority requirements: clicking a player's own name in the game's top-left header opens their profile; account age continues increasing while they are offline; and one circle immediately left of a player's name changes between green, orange, and grey according to server-derived presence.

These written requirements override contradictory decorative details in the concept image. Do not copy its invented numbers, account age, occupation, faction, event dates, or activity entries into production.

## 2. Clickable player name in the top-left header

In the persistent Gore-Wars interface, place the signed-in player's name and public ID at the top left, immediately below or alongside the Gore-Wars logo, above the sidebar's main navigation. This is part of the game webpage, not the browser's address bar or tab strip.

Display one presence circle immediately before the name. For the requested account, the text is exactly `Lil Torey [5447921]`.

Make the entire name/ID area a real accessible profile link. Clicking it must go directly to the signed-in player's own profile, not open only an account dropdown. Keep any account-menu chevron as a separate control outside that link. Preserve a separate Profile entry in the sidebar.

Use the existing canonical profile route. If none exists, implement `/players/[publicId]`; Lil Torey's route becomes `/players/5447921`. Add `/profile` as an authenticated convenience route that resolves the current player's ID on the server and redirects to their canonical profile. Never hard-code everyone's header link to 5447921.

When viewing another player, the top-left header still represents the signed-in viewer; only the main profile content represents the visited player. A changed display name must not break public-ID links. Names in search, friends, faction rosters, messages, and rankings should use the same canonical profile destination.

Support keyboard activation, visible focus, normal link behavior, back navigation, direct visits, and mobile access. In Next.js, use the existing framework Link component for internal navigation. Validate route parameters, return a proper not-found state for unknown IDs, and protect the personal redirect with authentication. [R1]

## 3. Profile layout and navigation shell

Preserve the shared Gore-Wars header, resource summary, notifications, search, and sidebar. Mark Profile as active without resetting the rest of the game.

The desktop profile begins with the player's identity, one presence circle, a textual status, and optional biography/tagline. Below it, arrange the portrait, core information, and actions in a compact responsive grid. Follow with notes, medals, basic information, activity, badges, and competition sections.

On mobile, stack identity, portrait, core information, actions, and the remaining panels. Keep the top-left personal-profile link available in the compact header. Allow long names to wrap or truncate with an accessible full-name label; the status circle must not shrink or disappear.

Use real headings, buttons, links, tables, and forms. No autoplay audio, mandatory flashing, unreadable text, or full-screen promotional image that pushes the gameplay below the fold. Keep established resource names from the actual game; do not rename Stamina to Energy just because the image uses that label.

## 4. Complete profile panels

**Identity and portrait:** Show the exact stored display name, bracketed public ID, status, avatar or original fallback, selected honor/title, biography, and optional gallery. Only authorized owners see portrait and biography editing controls. Uploads need size/type checks, safe processing, ownership checks, and a removable preview.

**Core information:** Show actual level, rank, and permitted experience/statistics. On the owner's profile, include their existing Stamina, Nerve, Morale, and Vitality bars. Do not show another player's private resources or hidden battle statistics without an explicit game permission.

**Basic information:** Include public ID, name, permitted role/rank, faction, job, property, relationship, award count, permitted social counts, forum contributions, Joined date, Account Age in days, and allowed Last Active information. Distinguish faction membership from company employment.

**Honors, medals, and badges:** Display genuinely earned unlocks, tooltips, descriptions, dates, selection controls where supported, and a View All destination. Locked entries must be clearly locked. Use a truthful empty state for new accounts.

**Recent activity:** Pull from actual settled game events. The owner can see their own permitted activity history; other viewers receive only the public subset. Do not expose private transfers, crime outcomes, inventory, or faction secrets through this feed.

**Competition status:** Show real enrolled events, scores, positions, deadlines, and leaderboard links. A player without an active competition sees an honest empty state, not the concept image's sample event.

**Private profile notes:** Support viewer-owned notes about a target player. Clearly label them private. Only the note author can read, edit, or delete them. Viewing a profile must not expose notes other people wrote about that profile.

## 5. Own-profile controls versus other-player actions

For one's own profile, provide Edit Profile, Change Avatar, Manage Gallery, Select Honor, Privacy Settings, and Personal Statistics, subject to existing features. Do not offer self-attack, self-report, self-bounty, or self-friend actions.

For another player's profile, integrate the game's existing Message, Add/Remove Friend, Rival/Block, Trade, Send Item, Send Money, Attack/Challenge, Bounty, View Faction, and Report actions as applicable.

Buttons must perform real workflows. Financial or destructive actions open the appropriate preview/confirmation flow and retain existing server validation. Opening a profile or clicking a name must never automatically spend money, start combat, or send a message.

Explain unavailable actions using the existing eligibility rules. Do not let a profile button bypass travel restrictions, beginner protection, medical states, ownership, or permissions. Unimplemented modules must be marked unavailable in development, not simulated as successful.

## 6. Permanent account age, including offline time

Start the requested age counter at the player's **first successful authenticated sign-in**. Store this timestamp once in `first_authenticated_at`, or the established equivalent. Keep `created_at` separately as the registration timestamp; these can differ.

Set `first_authenticated_at` atomically if null in the trusted successful-authentication flow, including any supported sign-up flow that immediately authenticates the account. Parallel logins must not overwrite it. Later logins may update `last_authenticated_at`, but never the original start date.

Do not initialize this field when a stranger visits the profile, when a profile component mounts, or when an anonymous page is requested. Refreshing a token is not a new account. Preserve valid historical dates. For existing accounts with missing history, backfill only from a verified earliest sign-in and document the migration; otherwise show the age as unavailable until a documented basis exists rather than inventing years of membership. Distinguish newly created accounts from legacy accounts during migration: an old account's next login must not be treated as its first-ever sign-in solely because this new column is null.

Calculate complete elapsed days using authoritative server time:

```text
accountAgeDays = floor((serverNowUtc - firstAuthenticatedAtUtc) / 86,400 seconds)
```

At first sign-in, show `Account age: 0 days`; after 24 elapsed hours, show `Account age: 1 day`. Use singular/plural formatting. Also show `Joined: <localized date>` with an explanatory tooltip identifying it as the first sign-in date. Keep registration date separate when displayed.

This counts elapsed membership time, not days visited, login streaks, or playtime. Someone who first signed in seven full days ago is seven days old even after six days offline. Logout, browser closure, new devices, cache clearing, redeployments, and client-clock changes must not reset or speed up the counter.

Return the start timestamp and server time, update open-page displays at the next age boundary, and resynchronize on reconnect. Do not run a daily increment job for every user. Detect and report future/corrupt stored timestamps rather than silently rewriting history.

## 7. Exactly one color-changing presence circle

Create one shared `PresenceDot` component for every location that displays player presence. There is exactly one circle per rendered player-name instance; the same element changes color. Do not display three dots, a traffic light, colored rings for different states, or three sample dots beside the player's name.

| State | Circle | Required meaning |
|---|---|---|
| Online | Green, suggested `#62D63B` | At least one fresh authenticated game connection exists, and the player's latest accepted activity is less than five minutes old. |
| AFK | Orange, suggested `#F5A623` | At least one fresh authenticated game connection exists, but there has been no accepted game activity for five minutes or longer. |
| Offline | Grey, suggested `#8B929A` | No authenticated game connection remains fresh after logout, closure, or the documented disconnect timeout. |

Keep the circle immediately left of the name, approximately 10–12 CSS pixels in compact navigation and 12–16 pixels in the main profile heading. Use one consistent data source across both instances.

Provide status text or a tooltip and a screen-reader label so color is not the only signal. A help panel can explain the colors using text. Do not copy the concept image's repeated three-dot legends.

## 8. Activity detection must not confuse a heartbeat with a person

Track `last_user_activity_at` independently from `last_heartbeat_at`. A heartbeat proves recent communication, not that the player interacted with the game.

Count normal deliberate input in the game document: pointer clicks/taps, keyboard input, form interaction, user scrolling, and meaningful pointer movement, coalesced to avoid sending an event for every pixel. Ignore synthetic DOM activity in the normal client. Do not collect key contents, typed text, or pointer trails; only report a generic activity signal.

A new intentional sign-in counts as activity. Token refreshes, websocket reconnections, incoming messages, resource regeneration, automatic API requests, re-renders, advertisements, animations, and another user viewing the profile do not.

Use visibility/focus information to understand the page lifecycle, not as proof of human interaction. A tab becoming hidden never creates activity or immediately logs the player out. Returning the page to view can reconnect/resynchronize it; ordinary input then clears AFK. Background timers can be throttled, so do not base authoritative presence on a browser countdown alone. [R2]

Send an immediate activity update when an AFK player interacts. During continuous interaction, coalesce reports, for example at most once every five seconds with a trailing update. Do not let the heartbeat cadence substitute for the last-activity timestamp. Use server receipt time for accepted current activity, reject unbounded timestamps, and do not replay stale queued input as a fresh action after reconnecting.

Presence is a best-effort social signal. Do not use client activity reports as anti-cheat proof, authorization, income generation, or eligibility for valuable rewards.

## 9. Server presence, five-minute threshold, and disconnects

Reuse the existing authenticated realtime channel. Default to a 25-second liveness heartbeat and a configurable 90-second freshness window, then test those settings on supported browsers and deployment infrastructure. The required AFK threshold is exactly 300 seconds of accepted inactivity while a fresh connection still exists.

Use connection/session records with authenticated account identity, connection ID, server-received heartbeat time, relevant last activity, expiry, and revocation state. A remembered login cookie by itself does not mean someone is online.

Compute the state on the server:

```text
liveConnections = authenticated, nonrevoked connections with fresh liveness

if liveConnections is empty:
    state = OFFLINE
else if latest relevant accepted user activity is less than 300 seconds old:
    state = ONLINE
else:
    state = AFK
```

Retain the real latest user activity across ordinary reconnects and page reloads. Do not set it to now merely because a new socket opens. Broadcast transitions and schedule idle/deadline checks through the existing scheduler or bounded presence worker; an open but silent page must become AFK without needing another click.

Use authenticated subscriptions, HTTPS/WSS in production, reconnect backoff, message versioning, and cleanup on unmount. Re-fetch an authoritative snapshot after reconnect. Batch presence subscriptions for visible player lists instead of polling separately for every row. [R3]

Explicit logout revokes the relevant authentication session immediately and invalidates every connection belonging to that session. Late heartbeats cannot revive it. A connection close can use a short reconnect grace period; missing transport or heartbeat signals eventually expire under the documented timeout.

Do not depend on `unload`, `beforeunload`, `pagehide`, or a beacon being delivered to detect logout/closure. Browser lifecycle events are not guaranteed in all shutdown paths. A best-effort close message is only an optimization. [R4]

Document that a suspended device or lost network may appear Offline after timeout even while a browser tab remains open. Do not promise perfect human-presence detection. Service failures must not overwrite real last-active timestamps or fabricate new activity.

## 10. Multiple tabs and multiple devices

Aggregate presence across all valid connections for an account. Activity on one connected device keeps the account Online; a second idle tab must not overwrite it with AFK. The account is AFK when connections remain fresh but accepted activity has expired, and Offline only when no fresh connection remains.

Closing one tab removes only that connection. Logout may invalidate all tabs sharing the logged-out authentication session; it must not revoke an independent device session unless the player chose Logout Everywhere. Logout Everywhere invalidates every session.

Protect against out-of-order messages and reconnect races. Preserve first-sign-in history and relevant last-activity history across refreshes. Expired connection records must not accumulate or make users stay online forever.

Share client state where useful, but keep the server authoritative. Avoid per-tab conflicting truth, global booleans such as `isOnline=true`, and dependency on one application-process memory map when multiple server instances are used.

## 11. Data model and private/public boundaries

Extend the existing schema rather than duplicating player, faction, inventory, or finance systems. Use migrations for missing fields only.

Maintain immutable public IDs, registration and first-authentication timestamps, appropriate last-authentication/activity timestamps, editable profile fields, existing award/medal relations, and notes keyed by `author_player_id` plus `target_player_id`. Add a uniqueness constraint for each author/target note pair. Keep short-lived presence connections in the existing presence store with expiry and reconstruction rules.

Create separate server-side profile views for owner-only information, permitted public information, and the current viewer's private notes. Fetch only fields that the viewer is entitled to receive. UI hiding is not a privacy boundary; response payloads, server rendering, subscriptions, and caches must also exclude protected fields. [R5]

Never return credentials, session tokens, email addresses, private balances, private battle stats, IP addresses, security records, staff notes, or other authors' profile notes as part of a public profile object. Public IDs are identifiers, not authorization secrets.

Verify ownership again for every profile edit, avatar change, note mutation, private-data query, and gameplay action. Prevent private responses from entering shared public caches. Render biographies/notes safely, rate-limit updates, restrict uploads, and redact sensitive logging. [R6]

## 12. Suggested implementation boundaries

Adapt names to the existing project. Useful shared units include `HeaderPlayerLink`, `PlayerProfilePage`, `PlayerProfileHeader`, `PresenceDot`, `AccountAge`, `ProfilePortrait`, `ProfileCoreInfo`, `ProfileActions`, `PrivateProfileNotes`, `MedalsStrip`, `BasicInformation`, `ActivityFeed`, `BadgesPanel`, and `CompetitionStatus`.

Suggested routes are `/profile` and `/players/[publicId]`. Reuse or add server handlers for the current player's private profile, another player's permitted profile, owner profile updates, viewer-owned notes, validated uploads, and authenticated presence messages. Never trust a request's claimed user ID instead of its verified session.

The page's data and forms must work through the actual backend and database. Use the established TypeScript/Next.js/API/PostgreSQL/Redis architecture where present; do not replace a functioning stack simply for this feature. Verify installed APIs before implementing and do not require an unrelated paid service or LLM for profiles to work.

Keep networking, presence subscriptions, and data updates scoped correctly so route changes do not leak listeners, multiply heartbeats, or start duplicate connections. Coalesce UI updates rather than repainting the entire page on every heartbeat.

## 13. Responsive, accessible, and honest states

Test at 360, 390, 768, 1280, and 1920 CSS pixels with the game's actual navigation shell. Avoid horizontal scrolling, clipped IDs, stretched portraits, and overlapping resource bars.

Support image fallbacks, loading skeletons, retryable errors, unknown players, deleted/suspended-account presentation under existing policy, save progress, upload validation errors, and empty achievements/activity/competition sections.

Make buttons and links keyboard accessible. Label every field. Do not announce every heartbeat to screen readers; announce meaningful status changes without excessive repetition. Honor reduced motion and keep focus stable after updates.

Keep essential identity, account-age, and profile actions as selectable live text. Do not show fabricated values while data loads. Hide nothing important solely behind hover or a tiny unreadable illustration.

## 14. Mandatory acceptance tests

| Test | Required result |
|---|---|
| Personal header link | Lil Torey's top-left name opens the verified account's canonical profile. |
| A different signed-in player | Their top-left name opens their own profile, never Lil Torey's. |
| Viewing another account | The header remains the viewer's identity while the main profile shows the target. |
| First sign-in | The first-authentication timestamp is set once; day count starts at 0. |
| Concurrent/later logins | The original timestamp survives retries, parallel logins, refreshes, and new devices. |
| Age while offline | After seven complete elapsed days, age is seven days even without intervening logins. |
| 24-hour boundary and client clock | 23:59:59 remains 0 days; 24:00:00 becomes 1; changing the browser clock does not alter the authoritative age. |
| Fresh connection, 4:59 inactivity | The single circle remains green. |
| Fresh connection, 5:00 inactivity | The same circle becomes orange without requiring another user action. |
| Heartbeats with no input | Liveness stays fresh but does not postpone AFK. |
| Input after AFK | A prompt accepted activity update changes that same circle back to green. |
| Logout or final lost connection | Grey appears after explicit revocation or the documented disconnect timeout. |
| Active second tab/device | An idle/closed first tab cannot mark the whole account AFK/Offline incorrectly. |
| Background/suspended tab | Hidden is not automatically Offline; stale liveness eventually expires truthfully. |
| Notes and ownership | Other accounts cannot read another author's notes or edit the target's profile. |
| Public responses | Private data is absent from payloads and subscriptions, not merely hidden with CSS. |
| Production content | No invented stats, faction, job, medals, sample competition, or fake online count. |
| Functional layout | Forms, links, loading/error states, mobile views, and existing gameplay integrations work. |

Inject a testable clock into server age/presence logic. Use browser time control for UI timers where appropriate; Playwright provides clock controls, but browser clock mocking does not replace independently controlling server time. Test with independent browser sessions and fresh/stale heartbeats rather than waiting five real minutes per case. [R7]

## 15. Deliverables and completion standard

Deliver runnable integration code, necessary migrations, route/link bindings, profile data boundaries, the presence state machine, validated editing/notes/upload flows, automated tests, and deployment/configuration notes for existing infrastructure.

Provide desktop and mobile screenshots of the actual implemented profile, including owner and other-player views and green/orange/grey states. Label development fixtures as fixtures. Document chosen heartbeat timeouts, AFK timing, privacy decisions, legacy timestamp backfills, verified tests, and remaining blockers in `docs/PROFILE_SYSTEM.md`.

Do not claim the live game was modified, deployed, or tested unless those actions actually occurred. Do not publish or alter unrelated infrastructure without authorization. Missing repository access or dependencies must be reported honestly, not concealed behind a static demo.

**Final result: every player can click their own name in Gore-Wars' top-left interface to reach their working profile. Lil Torey's verified profile displays Lil Torey [5447921]. Account age counts complete elapsed days since first successful sign-in, including offline time. Exactly one circle immediately left of each displayed player name changes green for Online, orange after five minutes AFK, and grey for Offline. All displayed information and actions use real, permission-checked game data.**

---

## Implementation references

These are technical references for the builder, not additional Gore-Wars gameplay rules. Recheck documentation against installed dependencies.

[R1] Next.js — Link component: https://nextjs.org/docs/app/api-reference/components/link

[R2] MDN — Page Visibility API and background execution: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

[R3] MDN — Writing WebSocket client applications: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

[R4] MDN — sendBeacon and unreliable unload lifecycle events: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon

[R5] Next.js — Data Security: https://nextjs.org/docs/app/guides/data-security

[R6] Next.js — Authentication, authorization, and data access: https://nextjs.org/docs/app/guides/authentication

[R7] Playwright — Clock: https://playwright.dev/docs/clock
