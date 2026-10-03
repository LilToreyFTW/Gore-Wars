# GORE-WARS — SHOP & CITY-SERVICE ARTWORK INTEGRATION PROMPT

## 1. Assignment and scope

Integrate the supplied 32 Gore-Wars artworks into their correct pages, navigation, and city locations in the existing browser game. Work on actual components, routes, and asset references—not just an image gallery or a design proposal. Preserve existing working gameplay, stable record IDs, player ownership, balances, permissions, and navigation history.

These are original Blackharbor shop and city-service identities. Some are retail shops; others are banking, property, auctions, collections, logistics, or guidance services. Do not force them all into the same Buy/Sell storefront template.

Use the exact supplied artwork. Do not regenerate it, replace it with stock pictures, import Torn assets, add fantasy shops, or use the earlier medieval/magic concept grids. Do not crop those grids into production assets. This task does not commission new art, new game mechanics, or a 3D world.

Inspect the repository first. Reuse an existing equivalent page and its domain service wherever possible. The routes in this prompt are proposed destinations, not evidence of current code paths. Adapt them to the established router and document the actual mapping. Do not create duplicate banks, economies, item markets, storefront systems, or property records.

## 2. Source files and import layout

Use either `Gore-Wars_All_32_Shop_Artworks.zip` or `Gore-Wars_Web_Ready_Shop_Art.zip`. Both use the internal root `Gore-Wars_Shop_Art/` and include `manifest.json`. Prefer `Gore-Wars_Shop_Artwork_Placement_Map.json` from this handoff as the placement specification, then bind it to the inspected repository.

The full archive contains 32 PNG banners, 32 matching WebP banners, and 32 transparent PNG emblems. Verified banner dimensions are 1920 × 1080; verified emblem dimensions are 710 × 720. Emblems are not perfectly square. The web-ready archive omits the large PNG masters even though its manifest lists their paths. Their absence from that archive is not a runtime error.

For a project using a public asset directory, use this layout, adapting the web-app root without changing browser-facing filenames:

```text
<web-app-root>/public/assets/gore-wars/locations/
  webp/                  # All 32 supplied .webp banners
  icons/                 # All 32 supplied transparent emblem PNGs
  derivatives/           # Optional smaller, uncropped versions

<repository-root>/design/source/gore-wars/locations/
  png/                   # Full-pack PNG masters; not required in production
  source-manifest.json   # Preserved original metadata

<web-app-source>/config/location-artwork.ts
<repository-root>/docs/SHOP_ARTWORK_INTEGRATION.md
```

A disk path such as `public/assets/gore-wars/locations/webp/01_ironline-armory.webp` has browser path `/assets/gore-wars/locations/webp/01_ironline-armory.webp`. Never put `/public` or a local `/mnt/data` path in a rendered image URL. Do not deploy the offline catalogue as the actual game or bundle its embedded-image HTML into a page.

Read filenames from explicit metadata. Do not reconstruct them from display names. In particular, keep `22_the-collector-s-room.webp` and `22_the-collector-s-room_emblem.png` exactly as supplied even though the display name is “The Collector's Room” and the proposed route is `/shops/the-collectors-room`.

## 3. Authoritative location-to-artwork mapping

Each file stem below identifies three related assets: `webp/<stem>.webp`, `icons/<stem>_emblem.png`, and, in the full pack only, `png/<stem>.png`. Use the WebP as the primary page illustration; use its matching emblem for compact navigation and map markers.

The districts come from the supplied artwork manifest. Reconcile a conflicting existing location binding explicitly—do not silently move a business or display district text that contradicts the image. District labels are city-directory metadata, not a new requirement that a browser-RPG character physically walk between streets.

