import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export default async function BlogArticleWrapper({ article, children }) {
  let allArticles = await loadArticles()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    datePublished: article.date,
    dateModified: article.date,
    author: [
      {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'UpthriveWork Hub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://upthrivewerk.com/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://upthrivewerk.com${article.href}`,
    },
    description: article.description,
  }

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
    </RootLayout>
  )
}
