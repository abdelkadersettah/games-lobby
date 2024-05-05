import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Games Lobby',
  description: 'Explore the best games with Games-lobby',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid min-h-screen grid-rows-[auto_1fr_auto] h-full">
            <Header />
            <main className="py-6 h-full px-6 ">
              <div className="page-width-padding">{children}</div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
