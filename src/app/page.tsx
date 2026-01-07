import { HomeContent } from "@/components/pages/home-content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethan Smadja | Full Stack Software Engineer & CTO',
  description: 'Welcome to the portfolio of Ethan Smadja, Full Stack Software Engineer and CTO & Co-Founder of Fidjoo. Explore my projects, skills, and professional journey in web development and AI.',
  alternates: {
    canonical: 'https://ethansmadja.com',
  },
  openGraph: {
    title: 'Ethan Smadja | Full Stack Software Engineer & CTO',
    description: 'Welcome to the portfolio of Ethan Smadja. Explore my projects, skills, and professional journey.',
    url: 'https://ethansmadja.com',
    type: 'website',
  },
  twitter: {
    title: 'Ethan Smadja | Full Stack Software Engineer & CTO',
    description: 'Welcome to the portfolio of Ethan Smadja. Explore my projects, skills, and professional journey.',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
