import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Data Analytics Portfolio',
  description: 'A personal portfolio for a data analyst.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
