import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Dashboard',
    default: 'Next.js Dashboard',
  },
  description: 'A dashboard built with App Router, NextAuth, and PostgreSQL',
  metadataBase: new URL('nextjs-dashboard-7vbh2eqtk-cynthia-daniels-projects.vercel.app')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