| # | Location | District | Exact asset stem | Proposed primary page |
|---|---|---|---|---|
| 01 | Ironline Armory | Foundry Ward | `01_ironline-armory` | `/shops/ironline-armory` |
| 02 | Bastion Supply | Warden’s Gate | `02_bastion-supply` | `/shops/bastion-supply` |
| 03 | Dockside General | Rustwater Docks | `03_dockside-general` | `/shops/dockside-general` |
| 04 | Signal House | Glass Row | `04_signal-house` | `/shops/signal-house` |
| 05 | Glass Row Jewelers | Glass Row | `05_glass-row-jewelers` | `/shops/glass-row-jewelers` |
| 06 | Redline Parts | Foundry Ward | `06_redline-parts` | `/garage/parts` |
| 07 | Saint Vey Pharmacy | Saint Vey | `07_saint-vey-pharmacy` | `/shops/saint-vey-pharmacy` |
| 08 | Blackharbor Post | Ashmarket | `08_blackharbor-post` | `/city/post-office` |
| 09 | Inkhouse Printworks | The Cut | `09_inkhouse-printworks` | `/shops/inkhouse-printworks` |
| 10 | Quarry Recycling | Quarry Reach | `10_quarry-recycling` | `/city/recycling` |
| 11 | Sweet Static | Neon Mile | `11_sweet-static` | `/shops/sweet-static` |
| 12 | Nightshift Outfitters | The Cut | `12_nightshift-outfitters` | `/shops/nightshift-outfitters` |
| 13 | The Iron Vault | Foundry Ward | `13_the-iron-vault` | `/shops/the-iron-vault` |
| 14 | Rustwater Salvage | Rustwater Docks | `14_rustwater-salvage` | `/city/salvage` |
| 15 | Last Chance Pawn | Lowfield | `15_last-chance-pawn` | `/shops/last-chance-pawn` |
| 16 | Ashmarket Exchange | Ashmarket | `16_ashmarket-exchange` | `/market` |
| 17 | Blackharbor Bazaar | Ashmarket | `17_blackharbor-bazaar` | `/bazaar` |
| 18 | Crown Auction House | Crown Heights | `18_crown-auction-house` | `/auctions` |
| 19 | Mourning Bloom | Saint Vey | `19_mourning-bloom` | `/shops/mourning-bloom` |
| 20 | The Paper Lantern | Saint Vey | `20_the-paper-lantern` | `/shops/the-paper-lantern` |
| 21 | Odd Company | Neon Mile | `21_odd-company` | `/shops/odd-company` |
| 22 | The Collector's Room | Crown Heights | `22_the-collector-s-room` | `/shops/the-collectors-room` |
| 23 | Night Owl Grocer | The Sprawl | `23_night-owl-grocer` | `/shops/night-owl-grocer` |
| 24 | Chrome Row Motors | Glass Row | `24_chrome-row-motors` | `/garage/dealership` |
| 25 | Rustwater Chandlery | Rustwater Docks | `25_rustwater-chandlery` | `/shops/rustwater-chandlery` |
| 26 | Voss Estate | Crown Heights | `26_voss-estate` | `/properties` |
| 27 | Blackharbor Bank | Glass Row | `27_blackharbor-bank` | `/bank` |
| 28 | Blackharbor Museum | Saint Vey | `28_blackharbor-museum` | `/museum` |
| 29 | Saint Vey Hall | Saint Vey | `29_saint-vey-hall` | `/city/community-hall` |
| 30 | City Archives | Warden’s Gate | `30_city-archives` | `/city/archives` |
| 31 | Blackharbor Visitor Center | Ashmarket | `31_blackharbor-visitor-center` | `/city/visitor-center` |
| 32 | The Veil Market | Overseas Network | `32_the-veil-market` | `/travel/[destinationSlug]/markets/the-veil-market` |

## 4. Exact use on each destination

Every entry below also receives its matching directory card and appropriate contextual links. Domestic locations receive an emblem marker and a banner in the city-map details drawer. Existing map coordinates must be reused or deliberately configured within the correct district; this specification does not invent coordinates for an unseen map.

**01 — Ironline Armory.** Weapon-shop page: display this hero above the weapon catalog, ammunition filters, and purchase controls. Use the emblem for the Foundry Ward marker and equipment-resupply links. Keep individual weapon thumbnails separate; this banner is the shop identity, not an item image.

**02 — Bastion Supply.** Armor and tactical-equipment shop: place the hero above armor slots, protection comparisons, fitting, and purchase controls. Link from equipment screens. Do not use it as a faction-armory header or introduce medieval armor.

