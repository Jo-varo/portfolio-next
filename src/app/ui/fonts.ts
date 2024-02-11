import { Lato, PT_Sans } from 'next/font/google';

export const ptsans = PT_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ptsans',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
});
