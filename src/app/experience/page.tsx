import { ExperienceContent } from "@/components/pages/experience-content";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Explore Ethan Smadja\'s professional experience - CTO & Co-Founder at Fidjoo, AI Developer at Vocca.ai, and Full Stack Developer. View my career timeline and work history.',
  alternates: {
    canonical: 'https://ethansmadja.com/experience',
  },
  openGraph: {
    title: 'Professional Experience | Ethan Smadja',
    description: 'Explore Ethan Smadja\'s professional experience - CTO at Fidjoo, AI Developer, and Full Stack Developer. View my career timeline.',
    url: 'https://ethansmadja.com/experience',
    type: 'website',
  },
  twitter: {
    title: 'Professional Experience | Ethan Smadja',
    description: 'Explore Ethan Smadja\'s professional experience - CTO at Fidjoo, AI Developer, and Full Stack Developer.',
  },
};

export default function ExperiencePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://ethansmadja.com' },
          { name: 'Experience', url: 'https://ethansmadja.com/experience' },
        ]}
      />
      <ExperienceContent />
    </>
  );
}
