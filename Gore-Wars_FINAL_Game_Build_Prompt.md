# GORE-WARS
## Final master prompt for a complete persistent browser crime MMORPG

**Project:** Gore-Wars  
**Owner:** gtagod2020torey  
**Design reference:** Torn's public wiki, beginning with Profiles and extending across its gameplay documentation.  
**Prepared:** October 3, 2026  
**Deliverable requested from the implementing agent:** Working game source, original content, automated tests, deployment configuration, and documentation—not another proposal or a mock website.

### Read this before execution

This is one integrated build specification and supersedes the earlier Gore-Wars master prompt. Everything below is an instruction for the implementing development agent. The source directory at the end identifies the public reference pages consulted at the system level. It is not a claim that every wiki page, item, historical revision, or hidden game formula has been exhaustively verified.

The reference wiki explicitly warns that its player-maintained information can be inaccurate or outdated. Treat documented behavior, historical behavior, uncertain behavior, and original Gore-Wars design decisions as different things. The initial source set is substantial but is not a completed whole-wiki inventory. Complete the coverage process in Section 2 while implementing; do not falsely label it complete. [W02]

All Gore-Wars names, content quantities, tuning values, architecture choices, safeguards, and release targets below are original requirements, not assertions about Torn's exact implementation. Bracketed references point to the source directory. Public documentation supplies feature categories and publicly described interactions, not access to proprietary code or private formulas.

---

## 1. Product mandate

You are the lead game designer, full-stack engineer, multiplayer systems engineer, economy designer, interface designer, content designer, and quality engineer for **Gore-Wars**.

Build an actual persistent, multiplayer, browser-based crime RPG with the breadth and interconnectedness of the systems documented across Torn's wiki. The player must be able to build a character over years through crime, combat, training, work, business ownership, investment, trading, property, faction cooperation, warfare, collecting, travel, racing, casino play, missions, and social reputation.

Do not deliver only a landing page, character dashboard, static screens, localStorage prototype, random-number cash clicker, or disconnected minigames. Every production feature must have real server rules, persistent state, permissions, failure handling, and tests. The underlying game must work when players close their browsers and return later.

Use original code, branding, interface composition, art, geography, characters, descriptions, dialogue, missions, and balance. Preserve comparable gameplay functions without reproducing Torn's logos, screenshots, item art, distinctive prose, database, player accounts, or exact visual layout. Do not claim affiliation. Do not bypass login or other access controls to gather reference material.

Gore-Wars is its own project. It is a premium illustrated, text-and-interface-driven web game—not an Unreal streaming application and not a mandatory real-time 3D shooter. Use one logical shared world and persistent economy initially; individual fights, races, and casino tables may be isolated sessions within that world. Do not impose unrelated 100-player lobby limits.

The long-term world does not routinely wipe. Seasonal scores can reset under published rules without deleting permanent characters, ownership, or achievements. Backups and incident recovery must have honest limits; do not promise technically impossible zero-loss operation.

## 2. Whole-wiki coverage contract

Use Profiles, Main Page, Down To Details, category indexes, and the complete paginated all-pages index as discovery roots. Follow substantive gameplay links and relevant current change notes. Traverse returned continuation links until discovery is exhausted, deduplicate redirects and canonical URLs, and separately identify talk pages, file pages, templates, duplicate revisions, obsolete systems, and non-gameplay material. Respect the source site's access rules and request limits.

Create `docs/reference/wiki-page-inventory.csv` with canonical URL, page title, parent/category, retrieval date, apparent revision date when available, redirect target, retrieval status, review depth, current/legacy/uncertain classification, and reason for any exclusion. A URL being discovered is not evidence that its content was reviewed.

Create `docs/reference/feature-coverage.csv` at the mechanic/subfeature level with: stable feature ID; source URL and heading; concise paraphrased function; source confidence; Gore-Wars equivalent; intentional differences; dependencies; route; domain module; content definitions; acceptance-test IDs; implementation status; and verification evidence. Keep source-review progress separate from code progress.

Use source states `discovered`, `retrieved`, `reviewed`, `uncertain`, `legacy`, and `excluded-with-reason`. Use implementation states `not-started`, `in-progress`, `implemented-unverified`, `verified`, and `blocked`. Never mark a feature verified because a page exists or a button renders.

Do not mix old and new versions into contradictory live rules. Give modern crimes, organized operations, markets, and other replacements one coherent Gore-Wars implementation; keep historical references in an appendix. Do not automatically make retired awards, removed item categories, old market fees, discontinued games, or announced-but-unreleased systems current launch requirements. A retired idea may become an explicitly labeled original addition.

Do not blindly reproduce thousands of reference item names. Extract their relevant item categories, acquisition paths, effect classes, rarity systems, interactions, and endgame functions, then create original Gore-Wars content that covers those functions. Record mechanic consolidation where many source pages map to one implementation family.

Every newly discovered active gameplay function must receive an implementation mapping or an explicit justified disposition. Unknown hidden formulas become named original formulas with tests—not fabricated claims of exact replication. If a source cannot be accessed, record the gap and continue building the verified and specified systems without pretending the gap is resolved.

## 3. World and original identity

Use the exact game name **Gore-Wars** throughout the interface, metadata, account mail, documentation, and original artwork. Suggested tagline: **Build your name. Take the city.** Set the game in **Blackharbor**, a fictional coastal city of competing crews, commercial dynasties, dangerous opportunities, and unstable loyalties.

Create twelve districts: Rustwater Docks, The Cut, Ashmarket, Crown Heights, Glass Row, Lowfield, The Sprawl, Foundry Ward, Saint Vey, Neon Mile, Quarry Reach, and Warden's Gate. Each needs distinct services, economic identity, ambient copy, crime opportunities, discoveries, NPC contacts, and territory nodes.

Players begin with temporary accommodation, modest cash, basic clothing, a starter weapon, and introductions to useful contacts. Support viable careers as a combat specialist, criminal, trader, business director, medic, landlord, investor, racer, collector, or faction organizer. Do not require rigid classes or identical progression paths.

Use premium crime-noir presentation: charcoal backgrounds, steel surfaces, restrained crimson accents, clear typography, convincing city illustrations, polished item renders, and readable data. Avoid gratuitous gore, unreadable blood lettering, copied source layouts, excessive empty cards, and fabricated player activity.

## 4. Interface and interaction standard

Build a desktop-first interface that is genuinely usable on mobile. Keep resources, status, notifications, mail, settings, and critical navigation persistent. Provide collapsible sections, breadcrumbs, contextual help, keyboard shortcuts with remapping/disable controls, search, saved filters, list density options, and a global command menu.

Create original reusable components for resource bars, countdowns, item cards, sortable tables, comparisons, transaction confirmations, timelines, combat logs, maps, badges, and probability/risk explanations. Use semantic HTML, keyboard operation, visible focus, accessible names, sufficient contrast, reduced motion, and non-color-only status indicators.

All screens require loading, empty, unavailable, error, pending, and success states. Disabled actions must explain their reason and next available time. Avoid optimistically showing money, equipment, victory, or rewards before authoritative confirmation. Use clear reconnect behavior and reconcile stale tabs.

Remember harmless interface preferences but never trust browser storage for balances or eligibility. Public profiles load silently; audio and animated effects are user-controlled. Display game time and local time without confusing reset deadlines. Include a low-bandwidth mode and an accessible list alternative to maps.

## 5. Complete website and route inventory

Provide public pages for home, gameplay, register, login, recovery, news, rules, privacy, support, accessibility, and service status. Show real statistics only when measured; otherwise show honest introductory content.

Provide authenticated areas for:

- **Character:** overview, player profiles, player search, statistics, awards, Legacy perks, inventory, equipment, loadouts, gym, crimes, missions, education, and activity history.
- **City/economy:** city map, services, NPC shops, item market, auctions, storefront directory, personal storefront, direct trades, bank, loans, stocks, Influence exchange, jobs, companies, properties, rentals, museum, display cases, salvage, and discarded-item search.
- **Cooperation/competition:** factions, recruitment, roles, armory, treasury, operations, upgrades, ranked wars, raids, chains, territory, rackets, bounties, hospital, jail, overseas travel, hunting, garage, races, and casino.
- **Community/account:** relationships, friends, rivals, target lists, messages, chat, forums, newspaper, events, map workshop, rankings, supporter cosmetics, settings, security, privacy, referrals, help, developer API, support cases, and staff tools.

Use stable public entity IDs and server-side authorization for every private route. Include separate player, faction, company, property, race, and storefront detail pages. Menu labels alone do not satisfy any feature. Exclude unfinished routes from production navigation while retaining clear development status.

## 6. Accounts, security, and onboarding

Implement email registration and verification, login/logout, password recovery, secure sessions, session/device review, account export, and account closure. Use supported authentication libraries, proper password hashing, expiring one-use recovery links, secure cookie settings, and optional player two-factor authentication. Require stronger authentication for staff and sensitive account changes. Never use public profile facts or security questions as reliable recovery secrets.

Create immutable internal user IDs and stable public player numbers. Display-name changes must not affect ownership, permissions, sanctions, or financial history. Preserve rename history with a configurable cooldown. Clearly distinguish test users, NPCs, staff, and ordinary players.

Implement a guided starter sequence with selectable objectives, replayable explanations, safe practice combat, training, one crime, one purchase, one equipment change, one bank explanation, and a community introduction. Reward each step once. Newcomer protection and its expiry must be visible, including actions that voluntarily end it.

Keep PII collection minimal. Do not require a real name, birth date displayed publicly, physical address, or precise location for game profiles. Account closure must explain retention of necessary audit records and anonymization of community records rather than promising impossible deletion of every transaction reference.

## 7. Full player profile system

Build profiles as functional social and gameplay hubs, not decorative character cards. Include portrait, moderated image gallery, honor/banner selection, display name, public ID, title, level, rank, account age, staff/supporter indicators where applicable, faction, employer, home, relationship, and current game status. Honor bars, medals, statistics, signatures, galleries, and contextual actions are distinct features. [W01]

Separate earned rank, selected title, character level, battle ability, and account age. Allow a deliberate level-up action after accumulating sufficient experience, with a clear explanation of what changes; do not let deferred level-ups evade skill-aware protection rules.

Provide buttons for attack, message, chat, send cash, initiate trade, place bounty, report, friend/rival list, target list, statistics, storefront, and display case. Authorize each action again on the server and explain missing prerequisites without leaking hidden data.

Include achievement shelves, competition participation/results, activity visibility controls, optional personal fields, a sanitized rich-text signature, gallery controls, and selectable public statistics. Separate public, owner-only, faction-authorized, and staff-only projections. Never send private cash or battle stats to the browser merely to hide them with CSS.

Online/idle/offline and travel/hospital/jail states must derive from authoritative records. Optional privacy perks may hide permitted information without erasing staff auditability. A memorial status must require reviewed staff action; never infer a real person's death from inactivity. Public profiles must not autoplay sound or execute arbitrary scripts.

## 8. Player states and cross-system eligibility

Define presence, location, combat participation, recovery, account restrictions, and economic reservations as separate state dimensions. A hospitalized player can still be located abroad; do not cram every combination into one contradictory status enum.

