import { Inter } from 'next/font/google';
import { GeistPixelSquare } from 'geist/font/pixel'; // name only. Also: GeistPixelGrid, Circle, Triangle, Line
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Fahru Rahman | Software Engineer',
  description: 'Portfolio of Fahru Rahman, Software Engineer (frontend, fullstack, Lua). Projects, skills, and contact.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${GeistPixelSquare.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
