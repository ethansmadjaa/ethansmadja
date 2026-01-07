import { ContactContent } from "@/components/pages/contact-content";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ethan Smadja for collaboration, freelance projects, job opportunities, or general inquiries. Contact me for React, Next.js, and AI development services.',
  alternates: {
    canonical: 'https://ethansmadja.com/contact',
  },
  openGraph: {
    title: 'Contact Ethan Smadja | Get in Touch',
    description: 'Get in touch with Ethan Smadja for collaboration, freelance projects, or job opportunities.',
    url: 'https://ethansmadja.com/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Ethan Smadja | Get in Touch',
    description: 'Get in touch with Ethan Smadja for collaboration, freelance projects, or job opportunities.',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://ethansmadja.com' },
          { name: 'Contact', url: 'https://ethansmadja.com/contact' },
        ]}
      />
      <ContactContent />
    </>
  );
}