Centralize a capability evaluator that explains permitted actions. Baseline rules: healthy players at home can use unlocked local services; players in transit cannot start combat, train at local gyms, commit local crimes, or buy local inventory; healthy players abroad use destination services and eligible co-located combat; hospital restricts physical activity; jail restricts physical activity with explicitly authored prison options. Communication, support, settings, and permitted financial viewing remain available unless moderation restrictions apply.

Travel, combat, operation execution, race entry, casino participation, and item use must specify compatibility. Recheck compatibility at execution, not just when the page loaded. A player cannot escape a committed fight by opening another tab and departing.

Create a tested action-by-state matrix covering home, transit, destination, hospital, jail, combat, new-player protection, account restriction, and casino exclusion. Decide whether each pending activity pauses, continues, cancels, or becomes claimable after state changes. Preserve already-earned obligations even when future actions are restricted.

## 9. Resources and progression

Use **Stamina** for training/combat, **Nerve** for crimes, **Vitality** for health, **Morale** for living standards and training effectiveness, and **Heat** for criminal exposure. Heat is an original Gore-Wars system and is distinct from hardware temperature in simulated digital crimes.

Battle attributes are **Power** (damage potential), **Resilience** (mitigation), **Reflexes** (avoidance), and **Precision** (accuracy). Working attributes are **Manual Skill, Knowledge, and Endurance**. Track specialized mastery independently for each crime family, medical assistance, hunting, racing, and weapon familiarity.

Use versioned server-side curves with bounded multipliers and numerically stable long-term growth. Explain the effects of level, education, work, property, equipment, faction upgrades, consumables, and temporary events. Prevent ambiguous double-counting and define the order of modifier application.

Regenerate resources from server timestamps and effective cap/modifier intervals. Reconcile before spending or displaying an authoritative result. A cap increase today must not retroactively regenerate yesterday's resources at the larger cap. Define above-cap boosters, overflow expiry, Morale decay, depletion, cooldown categories, and offline recovery.

Use Appendix A as initial original tuning, not as proof of balance. Never use the browser clock, refresh count, or a continuously running per-player timer as the authority.

## 10. Awards, perks, utility points, and player lists

Build separate medals, honors, titles, rankings, statistics, and **Legacy Points**. Awards need criteria, progress, eligibility, source event, claim/automatic-grant policy, and duplicate protection. Time-limited and retired honors remain distinguishable from currently obtainable awards. Do not import an old awards table without checking its status. [W13–W14]

Spend Legacy Points on original perk trees with transparent increasing costs, caps, prerequisites, preview, confirmation, and respec rules. Legacy Points are not transferable money. Recalculate affected caps and future gains safely when perks change.

Create an earned, tradable utility currency called **Influence Tokens**, with its own exchange and sink catalog. Use it for licenses, limited refills, list/loadout capacity, selected utility unlocks, and carefully capped convenience benefits. Refills must have explicit eligibility and cooldowns. Licenses unlock functionality; they must not secretly create unrelated recurring grants.

Support friends, rivals, target lists, labels, notes, sorting, reminders shown in-game, and capacity upgrades. List membership is not permission to harass. Keep private target notes private. Job points, faction Respect, casino play tokens, mission credits, salvage credits, racing points, and event currencies must remain separate typed balances. [W24]

## 11. Gyms and training

Build a progression of general gyms, advanced memberships, specialist facilities, and a restricted jail exercise option. Give facilities original names, prerequisites, membership charges, training costs, multipliers, and unlock experience.

Training must let players choose an attribute and valid spend amount, preview applicable modifiers, execute atomically, and see actual gains plus a history. Specialist facilities can require stat balance, previous membership, education, or clearly disclosed consumption restrictions. Losing eligibility must not corrupt previous gains.

Use Morale meaningfully without making temporary maximum Morale the only viable strategy. Provide at least 24 genuinely differentiated facilities across novice, intermediate, advanced, and specialist categories. Calculate each action using a named versioned formula with regression tests. Source observations and community-estimated formulas are not verified access to Torn's engine. [W11–W12]

## 12. Crime engine and criminal development

Build a shared crime framework with distinct activity modules rather than one generic cash button. Track global criminal experience, each family's mastery, unique discoveries, active projects, tool familiarity, Heat, location conditions, and persistent consequences.

Each activity definition needs requirements, costs, available targets, modifiers, a clear risk description, outcome classes, reward ranges, consumed resources, possible injuries/jail, mastery changes, and unlocks. Support clean success, partial success, clean failure, and critical failure. Store the selected outcome and all effects once so retries cannot reroll.

Include dynamic opportunities, finite target availability, planning choices, multi-stage projects, tool upgrades, one-time discoveries, repeat rewards, branch unlocks, and appropriate abandonment rules. Keep progress when allowed and expire it only under disclosed rules.

All cybercrime targets, financial records, credentials, documents, contacts, and victims are fictional game data. No external hacking, real messages to victims, credential harvesting, deployable malware, real identity-document templates, or real arson instructions. Narrative crimes operate through authored game choices and tokens. [W09]

## 13. Distinct crime families

Implement the following sixteen original families. The first thirteen cover the major documented modern crime design patterns; the final three are original expansions, not claims that the source has released matching systems.

| Gore-Wars family | Required playable distinction |
|---|---|
| Street Scavenging | Location choices, discoverable stashes, environmental opportunities, tools, and collection drops. |
| Counterfeit Media | Acquire fictional media stock, choose production batches, meet changing NPC demand, manage quality and limited stock. |
| District Marking | Choose territories and styles; build local recognition that decays; juggle visibility, Heat, and supply use. |
| Retail Lifting | Select shops and items; react to game-generated security windows and alert states; distinct theft risks and loot. |
| Crowd Work | Rotating fictional pedestrian targets with visible clues, approach choices, limited attempts, and differing risk. |
| Phantom Terminals | Place abstract devices in simulated locations; gather fictional tokens over time; choose collection timing before discovery. |
| Break-ins | Scout invented properties, reveal risk, choose an abstract approach, search rooms, and decide when to leave. |
| Street Hustles | NPC confidence and suspicion meters, escalating stakes, crowd changes, and an explicit collect-or-continue decision. |
| Cleanup Contracts | Select narrative jobs, assign abstract tools/material tokens, track stages, and balance time, cost, and exposure. |
| Cipher Contracts | Assemble a fictional computing rig with component placement, power, cooling, progress jobs, and thermal limits; puzzles only. |
| Paper Ghosts | Multi-stage fictional document production with quality checks, materials, education prerequisites, and NPC orders. |
| Confidence Games | Simulated NPC leads and bounded response-board choices with reward/danger zones; no reusable real scam scripts. |
| Ash Contracts | Abstract fictional sabotage contracts with scouting, staged commitment, risk, and consequences; no real ignition methods. |
| Vehicle Jobs | Original expansion: contracts, vehicle condition, recovery timers, buyers, and links to the garage/salvage economy. |
| Freight Intercepts | Original expansion: warehouse manifests as game tokens, route opportunities, inventory space, and contract deadlines. |
| Underworld Collections | Original expansion: NPC debt/protection stories with negotiation, restraint/escalation choices, and faction reputation. |

Cipher Contracts must have an actual rig editor and thermal simulation, not a picture above a random reward button. Confidence Games must have persistent encounters and meaningful state-dependent choices, not an external email generator. Keep crime experience, rig temperature, Heat, and Nerve separate. [W10a–W10b]

## 14. Missions, contacts, and narrative

Create original contacts: **Mara Voss**, a fixer; **Silas Quill**, a broker; **Dr. Imani Vale**, a medic; and **Rex Calder**, a racing organizer. Add further contacts as needed with distinct roles and relationship progression.

Build tutorial contracts, contact reputation, narrative chapters, daily opportunities, longer assignments, branching consequences, repeatable contracts, and a mission-credit shop. Support requirements across crimes, combat, training, trading, collection, travel, medical work, racing, and faction contribution.

Mission objectives must listen to authoritative domain events. Identify eligible targets and quantities precisely. Track acceptance-time restrictions, party credit, failure, abandonment, timeouts, and reward alternatives. Never let the same traded item circulate between collaborators to farm endless mission completion.

Write original mission dialogue and outcomes. Include recovery routes after failure and substitutions when casino exclusion or other account settings make an optional objective inappropriate. Story pages, NPC contacts, and reward shops must be functional. [W35–W36]

## 15. Turn-based combat engine

Implement server-authoritative PvP and NPC combat with explicit encounter creation, eligibility, costs, initiative policy, legal actions, turn/deadline management, outcome, and settlement. Offline defenders use saved defensive preferences. Connected defenders may participate only under a clearly specified model that cannot grant extra turns.

Actions include weapon attacks, melee, reload, authorized temporary items, controlled escape attempts, and defensive behavior. Model accuracy, damage, armor coverage, critical hits, ammunition, weapon modifiers, status effects, and bounded randomness. Create original formulas with transparent player-facing explanations and protected internal details where appropriate.

Set a configurable maximum action count and real elapsed timeout, yielding a defined stalemate or other published resolution. Preserve logs across refreshes. No instant win endpoint, client-selected damage, indefinite lock, or restart to reroll a bad opening.

Include retaliation windows, stealth/identity-concealment outcomes, escape contests, and group distraction as explicitly documented modifiers where enabled. Concealment changes public presentation, not staff auditability; group distraction is capped and cannot create unlimited guaranteed hits.

Record the rule version and initial snapshot required for investigation without exposing secret live state. Combat animation visualizes committed results; it does not determine them. Test equal-stat, mismatched-stat, low-health, no-ammo, full-armor, status-effect, timeout, and disconnected cases. [W15]

## 16. Equipment, ammunition, armor, and combat builds

Provide primary, sidearm, melee, temporary-item, and segmented armor slots with compatibility rules and saved loadouts. Differentiate shotguns, rifles, pistols, automatic weapons, precision weapons, heavy weapons, and melee through game statistics and action costs—not real manufacturing instructions.

Support owned weapon instances with quality, bounded bonuses, rarity, familiarity, attachment slots, and inspectable performance ranges. Armor has body coverage and defense properties; cosmetics are a separate presentation layer. Do not let clothing invisibly override protective equipment.

Create a documented modifier catalog with triggers, probabilities, duration, stack caps, immunity, interaction order, and source priority. Example original effect families include armor pressure, stagger, suppression, bleed-like damage-over-time, recovery, evasion disruption, and controlled counterattack. Keep competitive counterplay and readable logs.

Manage standard and special ammunition as owned consumable resources. Reloads, attachment swaps, borrowing, loss, and race/operation reservations need compatible rules. Respect equipment locks during an active encounter. Weapon bonus and weapon attachment systems are separate, not aliases. [W16–W18]

## 17. PvP outcomes, bounties, and protection

After eligible victories, offer distinct outcomes: leave, mug a capped portion of exposed cash, or hospitalize for a bounded duration. Add arrest/capture only when a career, mission, or event explicitly authorizes it; add NPC loot collection through its own rules. One fight cannot collect incompatible finish rewards.

Keep exposed wallet cash distinct from deposits, escrow, and protected eligible storage. Mugging cannot drain all possessions, silently seize company accounts, or steal a faction's entire treasury through one member. Resolve bounties and finishing rewards once.

Bounties require funded escrow, eligibility, expiry, funding limits, clear payout rules, optional public anonymity, and staff-visible provenance. Detect self-collection, collusion, and repeated-target farming. Refund unearned expired funds according to a published rule.

