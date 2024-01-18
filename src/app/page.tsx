import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  ),
  title: 'Home',
  description: 'Next JS Pradtice',
  authors: [
    { name: 'Alfian Vito Anggoro', url: `${process.env.NEXT_PUBLIC_API_URL}` },
  ],
  icons: {
    icon: '/images/icon.png',
  },
  openGraph: {
    title: 'Home',
    description: 'Next JS Pradtice',
    url: `${process.env.NEXT_PUBLIC_API_URL}`,
    siteName: 'Home',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl text-white text-center">Home Pages</h1>
    </main>
  );
}
