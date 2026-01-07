import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/json-ld";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ethansmadja.com'),
  title: {
    default: 'Ethan Smadja | Full Stack Software Engineer & CTO',
    template: '%s | Ethan Smadja',
  },
  description: 'Professional portfolio of Ethan Smadja, Full Stack Software Engineer and CTO & Co-Founder of Fidjoo. Specializing in React, Next.js, TypeScript, Python, and AI/ML solutions.',
  keywords: [
    'Ethan Smadja',
    'Software Engineer',
    'Full Stack Developer',
    'CTO',
    'Fidjoo',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Python',
    'Machine Learning',
    'AI Developer',
    'Web Development',
    'Portfolio',
    'France',
  ],
  authors: [{ name: 'Ethan Smadja', url: 'https://ethansmadja.com' }],
  creator: 'Ethan Smadja',
  publisher: 'Ethan Smadja',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://ethansmadja.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethansmadja.com',
    siteName: 'Ethan Smadja',
    title: 'Ethan Smadja | Full Stack Software Engineer & CTO',
    description: 'Professional portfolio of Ethan Smadja, Full Stack Software Engineer and CTO & Co-Founder of Fidjoo. Explore projects, skills, and experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ethan Smadja - Full Stack Software Engineer & CTO',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Smadja | Full Stack Software Engineer & CTO',
    description: 'Professional portfolio of Ethan Smadja, Full Stack Software Engineer and CTO & Co-Founder of Fidjoo.',
    images: ['/og-image.jpg'],
    creator: '@ethansmadja',
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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/favicon.ico',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <div className="h-16" />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
