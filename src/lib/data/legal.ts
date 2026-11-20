export type VerificationStatus = 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'PENDING' | 'INCORRECT_REPLACED' | 'DUPLICATE';
export type LegalInstrument = {
  id: string; titleBn: string; titleEn: string; instrumentType: string; number?: string;
  year?: number; subject: string; summaryBn: string; status: VerificationStatus;
  officialUrl?: string; effectiveDate?: string; sourceCheckedAt?: string;
};
// No real legal records are seeded here. Populate only from verified primary-source evidence.
export const initialLegalRecords: LegalInstrument[] = [];
