import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Next JS Pradtice',
  authors: [{ name: 'Alfian Vito Anggoro', url: 'http://localhost:3000/' }],
  icons: {
    icon: '/images/icon.png',
  },
  openGraph: {
    title: 'Home',
    description: 'Next JS Pradtice',
    url: 'http://localhost:3000/',
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
