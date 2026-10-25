import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Qahwa House | A Maeen Alganimi Demo',description:'Good coffee. Your way. Explore the bilingual Qahwa House demo menu and table ordering by Maeen Alganimi.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
