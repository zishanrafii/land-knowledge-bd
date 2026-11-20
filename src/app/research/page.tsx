import Link from 'next/link';

const audits = [
  { id: 'Audit 01', status: 'আংশিক উদ্ধার', detail: 'L001–L010-এর শিরোনাম তালিকা পাওয়া গেছে; পূর্ণ standalone রিপোর্ট পাওয়া যায়নি।' },
  ...Array.from({ length: 9 }, (_, i) => ({ id: `Audit ${String(i + 2).padStart(2, '0')}`, status: 'পূর্ণ ঐতিহাসিক রিপোর্ট উদ্ধার', detail: 'পুরোনো রিপোর্ট পাওয়া গেছে; সরকারি মূল উৎস দিয়ে পুনরায় যাচাই প্রয়োজন।' })),
  { id: 'Audit 11', status: 'পূর্ণ রিপোর্ট উদ্ধার হয়নি', detail: 'কিছু বিষয়/উল্লেখ পাওয়া গেছে; পূর্ণ রিপোর্ট পুনরুদ্ধার বাকি।' },
  { id: 'Audit 12', status: 'পূর্ণ রিপোর্ট উদ্ধার হয়নি', detail: 'কিছু বিষয়/উল্লেখ পাওয়া গেছে; পূর্ণ রিপোর্ট পুনরুদ্ধার বাকি।' },
  { id: 'Audit 13', status: 'পূর্ণ রিপোর্ট উদ্ধার হয়নি', detail: 'কিছু বিষয়/উল্লেখ পাওয়া গেছে; পূর্ণ রিপোর্ট পুনরুদ্ধার বাকি।' },
];

const batches = [
  'Master Law Inventory — Batch 01','Master Law Inventory — Batch 02','Master Law Inventory — Batch 03','Master Law Inventory — Batch 04','Master Law Inventory — Batch 05','Master Law Inventory — Batch 06','Master Law Inventory — Batch 07','Master Law Inventory — Batch 08','Master Law Inventory — Batch 09','Master Law Inventory — Batch 10','Master Law Inventory — Batch 11',
  'বনভূমি, পাহাড়, পরিবেশ, হাওর-জলাভূমি ও পার্বত্য চট্টগ্রামের ভূমি আইন',
  'ভূমি উন্নয়ন কর, খাজনা, দাখিলা, বকেয়া রাজস্ব ও সার্টিফিকেট মামলা',
  'সরকারি খাস জমি, বন্দোবস্ত, অর্পিত ও পরিত্যক্ত সম্পত্তি, সরকারি জমি উদ্ধার',
  'ভূমি সংস্কার, কৃষিজমির মালিকানার সীমা, বর্গাচাষ ও ভূমি ব্যবহার নিয়ন্ত্রণ',
  'রাজউক, উন্নয়ন কর্তৃপক্ষ, আবাসন প্রকল্প, প্লট বরাদ্দ ও নগর ভূমি আইন',
  'উত্তরাধিকার, ওয়ারিশের অংশ, পারিবারিক সম্পত্তি বণ্টন ও উত্তরাধিকারসূত্রে জমির মালিকানা',
  'ভূমি জালিয়াতি, জাল দলিল, প্রতারণামূলক বিক্রি, অবৈধ দখল ও জমি পুনরুদ্ধার',
  'ভূমি উন্নয়ন কর, খাজনা, দাখিলা, বকেয়া রাজস্ব ও সার্টিফিকেট মামলা',
  'ভূমি প্রশাসন, খাসজমি, সরকারি সম্পত্তি, বন্দোবস্ত ও রাজস্ব কর্তৃপক্ষ',
  'ভূমি ও পরিবেশ আইন, বনভূমি, পাহাড়, নদী, হাওর ও জলাভূমি সংরক্ষণ',
  'পার্বত্য চট্টগ্রামের ভূমি আইন, প্রথাগত অধিকার, বিশেষ প্রশাসন, সীমান্ত ও উপকূলীয় ভূমি',
];

const base = 'https://raw.githubusercontent.com/zishanrafii/land-knowledge-bd/main/research-reference/';
const downloads = [
  { title: 'Master Ledger v1.9 (Excel)', desc: '৩৪টি শিটে cumulative research ledger, audit status, batch recovery ও source register.', href: base + 'Land-Knowledge-BD-Master-Ledger-v1.9.xlsx' },
  { title: 'Audit 02–10 পূর্ণ ঐতিহাসিক রিপোর্ট', desc: 'উদ্ধার করা ৯টি অডিট রিপোর্ট; আইনগতভাবে পুনরায় যাচাই করা প্রয়োজন।', href: base + 'Recovered_Audit_02-10_Full_Reports.md' },
  { title: 'Batch 01–22 পূর্ণ রিপোর্ট', desc: '২২টি ব্যাচের ঐতিহাসিক পূর্ণ রিপোর্ট ও বিষয়ভিত্তিক তালিকা।', href: base + 'Recovered_Batch_01-22_Full_Reports.md' },
  { title: 'L001–L446 ID Label CSV', desc: 'উদ্ধার করা ৩৫৭টি exact label; বাকি ৮৯টি ID mapping unresolved.', href: base + 'L001-L446-Recovered-Original-Labels-v1.8.csv' },
  { title: 'Audit 01–13 Recovery Status', desc: 'প্রতিটি অডিটের উদ্ধার-অবস্থা ও সীমাবদ্ধতা।', href: base + 'Audit-01-13-Recovery-Status-v1.9.csv' },
  { title: 'Batch 01–22 Recovery Index', desc: '২২টি ব্যাচের শিরোনাম ও recovery status.', href: base + 'Batch-01-22-Recovery-Index-v1.9.csv' },
  { title: 'বাংলা Progress Report v1.9', desc: '১৮ নভেম্বর ২০২৬ পর্যন্ত recovery summary ও unresolved gap.', href: base + 'Progress-Report-BN-v1.9.md' },
];

