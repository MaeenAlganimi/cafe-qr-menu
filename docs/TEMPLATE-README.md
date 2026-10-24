# Qahwa House · Qudra Labs demo

A fictional English/Arabic cafe menu with RTL, table carts, QR ordering explanation and Gemini menu recommendations.

## Run

```sh
npm install
npm run dev
```

Open `http://localhost:3000/?table=5`. A table QR should encode your deployed URL with `?table=TABLE_NUMBER`. Without a table parameter, the demo uses table 5.

## AI

Copy `.env.example` to `.env.local` and optionally set `GEMINI_API_KEY`. Gemini 2.5 Flash runs exclusively in `/api/chat`. No key is needed to build or use demo responses. Failed AI requests also fall back to demo responses. Recommendations are validated against `src/data/cafe.ts`.

## Demo behavior

Cart and language preferences persist in localStorage. Placing an order saves a demo record for the selected table on the current browser only. There is no payment, database, kitchen integration or real restaurant. Popular tags are editorial demo picks. Dietary tags are illustrative; customers should discuss allergies with staff.

Build with `npm run build`. Food photography from Unsplash. Original MIT LICENSE retained.
