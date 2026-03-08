import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case Studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <div
                      className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl text-xl font-bold text-white"
                      style={{
                        background:
                          'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                      }}
                    >
                      {caseStudy.client.charAt(0)}
                    </div>
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  { name: 'University of Central Florida', short: 'UCF', country: 'USA' },
  { name: 'University of Portsmouth', short: 'UoP', country: 'UK' },
  { name: 'Deakin University', short: 'DU', country: 'Australia' },
  { name: 'York University', short: 'YU', country: 'Canada' },
  { name: 'University of Paderborn', short: 'UoP', country: 'Germany' },
  { name: 'NUI Galway', short: 'NUIG', country: 'Ireland' },
  { name: 'University of Waikato', short: 'UoW', country: 'New Zealand' },
  { name: 'Vellore Institute of Technology', short: 'VIT', country: 'India' },
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Students from top universities trust us
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <ul
          role="list"
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map((client) => (
            <li key={client.name}>
              <FadeIn>
                <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-5 transition hover:border-violet-200 hover:bg-violet-50">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{
                      background:
                        'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                    }}
                  >
                    {client.short}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-neutral-950 leading-tight">
                      {client.name}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {client.country}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Our Work',
  description:
    'Explore real case studies from UpthriveWork — full stack projects, AI/ML models, assignments, and presentations delivered for students worldwide.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our Work"
        title="Real projects. Real students. Real results."
      >
        <p>
          From production-ready full stack applications to research-grade
          AI/ML models and polished academic submissions — here's a look at
          some of the work we've delivered for students across the globe.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
  className="mt-24 sm:mt-32 lg:mt-40"
  client={{
    name: 'Anonymous Student',
    university: 'Vellore Institute of Technology, India',
  }}
>
  UpthriveWork delivered my full stack project with exceptional quality.
  The code was clean, well documented, and my supervisor was thoroughly
  impressed. I went from struggling with deadlines to submitting my best
  work ever. Highly recommend to every student.
</Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}