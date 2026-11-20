'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, firebaseConfigured } from '@/lib/firebase/client';

export default function AdminLoginPage() {
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false); const router=useRouter();
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setError('');if(!firebaseConfigured){setError('Firebase configuration এখনো যোগ করা হয়নি।');return;}setBusy(true);try{await signInWithEmailAndPassword(auth,email,password);router.replace('/admin');}catch{setError('লগইন সফল হয়নি। ইমেইল, পাসওয়ার্ড ও Firebase Auth configuration পরীক্ষা করুন।');}finally{setBusy(false);}}
  return <main className="min-h-screen grid place-items-center p-5"><form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm border border-emerald-950/10"><Link href="/" className="text-sm text-emerald-800">← মূল ওয়েবসাইট</Link><p className="mt-7 text-sm font-semibold text-emerald-700">LAND KNOWLEDGE BD</p><h1 className="mt-2 text-3xl font-bold">অ্যাডমিন লগইন</h1><p className="mt-2 text-sm text-slate-500">শুধু অনুমোদিত প্রকল্প-পরিচালক ও সম্পাদকদের জন্য।</p><label className="block mt-7 text-sm font-semibold">ইমেইল</label><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-xl border p-3 outline-emerald-700" autoComplete="username"/><label className="block mt-4 text-sm font-semibold">পাসওয়ার্ড</label><input type="password" required value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-xl border p-3 outline-emerald-700" autoComplete="current-password"/>{error&&<p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}<button disabled={busy} className="mt-6 w-full rounded-xl bg-emerald-900 p-3 font-semibold text-white disabled:opacity-50">{busy?'লগইন হচ্ছে…':'লগইন'}</button><p className="mt-4 text-xs leading-5 text-slate-500">প্রথম Super Admin অ্যাকাউন্ট Firebase Admin SDK দিয়ে নিরাপদ পরিবেশে তৈরি করতে হবে। ওয়েবসাইট থেকে কেউ নিজে Admin হতে পারবে না।</p></form></main>
}
