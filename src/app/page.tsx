import { HomeContent } from "@/components/pages/home-content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethan Smadja | Software Engineer',
  description: 'Welcome to the portfolio of Ethan Smadja, Software Engineer at Just. Explore my projects, skills, and professional journey in web development and AI.',
  alternates: {
    canonical: 'https://ethansmadja.com',
  },
  openGraph: {
    title: 'Ethan Smadja | Software Engineer',
    description: 'Welcome to the portfolio of Ethan Smadja. Explore my projects, skills, and professional journey.',
    url: 'https://ethansmadja.com',
    type: 'website',
  },
  twitter: {
    title: 'Ethan Smadja | Software Engineer',
    description: 'Welcome to the portfolio of Ethan Smadja. Explore my projects, skills, and professional journey.',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
