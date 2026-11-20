import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  where,
} from 'firebase/firestore';

import { db } from '@/lib/firebase/client';
import {
  legalInstrumentSchema,
  type LegalInstrumentInput,
} from './schema';

export async function listPublishedLaws(maxItems = 50) {
  const q = query(
    collection(db, 'legalInstruments'),
    where('published', '==', true),
    where('verificationStatus', '==', 'VERIFIED'),
    orderBy('updatedAt', 'desc'),
    limit(maxItems)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    ...document.data(),
    id: document.id,
  }));
}

export async function createLegalInstrument(input: LegalInstrumentInput) {
  const parsed = legalInstrumentSchema.parse(input);

  // Preserve the Record ID supplied in the form.
  const recordRef = doc(db, 'legalInstruments', parsed.id);

  await runTransaction(db, async (transaction) => {
    const existing = await transaction.get(recordRef);

    if (existing.exists()) {
      throw new Error('এই Record ID ইতিমধ্যে ব্যবহৃত হয়েছে।');
    }

    transaction.set(recordRef, {
      ...parsed,
      id: parsed.id,
      verificationStatus: 'PENDING',
      published: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  });

  return recordRef;
}
