import './globals.css';
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import { site } from '@/data/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Bulk Air Ticket Booking | Airlines Group Travel Experts',
    template: '%s · Travelo Group',
  },
  description:
    'Book group airline tickets with Travelo Group. Negotiated fares for 10+ passengers across 18 airline partners. Get a free quote today.',
  keywords: [
    'group airline tickets',
    'bulk air ticket booking',
    'group flight booking',
    'corporate group travel',
    'school group flights',
  ],
  openGraph: {
    title: 'Bulk Air Ticket Booking | Airlines Group Travel Experts',
    description:
      'Negotiated group fares for 10+ passengers. Corporate teams, school tours, weddings, and sports crews.',
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#0B1E3A' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
