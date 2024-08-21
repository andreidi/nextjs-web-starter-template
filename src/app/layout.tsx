import { ReactNode } from 'react';
import { Metadata } from 'next';

import Footer from '@/components/footer';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Next.js Website Starter Template',
  description: 'Starter template for websites with Next.js, TypeScript & Tailwind CSS.',
  creator: 'Andrei Diaconu'
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
