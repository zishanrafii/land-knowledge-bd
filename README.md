# ভূমি জ্ঞান | Land Knowledge BD — Phase 1 Foundation

A mobile-first bilingual Bangladesh land-law knowledge web app foundation.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Firebase (Firestore, Authentication, Storage)
- Netlify deployment target
- Installable PWA manifest

## Start locally
1. Install Node.js 20.9+ and Git.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add Firebase Web App config.
4. Run `npm run dev` and open `http://localhost:3000`.
5. Run `npm run typecheck`, `npm run lint`, and `npm run build` before deployment.

## Firebase setup
Create a Firebase project and Web App. Enable Firestore, Authentication providers required by the project, and Storage. Review and deploy `firestore.rules`, `storage.rules`, and `firestore.indexes.json`. Do not grant public write access. User roles must be provisioned through a trusted admin process; never allow a client to assign its own role.

## Netlify
Connect the GitHub repository to Netlify. Use the Next.js runtime/plugin supported by Netlify. Add the same `NEXT_PUBLIC_FIREBASE_*` values as environment variables in Netlify. Never commit `.env.local`.

## Data integrity
There are intentionally no seeded legal instruments or sample judgments. The public app must not present invented examples as real law. A legal record is publishable only after review of the original government or court source. Keep all research statuses and provenance.

## Current scope
Phase 1 provides the visual foundation, bilingual homepage interaction, theme toggle, search handoff, PWA manifest, Firebase client initialization, starter Firestore/Storage rules, and initial legal-record type. Search routes, authentication/admin workflows, legal content pages, and server-side privileged operations are subsequent milestones.

## Legacy migration
Phase 11 was a PostgreSQL/Drizzle snapshot. It is retained as a reference only; do not install its PostgreSQL dependencies or copy its database access layer into this Firebase project without an explicit migration review.

## Phase 2 — Firebase Admin Foundation
See `FIREBASE_SETUP_BN.md` for Firebase configuration, custom-claim role provisioning, and secure deployment notes. Admin routes: `/admin/login` and `/admin`.
