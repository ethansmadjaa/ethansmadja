import { ProjectsContent } from "@/components/pages/projects-content";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Ethan Smadja\'s portfolio of projects - Fidjoo AI platform, Dan Systèmes, Vocca AI testing, and more. View technical work in React, Next.js, Python, and AI/ML.',
  alternates: {
    canonical: 'https://ethansmadja.com/projects',
  },
  openGraph: {
    title: 'Projects & Portfolio | Ethan Smadja',
    description: 'Explore Ethan Smadja\'s portfolio of projects - Fidjoo AI platform, web applications, and AI/ML solutions.',
    url: 'https://ethansmadja.com/projects',
    type: 'website',
  },
  twitter: {
    title: 'Projects & Portfolio | Ethan Smadja',
    description: 'Explore Ethan Smadja\'s portfolio of projects - Fidjoo AI platform, web applications, and AI/ML solutions.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://ethansmadja.com' },
          { name: 'Projects', url: 'https://ethansmadja.com/projects' },
        ]}
      />
      <ProjectsContent />
    </>
  );
}
