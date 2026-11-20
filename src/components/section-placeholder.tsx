import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
export default function SectionPlaceholder({title,description}:{title:string;description:string}){
 return <main className="min-h-screen bg-[#f7f8f4] px-5 py-10 text-slate-800"><div className="mx-auto max-w-3xl"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-land-700"><ArrowLeft size={16}/> মূল পাতায় ফিরুন</Link><div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10"><ShieldCheck className="text-land-700" size={30}/><h1 className="mt-5 text-3xl font-bold">{title}</h1><p className="mt-3 leading-7 text-slate-600">{description}</p><div className="mt-7 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">এই অংশটি নির্মাণাধীন। প্রাথমিক সরকারি উৎস যাচাই ছাড়া কোনো আইন, মামলা বা নির্দেশিকা এখানে প্রকাশ করা হবে না।</div></div></div></main>
}
