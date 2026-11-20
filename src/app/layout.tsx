import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ভূমি জ্ঞান | Land Knowledge BD', description: 'বাংলাদেশের ভূমি আইন, বিধিমালা, গেজেট ও বিচারিক সিদ্ধান্তের সরকারি উৎসভিত্তিক জ্ঞানভান্ডার.', manifest:'/manifest.json', applicationName:'Land Knowledge BD' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bn"><body>{children}</body></html>}
