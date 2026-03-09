# E-commerce Frontend (Next.js 15)

## Setup
1. `cp .env.example .env.local`
2. `npm install`
3. `npm run dev`

## Notes
- This app is built for API-first integration through Axios + TanStack Query.
- Order flow is request-only (no payment gateway).
- Update endpoint paths in `features/*/service.ts` if your API docs differ.