Create configurable newcomer protection, skill-aware anti-farming rules, diminishing repeat-target rewards, bounded recovery, and meaningful safe economic activity. Do not treat a low displayed level alone as proof that an experienced account is a beginner. Blocking prevents unwanted communication but does not silently promise immunity from permitted game conflict. [W20]

## 18. Group combat and world bosses

Build cooperative NPC targets with encounter windows, health pools, phases, contribution, attack caps, loot tables, respawn scheduling, and participant histories. Create at least eight original bosses, including a logistics kingpin, armored convoy captain, underground champion, industrial security commander, and offshore raider captain.

For simultaneous attackers, define encounter-wide health and atomic damage application. Award the kill and finite loot pool once, while granting only eligible contribution rewards. Credit must not depend solely on the last hit unless the mode explicitly says so.

Create multiplayer assault coordination, opt-in invitations, target availability, contribution boards, and replayable logs. Avoid idle participants receiving full rewards without meaningful involvement. NPCs and scripted tutorial opponents must be visibly distinct from real players.

## 19. Hospital, medicine, and medical careers

Create hospital listings, injury reasons, recovery timers, treatment costs, medicine effects, medical cooldown, player revives, medic skill progression, revive permissions, and paid assistance contracts. Original treatment rules are game mechanics, not medical advice.

Allow revive settings for nobody, friends, faction, approved providers, or everyone. Show expected terms and whether a failed attempt consumes resources. Give repeated revives a configurable diminishing-success or temporary resistance model with clear recovery, not unexplained arbitrary failure.

Medical contracts must escrow agreed fees, verify the recipient and successful service, and prevent payment duplication. Distinguish informal tips from guaranteed contract payment. Previously earned medical career qualifications may remain unlocked after leaving the job if the design explicitly specifies this.

Support home and overseas recovery services with different availability, never trapping a player abroad without a viable return path. Add an optional fictional blood-supply collection/use mechanic with explicit game-only compatibility, extraction costs, storage, and qualification checks. Label its rules as fictional rather than medical guidance. Medical supplies cannot bypass combat locks or reserved-item rules. Provide recovery options even for a character with almost no cash. [W19, W21]

## 20. Jail, bail, busts, and legal careers

Build jail records with reasons, sentence duration, release time, bail, third-party assistance, bust attempts, legal career benefits, failure consequences, and history. Show meaningful available actions rather than an empty waiting screen.

Bust difficulty may depend on original skill, target sentence, recent activity, and repeat attempts. Disclose risk bands and treat success/failure as a committed action. Busting must not grant free duplicate progress through collusive cycling.

Use explicit jail capability rules for communication, restricted exercise, education continuation, work, and operation planning. Distinguish ordinary fictional jail from administrative account restrictions. Staff sanctions are not gameplay targets, cannot be bought off with cash, and require appeal information. [W22]

## 21. Inventory and item ownership

Separate item definitions, unique instances, stack balances, ownership, storage location, and reservations. Define stable IDs, original descriptions, categories, artwork, rarity, quality, weight/cargo class if relevant, tradability, loanability, use effects, acquisition routes, and sinks.

Support inspect, compare, equip, use, split, merge compatible stacks, favorite, lock, send, gift-wrap, store, loan, return, sell, trade, salvage, and discard. Every action must honor ownership and reservation rules. A unique weapon cannot be equipped, auctioned, and loaned as three simultaneously available assets.

Cover equipment; medicine; fictional drugs; food; drinks; candy; boosters; tools; materials; supply packs; clothes; jewelry; flowers; plush toys; cars; artifacts; collectibles; books; special access items; and miscellaneous narrative objects. Keep retired source categories separate from the active taxonomy. [W18]

Owned assets require provenance suitable for support and fraud review. Rare item histories may be public only under an explicit privacy policy. Bulk actions need quantity validation, useful partial-failure rules, and confirmations for irreversible operations.

## 22. Consumables, books, cooldowns, and rehabilitation

Implement resource boosters, Morale items, medicine, food/drinks, fictional drugs, timed books, temporary enhancers, and reward packs. Give each item a precise effect and cooldown group; do not treat all consumables as one universal timer.

Fictional drugs may offer temporary benefits with game-only tolerance, dependency, adverse-event risk, and work/education consequences. Keep these variables distinct. Do not assume one real-world drug effect or biological formula from a game reference. Offer rehabilitation services that reduce the specified game variables with transparent cost and limits.

Books require reading eligibility, one-active-book policy or an explicit alternative, duration, interruption rules, and whether they are consumed or bound. One book effect cannot multiply through inventory duplication or time-zone changes.

Reward containers need clear possible rewards, probabilities or disclosed distribution rules, generation timing, and ownership checks. Never secretly personalize losing odds to spending or engagement. Prevent casino-excluded accounts receiving prohibited casino access through gifts, containers, or alternate routes. [W23, W25]

## 23. Salvage, advanced equipment, and collection sinks

Create **The Iron Vault**, an original advanced-equipment recycler and reward exchange. Accept specified eligible equipment, preview salvage value and irreversible destruction, consume the exact instance, and grant typed salvage credits atomically.

Use salvage credits for original equipment caches, fixed-price upgrade materials, or clearly defined specialist stock. Keep random cache rewards and guaranteed purchases visibly distinct. Exclude equipped, loaned, reserved, protected, or otherwise ineligible items.

Prevent buying and recycling the same generated equipment through an infinite positive-return loop. Bound conversion rates, content supply, and recycle yield. Show transaction history and provenance. This is separate from the basic scrap shop and the player market. [W26]

## 24. City services, shops, discovery, and the dump

Make the city map an actual navigation and gameplay surface with district overlays for services, faction control, conflict, discoveries, and events. All essential functions must also be available from an accessible service directory.

Create original NPC locations: Ironline Armory, Dockside General, Signal House electronics, Glass Row Jewelers, Redline Parts, Saint Vey Pharmacy, Blackharbor Post, Inkhouse Printworks, Quarry Recycling, Sweet Static confectionery, Nightshift Outfitters, estate agents, a bank, a community center, city archives, and a visitor/help center.

Every shop needs relevant stock, pricing, purchase eligibility, finite/shared or explicitly personal inventory, restocking behavior, sale receipts, and purchase limits. Docks, printers, electronics, clothing, and other services need actual item or mission functions, not unused map icons.

Support personal city discoveries, shared event spawns where appropriate, and discarded-item search with resource cost and a documented loot pool. Discarding does not guarantee another chosen account can retrieve that exact object. Prevent dump-based bypasses of transfer restrictions. Add item display cases and collection browsing. [W04–W05, W27]

## 25. Central item market

Build a genuine central market with its own listings, separate from player storefronts. Include category browsing, popularity based on real activity, equipment quality/bonus filters, numeric price/performance filters, sorting, saved searches, quantities, ownership verification, receipts, and historical sale charts. The reference's modern market and bazaars are separate systems. [W28]

Listings reserve actual inventory. Purchases settle funds, taxes, and assets atomically. Support quantity purchases without overselling, stale-price detection, listing revisions, cancellation of unsold stock, optional anonymous presentation, seller blocking rules, and explicit fees.

Anonymity hides public identity only; it never removes accountability from the transaction ledger. Public data must not leak blocked or private fields through filtered endpoints.

Use actual completed trades for market analytics. Label thin markets and avoid a manipulated single listing determining wealth or reward values. Do not create fake sales to make launch charts look busy.

## 26. Player storefronts, direct transfers, and escrow

Create unlockable personal storefronts with original names, banners, stock, ordering, open/closed states, sale history, pricing warnings, and a separate directory. Clearly distinguish storefront exposure, fees, and functionality from central-market listings. An item cannot be listed in both without one shared reservation correctly enforcing supply. [W29]

Provide direct cash/item transfers with recipient confirmation, public-ID disambiguation, notes, optional anonymity when unlocked, and auditability. Make irreversible sends different from protected trades.

Protected direct trades must use a versioned two-sided offer. Offer changes invalidate prior acceptance. Both participants approve the identical version; assets and cash remain reserved until settlement or cancellation. Display all liabilities and restrictions for eligible property or business transfers. Do not allow ownership transfer methods to bypass normal approval or reservation rules. [W30]

Document the boundary between allowed fictional rivalry and platform-enforced trade safety. Do not advertise scam-proof trades and then allow post-acceptance offer swaps. Voluntary unsecured transfers may be nonrefundable, but harassment, account theft, exploit abuse, and real-world fraud remain moderation issues.

## 27. Auctions and settlement receipts

Build time-based auctions with approved item categories, item escrow, opening price, minimum increments, proxy maximum bids, close time, optional capped anti-sniping extensions, buy eligibility, and searchable history. Hide maximum bids from competing players.

Reserve a maximum bid amount or use another explicitly proven funding model; choose one rule and communicate it. On outbid or settlement, release the correct reserved funds once. Resolve equal maximums using a documented deterministic tie rule.

Auction completion must survive worker restarts and multiple settlement attempts. Transfer the item only once and create seller proceeds through the specified cashier mechanism. Define seller cancellation restrictions, bidder commitments, suspensions, and unsold returns. Do not retain money permanently in a failed auction. [W31]

## 28. Banking, storage, cashier claims, and loans

Separate exposed wallet cash, property vault cash, fixed-term deposits, cashier claims, company reserves, faction accounts, and escrow. Do not quietly introduce unlimited instant-access protection that removes the intended mugging and storage tradeoffs.

Create deposit terms with locked principal, rates, cap, maturity time, claim behavior, and explicit early-withdrawal policy. Where interest exists, book it against an economy source account. At maturity, create a non-interest-bearing claim or other documented state rather than silently reinvesting under new terms. [W32]

Create a cashier for eligible auction proceeds, refunds, and prizes. Define which payouts use claims, their protection window, manual collection, and any scheduled wallet release. Display the deadline clearly. Existing claims must not vanish when a player is hospitalized, excluded from new casino play, or away.

Provide fictional loans with borrowing qualification, principal, bounded interest, repayment schedule, partial payments, late penalties, and a recovery plan. Debt is a liability, not a negative spendable wallet. Do not use limitless compounding, total account lockout, or real-world collections. Keep historical reference loan systems out of the live rules unless deliberately adapted. [W33]

## 29. Stock exchange and utility-currency exchange

Create original fictional corporations, persistent market quotes, share ownership, cost basis, realized/unrealized performance, fees, history, and buy/sell confirmations. Use a versioned simulated exchange with explicit liquidity and counterparty rules, not fabricated real stock data.

Support both passive shareholder benefits and claimable dividends after minimum holdings and holding periods. Partial sales must update eligibility predictably. New shares cannot retroactively earn benefits for time they were not held. Prevent split/merge/rebuy tricks from duplicating dividend claims. [W34]

Persist quotes for all players; never roll a new price on page refresh. Reject stale quotes or request confirmation when materially changed. Use realistic bounded market dynamics and tests against rounding arbitrage and predictable unlimited profit.

Build the separate Influence Token exchange with order/listing state, reserves, fees, cancellation, and exact settlement. Do not import a retired guaranteed buyback floor merely because an old wiki paragraph mentions it. Paid cosmetics and paid credits cannot enter either gameplay exchange. [W24]

## 30. Employment and career progression

Create starter careers in retail, hospitality, office administration, medicine, law, education, civil logistics, and casino operations. Each needs ranks, working-stat requirements, wages, training, job points, promotion rules, and original special abilities. Differentiate active ability purchases from passive qualifications. [W37]