export default function ResearchArchivePage() {
  return <main className="min-h-screen bg-[#f7f8f4] px-5 py-9 text-slate-800">
    <div className="mx-auto max-w-6xl">
      <Link href="/" className="text-sm font-semibold text-emerald-800">← মূল পাতায় ফিরুন</Link>
      <header className="mt-8 rounded-3xl bg-emerald-950 p-7 text-white md:p-10">
        <p className="text-xs font-bold tracking-[.2em] text-emerald-200">RESEARCH & AUDIT ARCHIVE</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">পূর্ববর্তী গবেষণা ও অডিট</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-50/90">আগের সেশন, অডিট রিপোর্ট, আইন-ইনভেন্টরি ও ব্যাচভিত্তিক গবেষণার উদ্ধার করা রেকর্ড। এটি ঐতিহাসিক গবেষণা আর্কাইভ—চূড়ান্ত আইনি যাচাইয়ের সনদ নয়।</p>
      </header>

      <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">ID label উদ্ধার</p><p className="mt-2 text-3xl font-bold">357 / 446</p><p className="mt-1 text-xs text-slate-500">80.04% exact mapping</p></div>
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">Unresolved ID</p><p className="mt-2 text-3xl font-bold">89</p><p className="mt-1 text-xs text-slate-500">L011–L099</p></div>
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">পূর্ণ Batch রিপোর্ট</p><p className="mt-2 text-3xl font-bold">22 / 22</p><p className="mt-1 text-xs text-slate-500">ঐতিহাসিক রিপোর্ট উদ্ধার</p></div>
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">পূর্ণ Audit রিপোর্ট</p><p className="mt-2 text-3xl font-bold">9 / 13</p><p className="mt-1 text-xs text-slate-500">Audit 02–10</p></div>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold tracking-widest text-emerald-800">DOWNLOADS</p><h2 className="mt-2 text-2xl font-bold">Master ও গবেষণা ফাইল</h2></div><span className="text-xs text-slate-500">Master version: v1.9 · 18 Nov 2026</span></div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {downloads.map(item => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border bg-white p-5 transition hover:border-emerald-700/50 hover:shadow-sm"><h3 className="font-bold text-emerald-950">{item.title} ↗</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p></a>)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Audit 01–13: উদ্ধার-অবস্থা</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border bg-white">
          {audits.map((a, i) => <div key={a.id} className={`grid gap-2 p-4 md:grid-cols-[110px_220px_1fr] ${i ? 'border-t' : ''}`}><strong>{a.id}</strong><span className="text-sm font-semibold text-emerald-800">{a.status}</span><p className="text-sm leading-6 text-slate-600">{a.detail}</p></div>)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Batch 01–22: উদ্ধার করা বিষয়সূচি</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">প্রতিটি ব্যাচের পূর্ণ ঐতিহাসিক রিপোর্ট উপরের ডাউনলোডে রয়েছে। শিরোনাম উদ্ধার মানেই ব্যাচের প্রতিটি আইন বর্তমান সরকারি পাঠে যাচাইকৃত—এমন নয়।</p>
        <ol className="mt-4 grid gap-2 md:grid-cols-2">
          {batches.map((b, i) => <li key={i} className="rounded-xl border bg-white p-4 text-sm"><span className="mr-2 font-bold text-emerald-800">{String(i + 1).padStart(2, '0')}.</span>{b}</li>)}
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="font-bold text-amber-950">আইনগত যাচাই সম্পর্কে সতর্কতা</h2>
        <p className="mt-2 text-sm leading-7 text-amber-900">এই আর্কাইভে সংরক্ষিত রিপোর্টগুলো পূর্ববর্তী কথোপকথন থেকে উদ্ধার করা। এগুলোকে আইন, বিধি বা আদালতের রায়ের চূড়ান্ত/বর্তমান ব্যাখ্যা হিসেবে ব্যবহার করা যাবে না। প্রতিটি আইনি দাবি, ধারা, সংশোধনী, বাতিল/প্রতিস্থাপন এবং কার্যকারিতা সংশ্লিষ্ট সরকারি গেজেট, BDLaws বা আদালতের মূল নথি দিয়ে পুনরায় যাচাই করতে হবে। কেবল সেই যাচাই ও reviewer approval শেষে সংশ্লিষ্ট আইনভান্ডার/আপডেটে VERIFIED রেকর্ড প্রকাশ করা হবে।</p>
      </section>
      <footer className="mt-10 border-t py-6 text-xs text-slate-500">ভূমি জ্ঞান | Land Knowledge BD · Historical research archive · Master v1.9</footer>
    </div>
  </main>;
}