**03 — Dockside General.** General hardware and tools shop: place above the tools, containers, and everyday supply catalog. Contextual links may filter for a required tool. A link may select an item filter but must never purchase automatically.

**04 — Signal House.** Electronics and component shop: place above fictional rig parts, device components, and electronics categories; link from simulated crime-rig upgrade screens. This is an in-game supplier, not an external hacking service or instructions screen.

**05 — Glass Row Jewelers.** Jewelry and valuables shop: hero above rings, watches, jewelry, and eligible gift selections. Use its emblem in ring-purchase links. Do not imply items confer new statistics unless the existing catalog specifies them.

**06 — Redline Parts.** Parts and tuning supplier: hero on the garage parts storefront, above the selected vehicle, compatibility filters, upgrade offers, and installation controls. Do not replace the racing-results header or vehicle thumbnails with this banner.

**07 — Saint Vey Pharmacy.** Medical-supply storefront: hero above eligible medicines, first-aid items, and cooldown information. Add a pharmacy shortcut from treatment and hospital pages. It is not the hospital itself; opening or buying from the shop must not automatically heal a player.

**08 — Blackharbor Post.** Parcel service: hero above recipient selection, owned-item selection, delivery fees, confirmation, and parcel history. Keep private text messages in Messages; never turn a decorative envelope into a send action without confirmation.

**09 — Inkhouse Printworks.** Printing-supply shop: hero above paper, ink, printing materials, and supported in-game print services. Do not replace The Blackharbor Ledger newspaper brand or claim a printing backend exists when it does not.

**10 — Quarry Recycling.** Recycling facility: hero above owned-material selection, yield previews, exchange costs, and confirmation. Keep recycling distinct from salvaging or buying scrap. Consumption must use the existing inventory transaction service.

**11 — Sweet Static.** Candy and confectionery shop: hero above candy products and their existing in-game effects. Do not invent new refill bonuses, resource caps, or cooldown exemptions from the image tagline.

**12 — Nightshift Outfitters.** Clothing and accessories storefront: hero above clothing categories, fitting/preview, and eligible purchases. Keep this earned-game-currency shop separate from any paid supporter shop and its nontransferable entitlements.

**13 — The Iron Vault.** Specialist gear exchange: hero above rare-gear offers, required trade-ins, eligibility, and confirmation. This is neither the bank nor a property/faction vault; never grant access to those systems through this page.

**14 — Rustwater Salvage.** Salvage yard: hero above the existing search, claim, scrap-purchase, or salvage actions and their eligibility/cooldowns. Do not assume all these actions exist; bind only implemented ones and keep them separate from recycling.

**15 — Last Chance Pawn.** Pawn and appraisal shop: hero above eligible owned items, NPC appraisal quotes, and sale confirmation. Do not create pawn-backed loans unless that mechanic already exists in the approved specification and backend.

**16 — Ashmarket Exchange.** Central player item market: use as the market landing-page hero above search, listing filters, price information, and market tabs. Keep it separate from NPC shop inventory, the points exchange, and player storefront directories.

**17 — Blackharbor Bazaar.** Player storefront directory: use as the directory landing hero and optional fallback branding for a storefront without custom artwork. Preserve individual player storefront names, banners, ownership, listings, and stable IDs; do not overwrite player branding.

**18 — Crown Auction House.** Auction-house landing page: hero above active auctions, bidding filters, listings, and the player’s auction tabs. Show actual item art on lot-detail pages; the gavel emblem may identify the auction service.

**19 — Mourning Bloom.** Florist: hero above bouquets, eligible flowers, gift selection, and collection links. Do not make overseas-exclusive flowers available locally merely because this shop sells flowers.

**20 — The Paper Lantern.** Bookshop: hero above available books, study materials, and previews of existing reading effects. It is not the education enrollment system; buying a book does not complete a course or start reading automatically.

**21 — Odd Company.** Gift and plush-collectible shop: hero above plush toys, souvenir gifts, and gift-selection interfaces. Despite its name, Odd Company is not the player-company management dashboard.