Model work eligibility and periodic accrual using actual employment intervals. Hiring just before payroll must not give a full day's unearned wages unless deliberately specified. Handle job changes, firing, inactivity, hospitalization, travel, probation, and unpaid payroll transparently.

Keep job points typed by career/company family and define retention after leaving. Do not silently convert casino-career job points into daily casino play tokens. Explain which unlocked qualifications persist and which employment bonuses stop immediately when the job ends.

## 31. Player-owned companies

Build founding, purchase/transfer, applications, hiring, firing, positions, employee capacity, pay, training, staffing, product/service selection, procurement, pricing, advertising, reserves, upgrades, operating reports, ratings, and company profiles.

Separate director abilities and education from employee effectiveness. Use understandable performance components such as suitability, efficiency, customer demand, capacity, environment, and brand recognition. Employees contribute through actual work-stat suitability and documented modifiers, not arbitrary hidden favoritism.

Distinguish real player sales from simulated NPC demand. NPC demand must have explicit limits, costs, and economic funding. Companies cannot generate unlimited money by pricing one imaginary item at an absurd amount. Rank and star-equivalent progression should have a disclosed evaluation cadence and recovery from poor performance.

Maintain company accounts separately from owner wallets. Payroll, purchasing, sales, taxes, director withdrawals, transfer, insolvency, and liquidation need ledgers and permissions. Display unpaid obligations and define orderly employee dismissal or transfer instead of deleting the company and its debts. [W38–W40]

## 32. Forty original business configurations

Implement these as distinct configurations and supporting mechanics, not forty names using identical numbers. The operational and employee-benefit directions below are original proposals; fully define costs, staffing, capacity, progression, ability costs, and balance for each.

| # | Business type | Operational distinction and benefit direction |
|---|---|---|
| 01 | Corner Market | High-turnover low-margin essentials; small supply discounts. |
| 02 | Clothing Atelier | Seasonal fashion inventory; cosmetic crafting and presentation perks. |
| 03 | Jeweler | High-value low-volume stock; appraisal and collection services. |
| 04 | Florist | Perishable themed stock; collectible sourcing and gift benefits. |
| 05 | Confectionery | Recipe batches and demand peaks; bounded Morale consumables. |
| 06 | Furniture Workshop | Material-heavy production; housing upgrade discounts. |
| 07 | Electronics Store | Component supply cycles; fictional rig-part access. |
| 08 | Vehicle Dealership | Capital-intensive inventory; vehicle appraisal and sales utilities. |
| 09 | Diner | Shift staffing and meal throughput; affordable recovery food. |
| 10 | Steakhouse | Premium ingredients and reservations; improved hospitality benefits. |
| 11 | Seafood Restaurant | Supply freshness and dock contracts; destination-food sourcing. |
| 12 | Coffeehouse | High-frequency orders and opening hours; capped convenience supplies. |
| 13 | Nightclub | Event bookings and staffing; Morale and social-event utilities. |
| 14 | Theater | Production schedules and ticket demand; performance-themed privacy utilities. |
| 15 | Music Venue | Artist contracts and capacity; community event and reputation benefits. |
| 16 | Resort Hotel | Occupancy, service staffing, amenities; lodging-related travel benefits. |
| 17 | Fitness Center | Membership retention and training staff; bounded gym benefits. |
| 18 | Boxing Academy | Coaching and match programs; specific training utilities. |
| 19 | Medical Clinic | Treatment capacity and supplies; medical-career advancement. |
| 20 | Rehabilitation Center | Recovery appointments and staffing; game-only dependency services. |
| 21 | Law Office | Case workload and qualified staff; legal-assistance benefits. |
| 22 | Private College | Course cohorts and instructors; education utility benefits. |
| 23 | Security Agency | Contract deployment and equipment upkeep; protection/defense services. |
| 24 | Investigation Bureau | Simulated cases and report quality; game-only intelligence abilities. |
| 25 | Courier Service | Route density and delivery capacity; delivery efficiency. |
| 26 | Freight Company | Warehouses and cargo schedules; controlled baggage/logistics benefits. |
| 27 | Taxi Cooperative | Fleet availability and fare demand; local-service efficiencies. |
| 28 | Air Charter | Aircraft upkeep and destination demand; earned-game travel advantages. |
| 29 | Marine Transport | Dock contracts and vessel capacity; overseas cargo services. |
| 30 | Race Workshop | Repair bays and parts procurement; race repair/tuning utilities. |
| 31 | Construction Firm | Project stages and materials; property improvement benefits. |
| 32 | Property Agency | Listing inventory and sales commissions; rental/property administration. |
| 33 | Recycling Plant | Sorting yields and material markets; basic salvage efficiencies. |
| 34 | Quarry Operator | Machinery uptime and bulk materials; Resilience-oriented work benefits. |
| 35 | Steelworks | Energy/material inputs and production batches; equipment-material supply. |
| 36 | Glassworks | Quality grading and fragile inventory; collection/industrial supplies. |
| 37 | Printworks | Job queues and consumables; fictional document-project utilities. |
| 38 | Advertising Studio | Campaign capacity and clients; storefront/company exposure. |
| 39 | Broadcasting Network | Programming and audience demand; newspaper/event promotion. |
| 40 | Software Studio | Fictional product releases and support load; simulated digital-crime and research utilities. |

Do not make these advantages purchasable with real money. Avoid one company providing every important combat/economic bonus. Company perks must use the shared modifier engine, have caps, and obey employment eligibility.

## 33. Education and qualifications

Create twelve departments with at least six original courses each: Business, Computing, Engineering, Medicine, Law, Logistics, Mathematics, Sports Science, Behavioral Studies, Art and History, Tactical Studies, and General Studies.

Within each department, progress from foundations through specialist prerequisites to a capstone. Use meaningful unlocks and small cumulative perks rather than seventy-two indistinguishable percentage bonuses. Computing should affect the fictional rig; medicine should enable recovery services; logistics should affect travel/company systems; history should support museum activities; law should support jail assistance; tactical studies should explain equipment mechanics.

Courses need original titles, stable IDs, prerequisites, cost, duration, working-stat gains if any, completion effects, enrollment limits, cancellation terms, and offline completion. Apply completion exactly once. Removing or revising a course requires a migration policy for enrolled and completed players.

Show a qualification tree, searchable catalog, current study, completion history, and the precise effect of leaving a related job. Learning content is game narrative and mechanics, not real qualification or professional certification. [W41]

## 34. Properties, rentals, and household management

Create sixteen residential tiers: Shelter Cot, Bedsit, Basement Studio, Walk-up Flat, Row House, Duplex, Courtyard Home, Townhouse, Suburban House, Loft, Penthouse, Villa, Manor, Country Estate, Waterfront Compound, and Island Retreat.

Each property is a unique owned instance with Morale capacity, upgrades, staff slots, upkeep, vault rules, occupancy, rental eligibility, and specialist amenities. Include garages, training rooms, infirmaries, libraries, secure storage, gardens, and airstrips only where the tier and upgrade rules permit.

Support purchases, sales, moving, multiple property ownership, upgrades, rental offers, fixed-term leases, renewal, deposits, maintenance, staff hiring, and staff wages. Distinguish owner, tenant, household member, and authorized vault user. Owning an unoccupied property does not automatically grant all occupancy benefits.

Leases must have immutable accepted terms. Model sale subject to tenancy, expired leases, unpaid upkeep, staff dismissal, relocation, and access revocation. Move possessions safely to a defined fallback location instead of deleting them. Property valuation and liabilities must not be double-counted in wealth. [W42]

## 35. Relationships, gifts, and ceremonial services

Build consensual in-game partnerships/marriage with proposals, acceptance, rings, ceremony options, anniversary milestones, shared occupancy, relationship history visibility, separation, and explicit permissions. Include a neutral registry and an optional original ceremonial venue rather than mandatory religious identity.

Keep personal ownership distinct from household access. Shared residence is not authorization to seize the partner's bank balance or businesses. Separation must revoke delegated access and resolve occupancy without duplicating or deleting belongings.

Include optional charitable donations, quiet reflection/prayer interactions, and contribution records at original city venues. Participation must not require declaring a real religious identity or provide unlimited resource rewards.

Provide gifts, gift wrapping, greeting messages, and optional community announcements. Prevent paid cosmetics being gifted, sold, or exchanged into wagerable currency under the monetization rules. Keep cosmetic gifting as a separately reviewed future policy if ever added. [W43–W44]

## 36. Faction organizations and governance

Create factions with original insignia, banners, profiles, recruitment, applications, invitations, membership limits, probation, custom roles, granular permissions, leadership/co-leadership, succession, resignation, transfer, and dissolution rules.

Permissions must separately govern recruitment, announcements, forums, diplomacy, armory use, treasury spending, operation management, upgrades, and wars. Show an audit history for all sensitive actions. Leaving or being removed must resolve outstanding loans, reservations, operation slots, and temporary benefits.

Build faction treasury accounts, individual contribution records, withdrawal requests, approval thresholds, spending caps, and budget views. A displayed member credit must correspond to an actual policy and funded liability—not a misleading promise that all deposits can always be withdrawn after leaders spend them.

Armories need tabs for equipment, ammunition, medicine, boosters, tools, and materials. Loaned items remain faction-owned; consumed supplies are expensed. Support returns and recall rules that cannot invalidate an already committed combat action. Add private forums, newsletters, chat, member activity summaries, and recruitment pages. [W45]

## 37. Faction Respect and specialization

Use earned **Respect** for faction development. Separate lifetime statistics, current spendable Respect, committed upgrade value, and losses. Document which crimes, wars, territories, and events create or remove each quantity.

Create core capacity upgrades and specialized branches for training, offense, defense, recovery, logistics, criminal operations, company support, and resource management. Branches need prerequisites, active loadouts, costs, switch cooldowns, refund/respec rules, and limits on conflicting stacks.

A faction cannot switch upgrades after a committed action to retroactively receive a different result. Members receive benefits only after appropriate eligibility/probation. Prevent join-leave cycles from repeatedly claiming grants or refills. Keep specialization strategic rather than making the oldest faction best at everything.

## 38. Organized multiplayer operations

Create at least twenty original faction operations across several tiers. Use scenario roles such as driver, lookout, infiltrator, technician, enforcer, negotiator, and medic. Planning progress, role suitability, team readiness, reusable tools, consumable materials, execution, consequences, and rewards are separate systems. [W46]

Implement explicit stages: recruiting, planning, ready, executing, completed/failed/cancelled. Use configurable sequential or scenario-defined planning dependencies. Define how late arrivals, replacement, absence, jail, hospital, travel, and faction departure affect progress. Do not borrow contradictory rules from different historical versions.

Reserve required tools/materials with clear ownership and return/consume policies. A general item category does not determine whether that item is consumed in a specific operation; that behavior belongs to the scenario requirement. Recheck availability before irreversible execution.

Set the faction/participant payout agreement before committing the run. Display the split, expenses, rounding rule, and eligibility. Settle rewards once and keep a readable narrative/action log.

