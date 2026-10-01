import type { Metadata } from 'next';
import TherapyPage from '@/components/TherapyPage';
export const metadata: Metadata = { title: 'Reference Homepage Clone | Stage 2', robots: { index: false, follow: false } };
export default function Clone() { return <TherapyPage clone />; }
