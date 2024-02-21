import './globals.css';
import type { Metadata } from 'next';
import { Footer } from './ui/footer';
import { lato, ptsans } from './ui/fonts';
import Background from './ui/background';

export const metadata: Metadata = {
  title: 'Portafolio Jovaro',
  description: 'Portafolio web de Jovaro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white min-h-screen ${ptsans.variable} ${lato.variable}`}
      >
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
