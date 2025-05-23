'use client';

import { usePathname } from 'next/navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const showLayout = !(
    pathname.startsWith('/login') ||
    pathname.startsWith('/cadastro') ||
    pathname.startsWith('/esquecisenha')
  );
  
  return (
    <html lang="pt-br">
      <body>
        {showLayout && <Header />}
        {children}
        {showLayout && <Footer />}
      </body>
    </html>
  );
}
