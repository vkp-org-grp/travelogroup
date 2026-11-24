import './globals.css';
import Script from 'next/script';
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
    template: '%s · Travelogroup',
  },
  description:
    'Book group airline tickets with Travelogroup. Negotiated fares for 10+ passengers across 18 airline partners. Get a free quote today.',
  keywords: [
    'group airline tickets',
    'bulk air ticket booking',
    'group flight booking',
    'corporate group travel',
    'school group flights',
  ],
  alternates: { canonical: './' },
  openGraph: {
    title: 'Bulk Air Ticket Booking | Airlines Group Travel Experts',
    description:
      'Negotiated group fares for 10+ passengers. Corporate teams, school tours, weddings, and sports crews.',
    url: './',
    siteName: site.name,
    type: 'website',
  },
  robots: { index: false, follow: false },
  verification: {
    google: 'eI5w84KxJ3jc1cq46ONo-d6TJd8NEkDRYBOXPXuqhTY',
  },
};

export const viewport = { themeColor: '#0B1E3A' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W6TD58XD');
        `}</Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6TD58XD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
