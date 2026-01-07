import { AboutContent } from "@/components/pages/about-content";
import { ProfilePageJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Ethan Smadja - Full Stack Software Engineer, CTO & Co-Founder of Fidjoo. Discover my background, education at ESILV, technical skills, and professional journey.',
  alternates: {
    canonical: 'https://ethansmadja.com/about',
  },
  openGraph: {
    title: 'About Ethan Smadja | Full Stack Software Engineer',
    description: 'Learn more about Ethan Smadja - Full Stack Software Engineer and CTO. Discover my background, skills, and professional journey.',
    url: 'https://ethansmadja.com/about',
    type: 'profile',
    images: [
      {
        url: '/profile.jpg',
        width: 400,
        height: 400,
        alt: 'Ethan Smadja Profile Photo',
      },
    ],
  },
  twitter: {
    title: 'About Ethan Smadja | Full Stack Software Engineer',
    description: 'Learn more about Ethan Smadja - Full Stack Software Engineer and CTO. Discover my background, skills, and professional journey.',
    images: ['/profile.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <ProfilePageJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://ethansmadja.com' },
          { name: 'About', url: 'https://ethansmadja.com/about' },
        ]}
      />
      <AboutContent />
    </>
  );
}
