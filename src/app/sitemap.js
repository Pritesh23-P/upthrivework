import { loadCaseStudies, loadArticles } from '@/lib/mdx'

const BASE_URL = 'https://upthrivewerk.com'

export default async function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  // Dynamic case study pages
  let caseStudyPages = []
  try {
    const caseStudies = await loadCaseStudies()
    caseStudyPages = caseStudies.map((study) => ({
      url: `${BASE_URL}${study.href}`,
      lastModified: new Date(study.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error loading case studies for sitemap:', error)
  }

  // Dynamic blog article pages
  let blogPages = []
  try {
    const articles = await loadArticles()
    blogPages = articles.map((article) => ({
      url: `${BASE_URL}${article.href}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error loading articles for sitemap:', error)
  }

  return [...staticPages, ...caseStudyPages, ...blogPages]
}
