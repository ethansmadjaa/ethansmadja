import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ethan Smadja - Software Engineer',
  description: 'Professional portfolio and personal website of Ethan Smadja, showcasing software engineering projects, skills, and experience.',
  keywords: 'Ethan Smadja, Software Engineer, Web Development, Portfolio, Full Stack Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethansmadja.com',
    siteName: 'Ethan Smadja',
    title: 'Ethan Smadja - Software Engineer',
    description: 'Professional portfolio and personal website of Ethan Smadja',
    images: [
      {
        url: 'https://ethansmadja.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ethan Smadja',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}