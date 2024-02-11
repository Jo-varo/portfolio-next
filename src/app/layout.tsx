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
    <html lang="es">
      <body className="bg-black text-white min-h-screen">
        <Background />
        <main className={`${ptsans.variable} ${lato.variable} p-2 md:p-10`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
