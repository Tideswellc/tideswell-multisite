import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Tideswell Deals Network',
  description: 'Multi-tenant deals sites by Tideswell LLC',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
