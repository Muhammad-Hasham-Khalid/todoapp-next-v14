import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todos App',
  description: 'The best app for your todos',
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>;

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;