**22 — The Collector's Room.** Prestige collectible vendor: hero above permitted rare objects, eligibility requirements, appraisal, and purchase/trade options. Preserve the apostrophe in the display name, but keep the supplied asset spelling 22_the-collector-s-room exactly.

**23 — Night Owl Grocer.** Grocery and food/drink store: hero above food, drink, and everyday consumable categories. Keep separate from Sweet Static and do not grant a resource effect unless it is in the item definition.

**24 — Chrome Row Motors.** Vehicle dealership: hero above vehicle browsing, performance comparisons, prices, and purchase confirmation. Do not reuse it as an individual car image or a universal garage background.

**25 — Rustwater Chandlery.** Dock and cargo supplier: hero above cargo containers, travel supplies, and supported luggage/provisioning items. Do not add boat ownership or circumvent baggage capacity because the emblem is an anchor.

**26 — Voss Estate.** Property and rental marketplace: hero above sale/rental search, filters, and property-market navigation. Keep actual home images on listing details and owned-property dashboards. Do not replace all houses with the agency banner.

**27 — Blackharbor Bank.** Bank landing page: hero above the existing account, deposit, withdrawal, investment, and maturity interfaces. Do not use it for stock trading or faction finances by default. Never embed balances inside the raster image.

**28 — Blackharbor Museum.** Museum and collection-exchange page: hero above collection sets, progress, donation/turn-in previews, and rewards. Keep player-owned display cases and the prestige shop distinct. Turning in a set must consume real owned items once.

**29 — Saint Vey Hall.** Community hall: hero above existing civic projects, in-game donations, notices, and community-service actions. Do not represent fictional donations as real charity payments or invent rewards from a decorative banner.

**30 — City Archives.** Public records and permitted in-game intelligence service: hero above record-search filters and authorized result panels. Never expose staff notes, private messages, protected statistics, security logs, or personal real-world information.

**31 — Blackharbor Visitor Center.** Visitor center: hero above onboarding guidance, district descriptions, service directions, and help navigation. Use this for guidance rather than pretending it is a stock-bearing retail shop. Make it reachable early in onboarding.

**32 — The Veil Market.** Overseas specialist market: hero on each enabled destination’s existing specialist-market page. Resolve destinationSlug from actual destination data and show the live destination separately in HTML. OVERSEAS NETWORK is not a Blackharbor district. Do not put a domestic map pin for this location or allow a deep link to bypass travel/location rules.

## 5. Main navigation, directories, and map behavior

Use `/city` as the city discovery entry point unless the project already uses another canonical route. Provide a Shops directory and City Services view as tabs or existing equivalent routes. Group destinations into Equipment; Supplies; Lifestyle & Collectibles; Markets & Trading; Vehicles & Travel; Finance & Property; and City Services. Add search by name/category, district filtering, favorites, and useful empty results where those directory features already exist or belong in the visual integration.

Do not add 32 top-level sidebar links. Keep the current high-level navigation and use emblems for appropriate links, favorite locations, and context shortcuts. “Bank,” “Market,” “Properties,” and “Auctions” should still go directly to their actual functional systems rather than opening a second generic shop page.

Directory cards must contain a complete 16:9 banner plus live HTML for the name, category, district, and relevant access state. Use an actual navigable link with an accessible name; no hover-only entry controls. Support approximately three cards per row on large screens, two on medium screens, and one on narrow screens, adjusting to the actual sidebar/content width rather than viewport alone.

For city-map points, use the transparent emblem—not the entire banner as a tiny marker. A marker opens a details drawer containing the full banner, live location details, and a clear Visit/Browse action. The list view must offer the same destinations and actions for keyboard and mobile users. Do not make dragging a map the only way to reach a shop.

All 31 domestic identities belong to their mapped Blackharbor districts. The Veil Market belongs to the Overseas Network only. It may have a Travel-directory entry that explains access requirements, but no domestic district pin. Resolve its destination route from actual enabled destination records; never render a link literally containing `[destinationSlug]`, invent destinations, or automatically enable it in every country.

## 6. Page layout and preservation of the artwork

