export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ethan Smadja',
    url: 'https://ethansmadja.com',
    image: 'https://ethansmadja.com/profile.jpg',
    sameAs: [
      'https://www.linkedin.com/in/ethan-smadja/',
      'https://github.com/ethansmadja',
    ],
    jobTitle: ['Software Engineer'],
    worksFor: {
      '@type': 'Organization',
      name: 'Just',
      url: 'https://getjust.eu',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'ESILV - École Supérieure d\'Ingénieurs Léonard de Vinci',
    },
    knowsAbout: [
      'Full Stack Development',
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Machine Learning',
      'Artificial Intelligence',
      'Web Development',
    ],
    email: 'mailto:ethan@smadja.biz',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ethan Smadja Portfolio',
    description: 'Professional portfolio and personal website of Ethan Smadja, Software Engineer at Just.',
    url: 'https://ethansmadja.com',
    author: {
      '@type': 'Person',
      name: 'Ethan Smadja',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ethansmadja.com/projects?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProfilePageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Ethan Smadja',
      description: 'Software Engineer at Just',
      image: 'https://ethansmadja.com/profile.jpg',
      sameAs: [
        'https://www.linkedin.com/in/ethan-smadja/',
        'https://github.com/ethansmadja',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
