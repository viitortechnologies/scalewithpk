import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://scalewithpk.com'),
  title: 'PK Sir - IT Career Coach & DevOps Mentor | ScaleWithPK',
  description: 'PK Sir is an experienced IT Career Coach and DevOps Trainer with 17+ years of industry experience. Expert mentorship for career transformation, DevOps training, and IT job guidance. Trained 12,000+ students.',
  icons: {
    icon: '/fav.png',
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
  keywords: [
    'scalewithpk',
    'scale with pk',
    'pk sir',
    'pk sir it mentor',
    'pk sir career coach',
    'IT career coach',
    'DevOps mentor',
    'IT career guidance',
    'DevOps training India',
    'IT trainer Telangana',
    'career transformation',
    'software engineer mentor'
  ],
  authors: [{ name: 'PK Sir' }],
  openGraph: {
    title: 'ScaleWithPK – Learn & Grow in IT with PK Sir',
    description: 'Mentorship, real-world DevOps & Azure learning. Grow your IT career with guidance from PK Sir.',
    url: 'https://scalewithpk.com',
    siteName: 'ScaleWithPK',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://scalewithpk.com/og.png',
        width: 1200,
        height: 630,
        alt: 'ScaleWithPK - PK Sir IT Career Mentor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleWithPK – Learn & Grow in IT with PK Sir',
    description: 'Mentorship, real-world DevOps & Azure learning. Grow your IT career with guidance from PK Sir.',
    images: ['https://scalewithpk.com/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://scalewithpk.com" />
        <link rel="icon" type="image/png" href="/fav.png" />
        <link rel="shortcut icon" type="image/png" href="/fav.png" />
        <link rel="apple-touch-icon" href="/fav.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