Original scenario seeds: Dockside Diversion, The Missing Manifest, Glass Row Switch, Midnight Freight, Ashmarket Exchange, Empty Penthouse, The Quiet Convoy, Inkhouse Run, Neon Mile Take, Warden's Window, Quarry Ledger, Blind Warehouse, Cold Storage, Velvet Departure, The Borrowed Vault, Signal Blackout, Harbor Lock, Redline Extraction, Crown Accounts, and Last Ship Out. Write original stages and outcomes instead of copying source scenario names or scripts.

## 39. Ranked wars, raids, chains, and combat standings

Implement distinct rules for ranked faction wars, optional unranked challenges, raids, attack chains, and territorial conflict. Each mode needs admission, targeting, scoring, duration, reward, surrender, cancellation, and historical records.

Ranked matchmaking should use member strength and past results with protections against roster sandbagging, deliberate tanking, and repeated arranged opponents. Declare roster-lock/probation rules, schedule preferences, queue widening, and what happens when no fair match exists. Do not force extremely unequal opponents merely to clear a queue.

Chains need a visible timer, eligible attack criteria, milestone rewards, contribution, cooldown, and anti-farming restrictions. Raids need a separate objective and risk model rather than relabeling ranked wars.

Show live scoreboards, war reports, member contribution, rewards, and audit trails. Score qualifying combat once. Publish tie-breakers and handling of downtime, banned participants, surrender, external hits, and incomplete matches. Do not claim to reproduce an undisclosed source matchmaking formula. [W45, W47]

## 40. Territory, rackets, and endgame sabotage

Build an original territory graph across Blackharbor's districts. Nodes have adjacency, ownership, vulnerability windows, capacity, income, and contested state. Support claiming, defensive commitment, attack commitment, occupation, transfer where allowed, and a readable history.

Rackets are temporary fictional ventures with bounded income, entry requirements, control conditions, and expiry. Their rewards must come from configured economy budgets. Distinguish rackets from passive permanent territory benefits.

Use upkeep, expansion friction, temporary vulnerability, and diminishing concentration advantages to limit permanent monopoly. Give smaller factions viable objectives and progression rather than forcing them to feed the strongest group.

Add an endgame **Blackout Operation** as original abstract sabotage with warning, counterplay, expensive game-only components, bounded disruption, cooldown, and recovery. Do not implement real explosive, chemical, or radiological recipes. Faction conflict must never delete another group's entire history through an unannounced mechanic. [W48–W49]

## 41. Overseas travel and regional markets

Create twelve original destinations: Kestrel Bay, San Varo, Cinder Cay, Port Aurelia, Frosthaven, Nacre Coast, Veylan, Solmere, Copper Mesa, Meridian Reach, Dusk Atoll, and Highglass.

Give each a distinct travel duration, fare, item supply, collection category, local services, mission opportunities, artwork, and risk profile. Keep a clear global time model and avoid assigning real geopolitical events to fictional locations.

Implement departure, transit, arrival, grace period, overseas activity, and return. Model cargo capacity, upgrades, transport methods, airstrip benefits, faction/company benefits, item eligibility, and synchronized foreign shop stocks. Confirm restrictions before departure.

Only eligible co-located players may fight. Do not silently assume a reference rule about carried weapons or overseas actions without checking its version. Define Gore-Wars' own consistent equipment/cargo policy. Hospitalization abroad requires local recovery and a feasible return route. Offline arrival settles once. [W50]

## 42. Hunting and destination activities

Create statistical hunting at suitable fictional destinations with skill, Stamina cost, equipment, difficulty, rewards, progress, and travel integration. Include non-lethal wildlife tracking or expedition alternatives with their own rewards so this is not the only destination activity.

Use original creatures or ordinary wildlife described non-graphically, game-only mechanics, and clear success/risk information. Do not present the system as real-world hunting advice. Log results and reward sources; prevent zero-cost loops through travel or equipment swaps. [W51]

## 43. Garage, vehicles, and racing

Build a garage with at least thirty original vehicles, performance profiles, class eligibility, owned upgrades, tuning presets, condition, repairs, resale, and vehicle comparisons. Give speed, acceleration, handling, braking, and reliability distinct influence.

Create at least twelve original tracks and official, custom, private, and seasonal race formats. Specify entry requirements, registration, start time, laps, capacity, class, entry fee, prize pool, cancellation, and repairs. Reserve the vehicle and fees consistently with other activities.

Use a server-authoritative race simulation with deterministic replay from a committed seed, bounded randomness, track segments, driver skill, equipment, and condition. Clients animate stored results. Do not let browser frame rate determine wins.

Implement racing points, licenses, classes, records, standings, race logs, crash outcomes, and entry-fee refunds. Reconnecting cannot restart a race or reroll a crash. Returning a borrowed or traded vehicle cannot invalidate ownership mid-race. [W52]

## 44. Casino framework and currency boundaries

Build **The Red Ledger Casino** with a complete lobby, rules, wager selection, allowed play-token budget, session history, statistics, limits, and self-exclusion. Daily casino play tokens are separate from cash stakes and casino-employment job points. Explain reset behavior and which games consume them. [W53]

Use only non-purchasable, gameplay-earned fictional currency. No cash-out, cryptocurrency prizes, redeemable goods, purchased wager credits, or purchased tradable items that can be converted to wagers. Paid cosmetics are nontransferable and have no gameplay-sale value. Keep this separation in the data model, not just in a disclaimer.

Self-exclusion and limits must apply across direct game routes, gifts, promotions, API access, and alternate entry points. Do not pressure users to chase losses or block the collection of money already legitimately owed. Keep optional casino missions replaceable.

Use server-side cryptographically appropriate randomness and correct unbiased shuffling/selection. Publish game rules, payout definitions, and verification details where offered. Commit/reveal secrets must not reveal an active deck or future shared outcomes. Test distributions independently; a seed display alone is not proof of fair implementation.

Reserve stakes and maximum potential payouts under a documented house-bankroll policy before accepting a round. Pause unaffordable games instead of accepting bets that cannot be honored. Poker table funds must reconcile to player reserves, pots, payouts, and explicit fees.

Keep payments disabled or sandboxed until separately authorized and reviewed. Mature-content positioning, age gating, consumer disclosures, and any monetization launch require an appropriate production review. Do not assume fictional currency automatically settles every jurisdictional requirement.

## 45. Casino game implementations

Implement eleven distinct games with original presentation and complete settlement:

| Game | Minimum rules and state requirements |
|---|---|
| Blackjack | Hand values, dealer policy, natural blackjack, split, double, surrender/insurance if supported, stake reservation, and payouts. |
| Texas Hold'em poker | Multiple real players, blinds, dealer movement, legal raises, all-ins, side pots, ties, private cards, time banks, reconnects, and table accounting. |
| Roulette | Defined wheel layout, permitted bet types, payout table, closing bets, committed spin, and atomic settlement. |
| Slots | Versioned reel strips or equivalent documented distribution, paylines, special symbols, payout table, and independently tested return. |
| High-Low | Ordered-card rules, equality outcome, collect-or-continue decisions, deck state, and loss settlement. |
| Keno | Number selection, draw without duplicates, hit counts, wager tiers, and exact payout table. |
| Craps | Come-out and point phases, legal bets by phase, dice results, payout rounding, and outstanding-bet accounting. |
| Prize Wheels | Visible possible rewards, disclosed probabilities, cooldown, ownership, and settled rewards. |
| Lottery | Ticket sales, cutoff, draw, prize tiers, unclaimed prizes, cancellation/refund policy, and immutable draw record. |
| Fictional event betting | Clearly simulated in-world events, quoted odds, cutoff, void rules, result source, and one-time settlement. |
| Chamber Duel | Abstract avatar-only chance contest with fictional health consequences, transparent risk, and no real-world self-harm instructions. |

Poker must never send opponents' hidden cards, unrevealed deck state, or future outcomes to clients. Add anti-collusion review, transparent rake/fee policy if any, buy-in bounds, minimum raises, short-all-in reopening rules, dead blinds where applicable, heads-up edge cases, and hand histories with privacy-safe redaction. Test against known hand-ranking cases and randomized independent evaluation.

Treat poker tournaments, retired arcade games, and extra casino modes as original extensions unless verified as current reference features. Do not label a wiki's planned feature already implemented in Gore-Wars. [W53–W54]

## 46. Museum, display cases, and collectors

Build an original museum, set collection catalog, curators, trade-ins, artifact appraisal, public display cases, collection statistics, and special collector offers. Include flowers, plush toys, travel souvenirs, cards, books, artifacts, and event memorabilia with original names and art.

Set exchanges must consume exact owned quantities and award typed rewards once. Show missing items and valid acquisition paths without revealing another player's private inventory. Limited collector offers need funded limits and reliable expiry.

Create meaningful item sinks and long-term collection goals that connect foreign travel, crimes, NPC shops, missions, racing, and events. Distinguish current obtainable items from archived collectibles. Avoid using the same one-item set with a new label to inflate content counts. [W55]

## 47. Calendar and annual event framework

Create a game calendar with local-time display, server deadlines, opt-in notifications, event pages, participation rules, rewards, standings, and archives. Seasonal participation must not require continuous attendance to retain normal permanent progress.

Implement original event families: **Nightfall Siege** for team elimination-style competition; **Founders' Hunt** for hidden-object discovery; **Maskfall** for autumn collection and trade-ins; **Winter Quarter** for explorable seasonal maps; **Redline Festival** for racing; and **Blackout Weekend** for coordinated city objectives.

Each event needs defined enrollment, start/end behavior, daily limits, score calculation, late joins, fraud controls, currencies, reward claims, expiration/carryover, and archival records. Keep active events separate from historical competitions documented in the reference. [W56]

## 48. Player-created seasonal maps and minigames

Create an original event-map workshop with grid/tile editing, decorations, spawn points, NPC dialogue, quest steps, triggers, locked chests, collectibles, approved minigame stations, map metadata, versioning, preview, and submission for review.

Maps may express content only through a validated declarative schema. No arbitrary JavaScript, remote code, uncontrolled HTML, or direct money-grant expressions. Server-authorized templates and reward budgets control every economic effect.

Support published-map discovery, player progress, checkpoints, completion rewards, collectible souvenirs, daily minigame participation, accessible movement controls, and retiring maps without erasing earned trophies. Validate reachability and reward loops before publication.

Create at least five polished original minigames such as a symbol-memory board, package sorter, route-connection puzzle, word scramble, and timed item finder. Their score inputs require server checks appropriate to the reward risk. The reference event demonstrates that explorable maps and player-made content are a substantive system, not merely a holiday banner. [W57]

## 49. Communication, forums, newspaper, and community

Build direct mail, group conversations, global/help/trade/faction/company chat, notifications, and forums. Provide mute, block, report, rate limits, recipient controls, moderation context, search, unread state, pagination, reconnect, and missed-message recovery.

Forums need categories, threads, rich text from a safe allowlist, polls, reactions/karma with abuse controls, pinned/locked threads, edit history, private organization boards, announcements, recruitment, bug reports, guides, and archives. Permissions apply to search results and notifications, not just the thread page.

Create **The Blackharbor Ledger** newspaper with editorial submission, review, original player stories/comics, patch notes, official announcements, game-economy reports, event coverage, classifieds, jobs, faction recruitment, properties, and moderated ads. Review uploaded files and reject unsafe embedded content.

Add a community help center, original game rules, accessible reporting, referrals with qualification checks, a newcomer mentor directory, an advisory feedback panel, and player suggestion workflows. Advisory participants are not automatically moderators and cannot access private account records. Do not invent a live population, fake user posts, fake testimonials, or pretend NPCs are people. [W58–W61]

