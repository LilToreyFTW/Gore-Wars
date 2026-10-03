# Shop artwork integration

The supplied artwork in `assets/images/` was inspected and bound to stable stems in `assets/locations/`. The source exports had generic names (`Analysis output …`) but their embedded titles were matched against the supplied placement map. The web app uses the stable copies and never uses the temporary contact sheet.

The **Shops** route is a searchable, category-filtered directory with complete 16:9 artwork, live HTML names, district labels, and keyboard-accessible links. Artwork is identity only; it does not grant access, change balances, or replace service logic. The Veil Market is labeled Overseas Network and has no domestic district behavior.

| ID | Stable asset | Destination identity |
|---|---|---|
| 01–32 | `assets/locations/<stem>.png` | See `Gore-Wars_Shop_Artwork_Placement_Map.json` |

The current repository is a static vertical slice, so these cards are directory surfaces. Each card should bind to the corresponding authoritative service route as those modules are implemented.
