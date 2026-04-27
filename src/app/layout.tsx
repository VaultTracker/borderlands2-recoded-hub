import type { Metadata } from 'next';
import { Homenaje, Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import '@/styles/tailwind.css';

import Providers from '@/app/providers';
import { Header } from '@/components/layouts/Header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const homenaje = Homenaje({ subsets: ['latin'], weight: '400', variable: '--font-skill' });

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Borderlands 2 Recoded Hub',
  description:
    'Borderlands 2 Recoded Hub is a website that provides a skill tree, items, and other information about Borderlands 2 Recoded Mod.',
  keywords: ['Borderlands 2', 'Borderlands 2 Recoded', 'BL2', 'Skill Calculator', 'Items', 'Drop Sources'],
  authors: [{ name: 'janghye0k' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(
        'h-full',
        'antialiased',
        pretendard.variable,
        'font-sans',
        homenaje.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
