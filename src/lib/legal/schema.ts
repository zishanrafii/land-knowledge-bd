import { z } from 'zod';

export const verificationStatuses = ['VERIFIED','PARTIALLY_VERIFIED','PENDING','INCORRECT_REPLACED','DUPLICATE'] as const;
export const instrumentTypes = ['ACT','ORDINANCE','RULES','REGULATION','SRO','GAZETTE','CIRCULAR','POLICY','JUDGMENT','OTHER'] as const;
export const legalInstrumentSchema = z.object({
  id: z.string().min(2).max(80),
  titleBn: z.string().min(2).max(500),
  titleEn: z.string().max(500).optional().default(''),
  instrumentType: z.enum(instrumentTypes),
  number: z.string().max(120).optional().default(''),
  enactmentDate: z.string().optional().default(''),
  gazetteDate: z.string().optional().default(''),
  effectiveDate: z.string().optional().default(''),
  summaryBn: z.string().max(10000).optional().default(''),
  summaryEn: z.string().max(10000).optional().default(''),
  categories: z.array(z.string().max(100)).max(30).default([]),
  officialSourceUrl: z.string().url().optional().or(z.literal('')).default(''),
  attachmentPath: z.string().max(1000).optional().default(''),
  verificationStatus: z.enum(verificationStatuses).default('PENDING'),
  published: z.boolean().default(false),
  sourceCheckedAt: z.string().optional().default(''),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
export type LegalInstrumentInput = z.input<typeof legalInstrumentSchema>;
export type LegalInstrument = z.output<typeof legalInstrumentSchema>;
