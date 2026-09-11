import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forte Music Community',
  description: 'A community for people who love Piano, music and meaningful connections.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{' '}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
