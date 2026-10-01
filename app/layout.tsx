import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds',
  description: 'A fictional website concept for Dr. Maya Reynolds, PsyD. Warm, collaborative adult therapy for anxiety, trauma and burnout in Santa Monica and online across California.',
  robots: { index: false, follow: false },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