## 50. Statistics, intelligence, rankings, and developer API

Build personal activity logs and statistics across resources, crimes, combat, finance, work, travel, medical assistance, racing, casino, faction contribution, and collection. Distinguish cumulative counters from current holdings and reconcile aggregates to underlying records.

Hall of Fame pages need global standings, nearby rank context, changes over defined periods, historical snapshots, faction/company categories, and privacy-safe treatment of hidden statistics. Explain each metric and avoid laundering manipulated item prices into verified net worth. [W64, W66]

Add bounded, fictional in-game intelligence abilities through appropriate jobs, items, or missions: permitted stat estimates, historical snapshots, and operation scouting. Clearly distinguish fresh estimates from exact private data. Do not expose private contact information or real account-security data as a gameplay reward.

Provide a documented read-only developer API with scoped revocable keys, rate limits, usage history, schema versioning, and field-level filtering. Never expose another user's private inventory, faction treasury, hidden cards, or support records through a public endpoint. Keep write automation outside the initial public API. [W62]

## 51. Supporter features and intentional design differences

Keep the complete core progression playable without payment. Offer a supporter membership for noncompetitive cosmetics and presentation conveniences: themes, profile decoration, cosmetic honor frames, and optional expanded personal analytics that do not gate accessibility or basic game information.

Use a separate paid-entitlement ledger. Purchased credits, memberships, and cosmetics are not transferable into earned cash, Influence Tokens, wager tokens, competitive equipment, or marketable reward packs. Do not sell stat boosts, action refills, protected combat immunity, or stronger weapons. This intentionally differs from any reference monetization feature that creates paid gameplay advantage. [W63]

Other intentional differences include original geography/content/formulas, bounded harassment protections, safe escrow, restrained fictional crime depictions, simulated rather than real-world event betting, and accessible recovery paths. Record these in `docs/design-differences.md`; do not hide them behind a claim of exact cloning.

Payment integration remains behind a feature flag until explicitly authorized, correctly configured, and tested. No real charges, production credentials, or payment-provider account creation during ordinary development runs.

## 52. Staff administration, reports, and appeals

Create roles for owner, administrator, economy operator, moderator, support agent, content editor, and read-only analyst. Use least privilege, strong authentication, explicit permissions, and audited access to sensitive records.

The owner's screen name is not an authentication credential. Bootstrap the owner through a secure one-time server-side command assigning a verified immutable account ID. Never make anyone an administrator merely for choosing `gtagod2020torey` as a name.

Build dashboards for reports, evidence, sanctions, appeals, suspicious transfers, account compromise, economy anomalies, job failures, server health, events, content, feature flags, and announcements. Reports must work for new users; do not copy source restrictions that prevent them from requesting help.

Corrections to money and inventory require reason codes and compensating records, not silent database edits. High-impact grants and destructive operations need additional approval. Staff actions must not allow secret personal enrichment or access to private live poker cards for advantage.

Separate confidential vulnerability reports from public bug reports. Include ticket states, communication, evidence retention, redaction, and appeal paths. Account restrictions preserve auditability and valid third-party obligations. [W65]

## 53. Technology and repository architecture

Use TypeScript throughout, a Next.js App Router frontend, a dedicated Node.js game/API service, PostgreSQL as authoritative storage, Redis for ephemeral coordination/cache, and a durable worker system such as BullMQ. Check supported stable versions against official documentation and pin them with a lockfile; do not guess the latest release from memory.

Use a modular monolith first. Share a domain layer and validated contracts, but do not ship private game logic, secrets, or unrestricted database objects to the browser. Keep gameplay independent of any LLM API.

Recommended structure:

```text
apps/
  web/                 # Public pages, authenticated UI, original components
  api/                 # Authoritative game commands, queries, realtime transport
  worker/              # Scheduled transitions and durable background processing
packages/
  domain/              # Rules, policies, formulas, state machines
  database/            # Schema, migrations, repositories, transaction helpers
  contracts/           # Validated request/response and event types
  ui/                  # Shared presentation and accessibility components
  config/              # Validated settings and versioned balance values
content/               # Original validated game catalogs
assets/                # Original/licensed assets and provenance manifest
scripts/               # Setup, seeds, validation, simulation, maintenance
tests/                 # Unit, integration, end-to-end, load, recovery tests
docs/                  # Design, coverage, API, security, operations, evidence
```

Server Components are appropriate for server-rendered data views; interactive controls use explicit client boundaries. Reauthorize every Server Action/API mutation. Never publicly cache authenticated balances, inventories, private profiles, or organization secrets. Put HTTP routes and pages in compatible framework locations and follow the installed framework's current conventions.

Run long-lived WebSocket services and workers on infrastructure supporting persistent processes. The web frontend may deploy separately; do not assume request-scoped functions can host permanent game loops. Provide local Docker services, migrations, repeatable seeds, local email capture, and storage adapters. [T01]

## 54. Data model, ledger, and ownership invariants

Create normalized schemas for users, sessions, roles, profiles, resource intervals, stats, achievements, perks, inventories, owned instances, reservations, loadouts, modifiers, crime projects, missions, fights, actions, injuries, jail records, bounties, markets, storefronts, auctions, trades, deposits, loans, stocks, utility currencies, employment, companies, courses, properties, leases, relationships, factions, operations, wars, territories, travel, vehicles, races, casino sessions, collections, events, maps, communications, moderation, notifications, and jobs.

Money uses integer minor units or exact numeric types, never floating-point balances. Serialize large integers safely as validated strings where appropriate. Define caps and overflow handling. Working stats and battle stats also need a numeric representation with sufficient long-term range and controlled rounding.

Maintain balanced ledger postings per currency, with explicit mint, sink, escrow, liability, and owner accounts. An account balance is a controlled projection of its ledger, not an arbitrary editable column. Reconcile projections regularly.

Enforce invariants with database constraints and transactions: a unique item has exactly one owner; reservations cannot exceed available quantity; ordinary spendable accounts cannot go negative; obligations are not counted twice; an award/settlement effect has a unique business key; and every ownership transfer has matching history.

Choose locking, optimistic version checks, and isolation deliberately. A database transaction at default isolation is not by itself proof against all concurrent anomalies. Use consistent lock ordering and bounded retries for conflicts/deadlocks. [T02]

## 55. Authoritative command pipeline and API contract

Every state-changing command follows this pipeline: authenticate; check request size/rate; validate typed input; resolve an actor-scoped idempotency key plus request hash; open the required transaction; lock/version the relevant records; reconcile time-based state; reauthorize objects and capabilities; check ownership, resources, and reservations; resolve original rules; atomically record results, ledger postings, inventory changes, activity, and outbox events; commit; then publish notifications.

A reused idempotency key with a different payload must fail clearly. A duplicate valid command returns its stored result, not a new roll. Stateful losing outcomes are valid committed outcomes; do not throw an exception that rolls back their cost and lets the client retry until winning.

Create explicit commands rather than a dangerous generic client-controlled grant endpoint. Examples: `TrainAttribute`, `AttemptCrime`, `CommitCrimeStage`, `StartFight`, `SubmitCombatAction`, `FinishFight`, `UseItem`, `PurchaseListing`, `AcceptTradeVersion`, `PlaceAuctionBid`, `CollectBankClaim`, `EnrollCourse`, `JoinOperation`, `DepartDestination`, `EnterRace`, and `SubmitCasinoAction`.

Return structured success/error codes, state versions, affected resources, receipt IDs, and useful recovery guidance. Use server events for mission progress and achievements. Do not place external emails, payment calls, or WebSocket sends inside retryable economic transactions.

Use a transactional outbox for effects after commit. Deliveries can repeat; consumers must enforce one business effect. Keep random resolution stable for the logical command during internal retries, and never expose a result before commitment. [T02–T03]

## 56. Durable jobs, timers, and offline progression

Model resource changes, travel, courses, hospital/jail release, auction closes, payroll, company production, deposits, dividends, market restocking, operation execution, wars, races, draws, events, and expiration as explicit timestamped transitions.

Use indexed due-time records, durable queues, unique transition keys, worker leases where needed, retries, dead-letter handling, and periodic reconciliation. Queue delivery may occur more than once; reward settlement must not. Avoid one endlessly active timer per player.

A restart must discover overdue work and settle it according to published catch-up rules. Specify whether missed business periods aggregate, cap, or replay. Do not accidentally pay the same payroll twice or skip an operation because its scheduled instant passed during downtime.

Store authoritative times in UTC. Localize display only. Clock changes in a player's device, daylight-saving transitions, reconnects, and multiple browser tabs cannot create extra daily rewards. Version scheduled jobs and gracefully handle definitions that change between scheduling and execution. [T03]

## 57. Security, exploit resistance, and privacy

Implement object-level authorization, input validation, safe output encoding, CSRF protection where applicable, restrictive browser policies, upload validation, session revocation, secret management, dependency review, and rate limiting. Avoid exposing administrator APIs or sensitive debug responses publicly.

Sanitize rich text and prohibit active uploaded content. Restrict file size/types, strip unnecessary metadata, validate image decoding, and avoid server-side fetching of arbitrary user URLs that could reach private services. Protect reset and verification endpoints from enumeration and abuse.

Threat-model duplicate spending, item duplication, offer swapping, price manipulation, replay attacks, unauthorized organization spending, game-clock spoofing, race/combat tampering, casino leakage, map-reward loops, referral farms, and privilege escalation.

Detect suspicious action rates, transfers, economic clusters, and collusive rewards for investigation. Shared IP addresses are signals, not automatic proof of cheating. Do not require invasive desktop scanning or disclose anti-abuse thresholds unnecessarily.

Define retention, export, deletion, log redaction, and moderator access boundaries. No production credentials, real payment keys, private profile data, or real player exports belong in source control or public seeds.

## 58. Deployment, observability, backups, and recovery

Provide reproducible local startup, environment validation, CI checks, staging and production separation, migration plans, health/readiness checks, structured logs, traces, queue metrics, alerting, and documented release commands.

Set up database backups and restoration procedures with explicit recovery objectives, then test restoration. Include reconciliation after a worker outage, partial deployment, failed migration, Redis loss, and replayed outbox events. Restore from authoritative records, not a screenshot of a balance.

Measure frontend performance and backend latency for representative actions. Make read paths scalable through pagination, indexes, bounded queries, caching of appropriate public data, and carefully chosen aggregates. Do not cache private data publicly to pass a benchmark.

Use a documented load-test target of 1,000 simulated concurrent users with an explicit action mix and test infrastructure, then report actual results, bottlenecks, failures, and costs. This is a benchmark goal—not a claim that an untested build supports 1,000 users.

Do not deploy, purchase infrastructure, modify DNS, or charge payment methods without appropriate authorization. When credentials are absent, deliver complete runnable configuration and state precisely which external verification remains unavailable.

## 59. Original full-release content targets

These are Gore-Wars production targets, not counts extracted from Torn and not permission to generate filler. Every definition needs valid references, original presentation, meaningful mechanics, acquisition/use paths, and testing.

