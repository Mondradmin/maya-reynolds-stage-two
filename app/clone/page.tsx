import type { Metadata } from 'next';
import ReferencePage from '@/components/ReferencePage';
export const metadata: Metadata = { title: 'Reference Homepage Clone | Stage 2', robots: { index: false, follow: false } };
export default function Clone() { return <ReferencePage />; }
