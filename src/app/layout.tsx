import './globals.css';
import type { Metadata } from 'next';

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
      <body className="bg-black text-white p-10 min-h-screen max-w-[1600px] mx-auto">
        <main>{children}</main>
        <footer className='text-center'>Desarollado por Jovaro</footer>
      </body>
    </html>
  );
}
