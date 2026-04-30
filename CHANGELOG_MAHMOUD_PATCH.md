# ChinaSearch — Mahmoud Professional Patch

## What changed

1. Added `client/src/lib/rankingEngine.ts`
   - Min-Max normalization from 0 to 1
   - Inverse logic for price and shipping
   - Region-aware ranking weights
   - Best Choice / Cheapest / Fastest flags

2. Updated homepage decision UX
   - Added Hero Decision section above product grid
   - Shows one Best Choice product for the user's region
   - Strong CTA: Claim Best Deal Now

3. Improved product cards
   - Affiliate tracking now injects platform affiliate IDs dynamically
   - Clicks are tracked before redirect
   - AI-ready fields render only if present
   - Featured Best Choice card uses stronger CTA

4. Added Admin logic controls
   - Mock/Live API toggle UI
   - Ranking weight sliders for Price, Shipping, Rating, Popularity
   - Weights are saved in localStorage

5. Improved sorting
   - Added Best Score as default sorting option
   - Filters still support price, shipping, rating, popularity, discount, and free shipping

6. Improved mock data realism
   - Dynamic 6-hour price variation
   - Edge case products for ultra-cheap and fastest-delivery ranking tests
   - AI fields remain optional and empty unless real AI data exists

7. Added beginner deployment guide in Arabic
   - `BEGINNER_DEPLOYMENT_GUIDE_AR.md`
   - Explains why this should be deployed on Vercel/Netlify instead of inside Shopify directly

## Important note
This project is still using mock/fallback product data until real affiliate APIs are connected.
For real revenue, add real affiliate IDs and connect official APIs/affiliate feeds later.