| Content group | Minimum full-release target |
|---|---:|
| Blackharbor districts | 12 |
| Overseas destinations | 12 |
| Distinct crime families | 16 |
| Crime subactivities/projects | 64 |
| Authored crime outcome variants | 320 |
| Cooperative faction scenarios | 20 |
| Gym facilities | 24 |
| Original business configurations | 40 |
| Education departments / courses | 12 / 72 |
| Residential tiers | 16 |
| Meaningful item definitions | 400 |
| Vehicles / race tracks | 30 / 12 |
| Missions/contracts | 100 |
| Achievements/honors | 180 |
| Collectible sets | 12 |
| Cooperative NPC bosses | 8 |
| Casino games | 11 |
| Annual event families | 6 |
| Original event minigames | 5 |

Create an asset/content manifest. The 400-item target counts mechanically meaningful or genuinely collectible definitions, not generated color duplicates. Validate identifiers, prerequisites, loot weights, unlock paths, prices, recipes, references, art coverage, and translations where supplied.

Original art should include brand assets, city/district/destination illustrations, NPC portraits, equipment/items, vehicles, property tiers, faction decorations, and UI iconography. Track provenance and licensing. Do not pass off placeholders as finished production art.

## 60. Economy simulation and balancing evidence

Document every source and sink of each currency and major item family. Track resource opportunity costs, action success/risk, effective rewards, company profit, investment returns, travel margins, item consumption, fees, and inactive wealth.

Simulate varied player strategies over 30, 90, and 365 days: casual newcomer, dedicated criminal, trainer, medic, trader, company director, collector, racer, and faction specialist. Include coordinated abuse strategies and newcomer disadvantage—not only an ideal average player.

Measure money supply, wealth concentration, item circulation, inflation, earning-rate outliers, jackpot liabilities, debt traps, and dominant progression loops. Do not claim a simulated result is real player behavior. Publish assumptions and tune versioned values based on evidence.

Ensure paid entitlements cannot create a path to wagerable currency. Verify that market/salvage/collection/company loops do not mint unlimited profit without an intended scarce input. Matured deposits, inactive stock claims, and faction payouts must remain financially consistent.

## 61. Required automated and browser acceptance tests

Create unit tests for formulas, modifiers, permissions, inventory, card rankings, payout tables, crime state machines, resource intervals, and achievements. Create real-database integration tests for concurrency, ledger balance, queue recovery, outbox delivery, and schema migrations. Add end-to-end browser tests for complete player journeys.

At minimum, prove all of the following:

1. Register, verify, recover an account, revoke a session, set privacy, and protect staff permissions.
2. Close the browser, advance server time in tests, return, and receive correct resources and pending outcomes exactly once.
3. Complete the tutorial without duplicate grants; progress through each distinct crime family and handle its persistent failures.
4. Train with stacked modifiers, change a cap mid-interval, respec, and verify no retroactive or duplicate gains.
5. Fight with missing ammo, armor, effects, timeout, escape, group damage, finishing choices, and location changes without illegal actions.
6. Recover at home/abroad, respect revive permissions, pay a medic once, post/claim a bounty, and bust/bail with correct risks.
7. Race two buyers for one item; spend the same funds in two tabs; reuse idempotency keys; try negative, overflowing, and malformed quantities.
8. Swap a trade offer after acceptance, recycle reserved equipment, loan an auctioned item, and confirm every invalid path fails safely.
9. Exercise proxy bidding, equal bids, anti-sniping, outbid refunds, lost worker delivery, and duplicate settlement.
10. Mature deposits, collect cashier claims, repay loans, partially sell dividend holdings, and reconcile every ledger.
11. Hire/fire around payroll, exhaust company reserves, transfer a business, complete courses offline, expire rentals, and separate household permissions.
12. Restrict faction withdrawals; reserve operation supplies; replace a planner; hospitalize a participant; complete/cancel operations without duplicated payouts.
13. Run ranked wars, chains, raids, and territorial conflicts with roster changes, tie-breakers, downtime, and one-time rewards.
14. Travel, shop abroad, handle shared stock, repair cars, run races, reconnect, and restore from a crash without rerolling outcomes.
15. Verify blackjack/roulette/craps/lottery payout cases and poker side pots, ties, short all-ins, heads-up behavior, disconnects, and private-card secrecy.
16. Enforce casino exclusion across direct URLs, gifts, alternate endpoints, refills, and notifications while preserving owed withdrawals.
17. Publish a reviewed event map; reject unsafe scripts, unreachable quests, arbitrary reward definitions, and infinite reward loops.
18. Send/report/block messages, moderate a forum, submit an article, and verify private content is absent from public search/cache/API responses.
19. Restart workers during settlement, lose Redis, restore a database backup, process late jobs, and handle daylight-saving boundaries.
20. Verify mobile/keyboard workflows, reduced motion, empty/error states, reconnects, observability, and honest load-test results.

Record actual commands, environment, test counts, failures, and evidence. A test that was not executed is `not-run`, not `passed`. Use scripted development NPCs/test users only in nonproduction seeds, and label them honestly.

## 62. Delivery milestones and completion rules

Inspect any existing repository first. Preserve working code and explain verified existing functionality before changes. If none exists, create the repository, architecture decisions, source inventory, and initial feature matrix, then implement—not merely describe—the first slice.

**Milestone 1: Playable foundation.** Accounts, original layout, authoritative resources, database/ledger, inventory, one crime module, gym, tutorial mission chain, activity logs, and basic staff diagnostics. A new account can play, spend, earn, log out, and resume safely.

**Milestone 2: Character and economy.** Full profiles, equipment, PvP, hospital, jail, bounties, shops, markets, storefronts, escrow, auctions, banking, loans, starter jobs, education, and properties.

**Milestone 3: Organizations.** Player companies, faction governance, treasury/armory, upgrades, operations, ranked wars, chains, raids, territory, and rackets.

**Milestone 4: World activities.** Remaining crime modules, travel, hunting, stocks, racing, casino, collections, missions, bosses, events, map workshop, full community tools, and supporter entitlements.

**Milestone 5: Complete original content and release hardening.** All catalogs, source-disposition audit, balance simulations, accessibility, security review, load testing, backup restoration, staging verification, and final release checklist.

These milestones order work; they do not reduce the final scope to a minimum viable product. Build security, moderation, observability, and tests throughout—not only at the end.

Maintain `README.md`, `GAME_DESIGN.md`, `FEATURE_MATRIX.md`, `ARCHITECTURE.md`, `BALANCE.md`, `API.md`, `SECURITY.md`, `OPERATIONS.md`, `TEST_REPORT.md`, `BUILD_STATUS.md`, and the reference files from Section 2. Include setup commands, migrations, seeds, environment examples without secrets, implementation paths, and precise remaining gaps.

A feature is complete only when the UI, domain rules, persistence, authorization, concurrency behavior, timers, abuse controls, tests, and documentation are connected and verified. Do not fake population, transactions, action results, passing tests, functioning payments, or deployments.

Start building the first dependency-complete slice immediately when execution tools are available. At the end of an execution session, leave a runnable milestone and exact remaining tasks. Do not promise that a project of this breadth will be completed in one model generation, and do not ask the owner to re-describe requirements already stated here.

**Final standard: Gore-Wars must be a genuinely playable, interconnected, persistent multiplayer crime RPG with its own identity—not a renamed homepage or shallow imitation.**

---

## Appendix A. Initial original balancing profile

Use this only as a coherent initial playtest configuration. Version it, simulate it, and report adjustments. Values below are not copied source formulas or proven balance.

```yaml
rulesVersion: gore-wars-playtest-1
world:
  name: Blackharbor
  timeAuthority: server-utc
  persistentMainWorld: true
  routineCharacterWipes: false
resources:
  stamina:
    baseCap: 100
    regenAmount: 5
    regenEverySeconds: 300
  nerve:
    startingCap: 30
    regenAmount: 1
    regenEverySeconds: 240
  vitality:
    startingCap: 100
    healthyRegenPercentOfCap: 1
    healthyRegenEverySeconds: 300
  morale:
    startingBaseline: 100
    propertyDeterminesCap: true
  heat:
    startingValue: 0
    minimum: 0
    maximum: 100
    outsideCrimeDecayPerHour: 2
costs:
  basicTrainingStamina: 10
  initiateCombatStamina: 20
  introductoryCrimeNerveMin: 2
  introductoryCrimeNerveMax: 6
combat:
  maximumActionsPerParticipant: 30
  maximumEncounterSeconds: 300
  startingMugFractionOfEligibleWallet: 0.05
  newcomerProtectionDays: 14
  voluntaryPvPEndsProtection: true
training:
  startingValuePerBattleAttribute: 10
  baseGainPerBasicAction: 1
  growthCoefficient: 0.02
  growthExponent: 0.75
  minimumMoraleMultiplier: 0.75
  maximumMoraleMultiplier: 1.25
commerce:
  centralMarketSaleFeeBasisPoints: 300
  additionalAnonymousFeeBasisPoints: 200
  auctionAntiSnipeWindowSeconds: 120
  maximumTotalAuctionExtensionSeconds: 1200
casino:
  realMoneyPurchasesOfWagerCurrency: false
  cashOut: false
  purchasedTradableItems: false
  paidCurrencyConversion: false
  selfExclusionRequired: true
payments:
  enabledByDefault: false
```

For the initial training model, define a basic gain before rounding as `(1 + 0.02 * stat^0.75) * moraleMultiplier * facilityMultiplier * permittedBonusMultiplier`, then deduct the action cost and update the selected stat atomically. This is an original starting equation. Explicitly cap temporary multiplier combinations and use suitable numeric precision. Do not present it as Torn's hidden gym formula.

Define further combat/economy equations in `BALANCE.md` before using them. Add test cases showing monotonicity, sensible equal-stat behavior, bounded probability, correct edge cases, and realistic progression. The YAML does not substitute for all missing formulas or rate tables.

## Appendix B. Reference directory and evidence boundaries

The following public pages were consulted at the system level while preparing this prompt. A long catalog being opened does not mean every row was extracted. Index pagination is incomplete in this preparatory source set; completing it is an explicit implementation task. Large catalogs, historical sections, and empirical formula sections require finer-grained review before claiming parity.

Use these links as the initial reference register, not a license to reproduce source text or artwork. The bracketed references throughout the prompt identify the related feature family. They do not assert that every original Gore-Wars rule in that section exists in Torn.

