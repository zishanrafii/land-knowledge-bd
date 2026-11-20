# Phase 2 — Firebase Authentication & Admin Foundation

**Version:** 1.1.0  
**Date:** 20 November 2026

## Added
- Firebase Email/Password sign-in page at `/admin/login`.
- Admin dashboard at `/admin` with authenticated session check, custom-claim role gate, and published/pending record counts.
- Zod legal-instrument schema with explicit verification states and instrument types.
- Firestore repository foundation for listing only published + VERIFIED legal records and creating validated records.
- Firestore and Storage rules now use Firebase Auth custom claims (`role`) instead of user-editable role documents.
- Setup guide and `.env.example`.

## Security design
- No public self-registration or browser-side role assignment.
- User documents cannot be written by clients.
- First Super Admin must be provisioned through a trusted private Admin SDK environment.
- Public legal record reads are restricted to `published == true` AND `verificationStatus == VERIFIED`.
- Publishing a record requires VERIFIED status.

## Not yet implemented
- Legal record create/edit form UI.
- Reviewer decision queue and immutable audit-event enforcement.
- Firebase Emulator automated rules tests.
- Firebase project connection, deployment, and production smoke test.
- Real legal content import. Historical records remain research leads until re-verified against primary government sources.

## Verification
- ZIP structure and source files inspected.
- Automated npm/typecheck/build tests not run in this environment because dependency installation/network access is not available. Do not treat this as a build-pass claim.

## Next
Phase 3: legal record editor, source/evidence attachment workflow, reviewer queue, audit events, and Emulator security tests.

## Additional legal intake UI
- Added `/admin/laws/new` for Editor/Super Admin to create draft legal-instrument records.
- New records are always `PENDING` and unpublished; the intake form does not expose a publish or VERIFIED toggle.
- Admin dashboard now links to the draft intake form.
