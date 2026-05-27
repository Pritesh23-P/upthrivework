const BASE_URL = 'https://upthrivewerk.com'

// Organization structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UpthriveWork Hub',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    'A student-focused academic help platform delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.',
  email: 'upthrivework@gmail.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 21, Sector 44',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122003',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, Elante Office Park',
      addressLocality: 'Chandigarh',
      addressRegion: 'Punjab',
      postalCode: '160002',
      addressCountry: 'IN',
    },
  ],
  sameAs: [
    'https://www.instagram.com/upthrivewerk',
  ],
}

// Website search action structured data
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UpthriveWork Hub',
  url: BASE_URL,
  description:
    'Expert academic help for students — full stack projects, AI/ML solutions, assignments, presentations, and more.',
}

// Service structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'UpthriveWork Hub',
  url: BASE_URL,
  description:
    'Student-focused academic help platform offering expert assistance with projects, assignments, and presentations.',
  priceRange: '$$',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Academic Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Stack Project Development',
          description:
            'Complete, production-ready web applications tailored to academic requirements — from frontend to backend, database to deployment.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI/ML Project Development',
          description:
            'Intelligent models, data pipelines, and research-grade implementations for AI/ML coursework and capstone projects.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Assignment Writing',
          description:
            'Expertly written, 100% original, and plagiarism-free assignments across all subjects.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Presentation Design',
          description:
            'Stunning, well-structured presentations designed to impress professors and ace vivas, seminars, or pitches.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Academic Help',
          description:
            'Research papers, dissertations, case studies, lab reports, exam preparation, and more.',
        },
      },
    ],
  },
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}