The banners already contain shop names, categories, taglines, and Gore-Wars branding. Treat them as complete illustrations, not empty background images for new text. Preserve the entire image, its original colors, and its aspect ratio. No slicing, stretching, mirroring, blur, dark overlay, aggressive tinting, or cropping of the name/emblem.

Build a reusable `LocationHero` or equivalent component. A practical desktop layout is a banner around 600–720 CSS pixels wide beside a live information panel. On smaller layouts, stack them with the complete banner first. Keep the inventory, forms, listings, or service tools close below; do not turn every shop into a full-screen marketing page. Existing compact page-header preferences may collapse the banner after the initial layout is working.

Use natural-height images or `aspect-ratio: 16 / 9` with `object-fit: contain`. Do not apply `object-fit: cover` or `background-size: cover` to these text-bearing shop illustrations. A suitable baseline is:

```css
.location-artwork {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}
.location-emblem {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

Place any border, hover indication, focus ring, and spacing on the wrapper, not inside the art. Restrict motion to subtle optional wrapper effects and respect reduced-motion preferences. Never zoom a card image until its text is cut off.

Show the live H1, category, district, and gameplay information outside the image. Necessary fields include the current server-derived availability, an optional balance where relevant, and actual inventory/service controls. Do not paint live money, prices, stock, countdowns, locks, or user-specific data into image files. Do not cover the embedded shop title with a second title.

Use supplied emblems in a compact box: roughly 20–24 CSS pixels for sidebar links, 28–40 for map markers with a larger hit target, and 48–64 for information panels. Preserve the native 710:720 proportion within that box. Check readability rather than assuming every fine detail survives at a small size.

## 7. Components and a single artwork registry

Create one explicit, validated artwork registry and reusable `LocationHero`, `LocationCard`, `LocationEmblem`, and map-drawer components, or extend equivalent components already present. Integrate into the existing design system rather than installing a replacement UI stack.

Each registry record must carry a stable artwork ID, original index, display name, category, district binding, exact banner path, exact emblem path, dimensions, intended page/module binding, directory group, contextual entry points, and any special rules. Join to established game records through stable IDs. Do not reorder assets according to inventory sorting or treat array position as a durable shop identifier.

The accompanying JSON uses proposed route templates and module keys. Its `implementationBinding` fields deliberately remain unverified until repository inspection. Replace those fields with actual established bindings in the application registry; do not blindly treat a suggested module key as an implemented backend endpoint.

Reuse existing localization and route helpers. Preserve the English branded image unchanged; translated surrounding HTML must remain readable independently. Handle missing artwork with a correctly sized, accessible location fallback and a logged validation failure, never another business’s picture. Do not hide the whole gameplay interface when an image request fails.

## 8. Functional integration, access, and protected information

Artwork does not authorize a transaction or unlock a location. Call the same domain services and permission checks the game already uses. Apply server-side policies to direct URL visits as well as directory links, including travel, hospitalization, jail, company/faction permissions where relevant, and destination eligibility.

Use accurate states such as available, travel required, locked by an existing prerequisite, temporarily unavailable, or no inventory. Do not infer stock, prerequisites, restock times, event schedules, or trading rules from an illustration. Never announce an open shop or show fake products merely to fill a visually empty page.

Retail pages show actual stock, prices, quantity selection, existing effects, and purchase confirmation. Service pages show their actual forms and histories. Markets show listings. Banking shows account functions. The visitor center shows guidance. Do not render a generic Buy button on the museum, archives, post office, and bank indiscriminately.

Preserve authoritative purchase/transfer logic, request-idempotency safeguards, escrow, ownership, and balance updates. An artwork click must not execute a trade, send a parcel, join a faction, make a donation, or submit a bid. Contextual “find this item” links may preselect a search filter only.

When an expected module is missing, record the integration blocker and show a truthful development-only preview or an explicit unavailable state according to the product’s existing release policy. Do not replace a working page with a stub, fabricate successful backend operations, or call an unimplemented shop production-ready. This artwork pass does not authorize changes to crime formulas, item stats, paid credits, casino funding, or economic balance.

## 9. Mobile, accessibility, and image loading

Test at 360, 390, 768, 1280, and 1920 CSS pixels with the actual navigation open and closed. Preserve the complete banner at each width, allow long names to wrap in HTML, avoid horizontal overflow, and keep primary forms reachable without an oversized hero. Small raster category/tagline text must not be the only readable source of information.

Use real links/buttons, visible keyboard focus, adequate target sizes, accessible disabled-state explanations, and appropriate headings. When adjacent live text fully communicates the image’s meaningful content, treat the image as decorative with empty alt text. When it stands alone, provide a concise accessible description such as “Ironline Armory — weapons and equipment.” Do not repeat a long tagline in both alt text and the accessible link name unnecessarily.

Use the supplied WebP banners in production. The PNG master archive is a design source, not a mandatory page download. Generate smaller uncropped derivatives only when useful—for example 480 × 270, 768 × 432, and 1280 × 720—or use the project’s already configured image pipeline. Keep the original master and source-name association. Do not imply generated derivatives are editable source artwork.

Supply intrinsic dimensions and correct responsive sizing. Load only visible/near-visible directory images, and prioritize only an actual above-the-fold hero when appropriate. Do not preload all 32 full-size banners and do not import large base64 catalogue strings into the client bundle. Respect the installed framework version and current project conventions rather than introducing unsupported image component options.

Verify production URLs on a case-sensitive deployment. Cache static assets according to the project’s existing policy; document cache invalidation or versioned URLs when artwork bytes change. Keep private player data out of public image URLs and public asset metadata.

## 10. Boundaries and the earlier main artwork

These 32 images brand shops and services. They are not individual item icons, rendered shop interiors, player portraits, NPC art, medals, weapon previews, or general-purpose fullscreen backgrounds. Keep those existing assets intact. Preserve custom player banners and property photos.

The separate `gore_wars_neon_underworld.png`, when supplied and already approved for the project, belongs to the public landing/login presentation or a restrained main-menu illustration—not to every shop. It is outside the 32-location acceptance count. Because it contains typography, preserve the artwork as a whole and keep registration/login controls in separate live HTML. Do not extract a tiny logo from it and present that crop as a new production logo asset.

Do not import or deploy any earlier fantasy icon grids, magic-shop pictures, or unrelated experimental shop files. Select this manifest-backed 32-location collection explicitly. If an older folder contains a file like `23_books.png`, do not map it to index 23 in this collection; index 23 here is Night Owl Grocer. Identity comes from the manifest and named file, not a shared number.

## 11. Acceptance checks and handoff

Validate all 32 banner paths and all 32 emblem paths, including dimensions and case. Confirm there are 32 distinct primary artwork mappings; intentional reuse on directory/map/context surfaces is expected, but unrelated locations may not accidentally share a banner. The web-only import must work without PNG masters.

Verify every canonical page and contextual link after binding to real routes. For each location, check the title, district, banner, emblem, appropriate page behavior, and source-to-route mapping. Verify the Collector’s Room filename, Odd Company’s gift-shop role, distinct market/bazaar/auction behavior, distinct salvage/recycling roles, and the Veil Market’s destination gating.

Test authorized and unauthorized direct links, successful and failed image loads, no-stock states, mobile wrapping, keyboard access, and existing transactional workflows affected by component changes. Confirm no protected information leaks through markup, artwork metadata, previews, or route prefetches.

Capture labeled review screenshots for all 32 primary placements in a desktop layout and a mobile layout. Where access restrictions prevent a production screenshot, use clearly labeled development fixtures and never present them as real player data. Keep authenticated browser tests for critical gating and at least one existing purchase/escrow/service workflow relevant to the changed pages.

Deliver imported assets, the populated application registry, changed components/pages, actual route bindings, test results, review screenshots, and `docs/SHOP_ARTWORK_INTEGRATION.md`. Report verified, blocked, and unfinished bindings separately. Record commands actually run; do not claim tests, deployment, or gameplay integration that did not occur.

**Final result: every supplied Gore-Wars location has the correct identifiable artwork on its real page, the matching emblem in useful navigation, the correct city or overseas placement, intact mobile presentation, and working access to the existing game system. Begin with repository inspection, integrate the files, and verify each mapping.**
