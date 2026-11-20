import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';
import { legalInstrumentSchema, type LegalInstrumentInput } from './schema';

export async function listPublishedLaws(maxItems = 50) {
  const q = query(collection(db, 'legalInstruments'), where('published', '==', true), where('verificationStatus', '==', 'VERIFIED'), orderBy('updatedAt', 'desc'), limit(maxItems));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function createLegalInstrument(input: LegalInstrumentInput) {
  const parsed = legalInstrumentSchema.parse(input);
  if (parsed.published && parsed.verificationStatus !== 'VERIFIED') {
    throw new Error('শুধু VERIFIED রেকর্ড প্রকাশ করা যাবে।');
  }
  return addDoc(collection(db, 'legalInstruments'), {
    ...parsed,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}
