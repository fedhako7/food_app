import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Food Management App',
  description: 'Manage food items efficiently',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
