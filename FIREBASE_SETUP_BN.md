# Firebase setup — Land Knowledge BD (Phase 2)

## 1) Create/configure Firebase project
- Create a Firebase project in the Firebase Console.
- Add a Web App and copy its config into `.env.local` using `.env.example`.
- Enable Authentication → Email/Password.
- Create the Cloud Firestore database and Firebase Storage bucket.
- Deploy `firestore.rules` and `storage.rules`.

## 2) Required environment variables
Copy `.env.example` to `.env.local` and fill all six `NEXT_PUBLIC_FIREBASE_*` values. These are Firebase web-app config values, not service-account private keys. Never commit `.env.local`.

## 3) Roles and first Super Admin
The app trusts Firebase Auth custom claims only. Do not let a browser client edit `users/{uid}` or grant its own role. Create the first Super Admin through a trusted, private Admin SDK environment (Cloud Shell or secured server-side script), after verifying the user's UID out-of-band:

```ts
await getAuth().setCustomUserClaims('VERIFIED_USER_UID', { role: 'SUPER_ADMIN' });
```

Then sign out and sign in again (or force-refresh the ID token). Never expose service-account JSON or Admin SDK credentials in the browser, repository, or chat.

Allowed roles: `SUPER_ADMIN`, `EDITOR`, `REVIEWER`. `VIEWER` or no role has no administrative write access.

## 4) Install and test
```bash
npm install
npm run typecheck
npm run lint
npm run build
```

For security testing, install Firebase CLI and Emulator Suite, then test that unauthenticated users cannot write; public users can read only published VERIFIED instruments; an editor cannot delete; only Super Admin can delete; and no user can alter their own claims through Firestore.

## Important
This phase provides authentication UI, custom-claim role gate, record schema/repository foundation and dashboard counts. It does not yet include the full legal record editor, file upload UI, review/approval queue, or production deployment. Do not enter or publish real legal data until official-source verification and reviewer workflow are implemented.