| Ref | Public reference | Gore-Wars coverage / evidence limit |
|---|---|---|
| W01 | [Profiles](https://wiki.torn.com/wiki/Profiles) | Profiles, galleries, actions, honors, signatures. Core profile page reviewed; public/private projection is original design. |
| W02 | [Main Page](https://wiki.torn.com/wiki/Main_Page) | Source reliability, major system navigation. Overview reviewed; wiki warns that information may be inaccurate/outdated. |
| W03 | [All Pages index](https://wiki.torn.com/wiki/Special:AllPages) | Whole-wiki discovery and redirects. Initial index consulted only; complete pagination is not claimed. |
| W04 | [Down To Details](https://wiki.torn.com/wiki/Down_To_Details) | System discovery and city services. Overview/directory reviewed; linked catalogs need separate audits. |
| W05 | [City](https://wiki.torn.com/wiki/City) | Interactive map and service categories. System page consulted; detailed map parity not verified. |
| W06 | [Preferences](https://wiki.torn.com/wiki/Preferences) | Account preferences, security, interface settings. Overview reviewed; Gore-Wars uses original security requirements. |
| W07 | [Sidebar](https://wiki.torn.com/wiki/Sidebar) | Navigation and status indicators. Navigation overview consulted. |
| W08 | [Categories index](https://wiki.torn.com/wiki/Special:Categories) | Category discovery. Initial category listing consulted only; pagination incomplete. |
| W09 | [Crimes 2.0](https://wiki.torn.com/wiki/Crimes_2.0) | Modern individual crime framework and families. Overview reviewed; mixed historical/current notes require subfeature checks. |
| W10a | [Cracking](https://wiki.torn.com/wiki/Cracking) | Fictional rig, cooling, and persistent puzzle projects. Core mechanics reviewed; Gore-Wars uses original simulated tasks and tuning. |
| W10b | [Scamming](https://wiki.torn.com/wiki/Scamming) | Persistent NPC confidence-board activity. Core overview consulted; no real scam content is reproduced. |
| W11 | [Gym](https://wiki.torn.com/wiki/Gym) | Training memberships, specialization, progression. System page reviewed; empirical/historical formulas are not assumed exact. |
| W12 | [Battle Stats](https://wiki.torn.com/wiki/Battle_Stats) | Combat attribute roles and modifier families. Core roles reviewed; original Gore-Wars names/equations differ. |
| W13 | [Awards](https://wiki.torn.com/wiki/Awards) | Medals, honors, eligibility, historical awards. Catalog overview consulted; full award list not audited; outdated-content warning noted. |
| W14 | [Merits](https://wiki.torn.com/wiki/Merits) | Perks, costs, respecs. System overview consulted; original Legacy Point implementation required. |
| W15 | [Attack](https://wiki.torn.com/wiki/Attack) | Combat lifecycle, actions, finishing, restrictions. Core combat sections reviewed; hidden/empirical formulas not verified. |
| W16 | [Weapon Bonus](https://wiki.torn.com/wiki/Weapon_Bonus) | Equipment effect families. Catalog consulted; all bonus rows not exhaustively extracted. |
| W17 | [Weapon Mod](https://wiki.torn.com/wiki/Weapon_Mod) | Attachments and compatibility. Catalog consulted; all modifier values not exhaustively verified. |
| W18 | [Item](https://wiki.torn.com/wiki/Item) | Categories, ownership, usability, legacy categories. Core categorization reviewed; individual item catalog is not fully audited. |
| W19 | [Hospital](https://wiki.torn.com/wiki/Hospital) | Injuries, recovery, medical access. System page consulted; original recovery values required. |
| W20 | [Bounty](https://wiki.torn.com/wiki/Bounty) | Posting, eligibility, rewards. System page consulted; Gore-Wars adds original abuse controls. |
| W21 | [Revive](https://wiki.torn.com/wiki/Revive) | Medical skill, permissions, repeated service. Core mechanics reviewed; original rules must be documented. |
| W22 | [Jail](https://wiki.torn.com/wiki/Jail) | Sentences, busts, bail, restrictions. System page consulted; detailed probabilities not claimed verified. |
| W23 | [Drugs](https://wiki.torn.com/wiki/Drugs) | Game-only consumables, dependency, cooldowns, rehab. System page reviewed as fictional gameplay, not medical evidence. |
| W24 | [Point](https://wiki.torn.com/wiki/Point) | Earned utility currency, licenses, refills, lists. Core utility catalog reviewed; historical notes must be separated. |
| W25 | [Book](https://wiki.torn.com/wiki/Book) | Timed study consumables and restrictions. Catalog overview consulted; no original descriptions copied. |
| W26 | [Big Al's Bunker](https://wiki.torn.com/wiki/Big_Al's_Bunker) | Advanced-equipment recycling and exchange. System page consulted; Iron Vault is original branding/design. |
| W27 | [Dump](https://wiki.torn.com/wiki/Dump) | Discarded-item search and circulation. System page consulted; original anti-transfer-abuse rules added. |
| W28 | [Item Market](https://wiki.torn.com/wiki/Item_Market) | Current central listings, filters, quantity purchases. Core current/historical distinction reviewed; original fees differ. |
| W29 | [Bazaar](https://wiki.torn.com/wiki/Bazaar) | Player storefronts and directory. Core overview reviewed; separate from central market. |
| W30 | [Trade](https://wiki.torn.com/wiki/Trade) | Direct trade and asset exchange. System page consulted; original versioned escrow specified. |
| W31 | [Auction House](https://wiki.torn.com/wiki/Auction_House) | Proxy bidding, escrow, closing, payouts. Core auction overview reviewed; Gore-Wars settlement rules are original. |
| W32 | [Bank](https://wiki.torn.com/wiki/Bank) | Term deposits, claims, protected/available funds. Core overview reviewed; original term and payout values required. |
| W33 | [Loan Shark](https://wiki.torn.com/wiki/Loan_Shark) | Borrowing, repayment, creditworthiness. Core and historical distinction reviewed; bounded original debt rules. |
| W34 | [Stock Market](https://wiki.torn.com/wiki/Stock_Market) | Shares, holding benefits, dividends. System overview reviewed; Gore-Wars uses an original simulated market. |
| W35 | [Mission](https://wiki.torn.com/wiki/Mission) | Contacts, objectives, mission rewards/shop. System page consulted; original narrative content required. |
| W36 | [New Player Missions](https://wiki.torn.com/wiki/New_Player_Missions) | Onboarding and chained objectives. Long mission catalog consulted; not exhaustively extracted. |
| W37 | [Jobs](https://wiki.torn.com/wiki/Jobs) | Starter careers, ranks, job points. System page consulted; original careers/qualifications defined. |
| W38 | [Company](https://wiki.torn.com/wiki/Company) | Ownership, staffing, finance, ratings. Core management sections reviewed; complete rule audit remains granular. |
| W39 | [Company List](https://wiki.torn.com/wiki/Company/Company_List) | Business configurations and requirements. Large catalog opened; exhaustive row-by-row parity audit not completed. |
| W40 | [Company Special List](https://wiki.torn.com/wiki/Company/Special_List) | Active and passive employment abilities. Catalog opened; original benefit balance required. |
| W41 | [Education](https://wiki.torn.com/wiki/Education) | Courses, prerequisites, qualifications. System overview consulted; all course subpages not audited. |
| W42 | [Property](https://wiki.torn.com/wiki/Property) | Ownership, upgrades, staff, rentals. Long property page consulted; original tier data required. |
| W43 | [Marriage](https://wiki.torn.com/wiki/Marriage) | Partnership and household features. System page consulted; original consent/ownership policy specified. |
| W44 | [Church](https://wiki.torn.com/wiki/Church) | Ceremonial and related city activities. System page consulted; Gore-Wars venues and participation policy are original. |
| W45 | [Faction](https://wiki.torn.com/wiki/Faction) | Governance, resources, upgrades, organizational systems. Substantial core sections reviewed; all historical subpages not audited. |
| W46 | [Organized Crime 2.0](https://wiki.torn.com/wiki/Organized_Crime_2.0) | Roles, planning, execution, tool/material distinctions, payouts. Core lifecycle reviewed; page marks itself temporary/in progress. |
| W47 | [Ranked War](https://wiki.torn.com/wiki/Ranked_War) | Matchmaking, rosters, schedules, scoring. Core overview reviewed; proprietary matchmaking is not known. |
| W48 | [Territory](https://wiki.torn.com/wiki/Territory) | Territory ownership, adjacency, conflict. System page consulted; original Blackharbor graph required. |
| W49 | [Racket](https://wiki.torn.com/wiki/Racket) | Temporary territory-linked reward ventures. System overview consulted. |
| W50 | [Travel](https://wiki.torn.com/wiki/Travel) | Destinations, transport, cargo, overseas activity. System page consulted; current restrictions need detailed verification. |
| W51 | [Hunting](https://wiki.torn.com/wiki/Hunting) | Destination skill activity and progression. Core mechanics reviewed; original places and tuning required. |
| W52 | [Raceway](https://wiki.torn.com/wiki/Raceway) | Vehicles, classes, race modes, standings. System page consulted; individual vehicle/track catalog not audited. |
| W53 | [Casino](https://wiki.torn.com/wiki/Casino) | Game families, play tokens, exclusions. Core lobby overview reviewed; current/retired modes distinguished. |
| W54 | [Poker](https://wiki.torn.com/wiki/Poker) | Table play, participation, reconnect, planned features. Core table overview reviewed; announced extras not treated as released. |
| W55 | [Museum](https://wiki.torn.com/wiki/Museum) | Collections and exchange sinks. System page consulted; all item sets not exhaustively audited. |
| W56 | [Annual Competition](https://wiki.torn.com/wiki/Annual_Competition) | Current/retired event families and calendar. Core event directory reviewed; no dates inferred from old entries. |
| W57 | [Christmas Town](https://wiki.torn.com/wiki/Christmas_Town) | Player-made maps, quests, collectibles, minigames. Core exploration/reward sections reviewed; historic scheduling notes not current guarantees. |
| W58 | [Newspaper](https://wiki.torn.com/wiki/Newspaper) | Editorial submissions, archives, classifieds. Core newspaper sections reviewed; original publication branding required. |
| W59 | [Forums](https://wiki.torn.com/wiki/Forums) | Community boards, private boards, posting/search. Core forum sections reviewed; original moderation policy specified. |
| W60 | [Messages](https://wiki.torn.com/wiki/Messages) | Mail and social communication. System page consulted. |
| W61 | [Chat Boxes](https://wiki.torn.com/wiki/Chat_Boxes) | Chat discovery and social rules link. Page is a short rules-link stub; detailed chat UX is original specification. |
| W62 | [API](https://wiki.torn.com/wiki/API) | Developer access and scope concept. System page consulted; Gore-Wars API and auth are original. |
| W63 | [Donator](https://wiki.torn.com/wiki/Donator) | Membership reference category. System page consulted; monetization deliberately differs. |
| W64 | [Activity Log](https://wiki.torn.com/wiki/Activity_Log) | Personal activity history. System page consulted; complete log-event catalog not audited. |
| W65 | [Reports](https://wiki.torn.com/wiki/Reports) | Player reports, evidence, bug workflows, appeals. Core page reviewed; Gore-Wars adds immediate newcomer access. |
| W66 | [Hall of Fame](https://wiki.torn.com/wiki/Hall_of_Fame) | Rankings, personal position, movement over time. Core ranking overview reviewed; original metrics/privacy rules required. |

### Primary technical documentation

| Ref | Documentation | Use |
|---|---|---|
| T01 | [Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting) | Verify deployment behavior and shared-state/cache configuration against the chosen framework version. |
| T02 | [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html) | Choose concurrency controls and implement retries appropriate to the invariant. |
| T03 | [BullMQ idempotent jobs](https://docs.bullmq.io/patterns/idempotent-jobs) | Design retry-safe job effects and small recoverable transitions. |

### Evidence and authorship boundary

This source map records the public documentation consulted to prepare a systems-level prompt. It does not establish a complete crawl, an exact clone, a verified production implementation, or access to private algorithms. The implementing agent must expand the inventory, resolve current-versus-legacy conflicts, write original content, and attach real test evidence to the finished game.

**Execution instruction:** Treat Sections 1–62 and Appendix A as the integrated Gore-Wars product specification. Use Appendix B to verify reference coverage, not as substitute code. Inspect the repository, create the feature matrix, and begin the first runnable milestone. Preserve the full target scope until it is verified or an intentional difference is explicitly recorded.
