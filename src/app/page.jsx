import Link from 'next/link'
import imageLaptop from '@/images/laptop.jpg'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { RootLayout } from '@/components/RootLayout'
import { loadCaseStudies } from '@/lib/mdx'

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
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by students from top universities worldwide
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {clients.map((client) => (
              <li key={client.name}>
                <FadeIn>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-5 transition duration-300 hover:border-[#0EA5E9]">
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
                      <p className="text-xs font-semibold text-neutral-200 leading-tight">
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
    </div>
  )
}

function Stats() {
  const stats = [
    { value: '1,200+', label: 'Students Helped' },
    { value: '850+', label: 'Projects Delivered' },
    { value: '40+', label: 'Countries Served' },
    { value: '4.9★', label: 'Average Rating' },
  ]

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeInStagger faster>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <FadeIn key={stat.label}>
                <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white p-8 text-center transition duration-300 hover:border-2 hover:border-[#0EA5E9]">
                  <span
                    className="font-display text-4xl font-semibold sm:text-5xl"
                    style={{
                      background:
                        'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm text-neutral-600">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Real projects. Real results. Real students."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From full stack web apps to AI/ML models and academic assignments —
          here's a glimpse of what we've built for students worldwide.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition duration-300 hover:ring-2 hover:ring-[#0EA5E9] sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{
                        background:
                          'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                      }}
                    >
                      <span className="text-xl font-bold text-white">
                        {caseStudy.client.charAt(0)}
                      </span>
                    </div>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Services"
        title="Everything a student needs, under one roof."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From complex full stack applications to polished presentations —
          we deliver expert, original, and on-time academic and technical
          help for students at every level.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Full Stack Project">
              We build complete, production-ready web applications tailored
              to your academic requirements — from frontend to backend,
              database to deployment.
            </ListItem>
            <ListItem title="AI/ML Project">
              Our data scientists and ML engineers craft intelligent models,
              data pipelines, and research-grade implementations for your
              AI/ML coursework and capstone projects.
            </ListItem>
            <ListItem title="Assignment">
              Get expertly written, 100% original, and plagiarism-free
              assignments across all subjects — delivered on time, every time.
            </ListItem>
            <ListItem title="Presentation">
              Stunning, well-structured presentations designed to impress
              your professors and ace your viva, seminar, or pitch.
            </ListItem>
            <ListItem title="Custom Academic Help">
              Research papers, dissertations, case studies, lab reports, exam
              preparation — whatever your academic challenge, we have the
              expert for it.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function WhyUs() {
  const reasons = [
    {
      title: 'On-Time Delivery',
      description:
        'We understand deadlines are non-negotiable. Every project is delivered on or before your deadline, guaranteed.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: '100% Original & Plagiarism-Free',
      description:
        'All work is written and built from scratch. We provide plagiarism reports on request for complete peace of mind.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: '24/7 Support',
      description:
        'Our team is available around the clock across all time zones. Reach us anytime via WhatsApp or email.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Pricing',
      description:
        "Student-friendly pricing with no hidden charges. Quality help that doesn't break the bank.",
      icon: (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <path
      stroke="url(#g4)"
      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
    />
  </svg>
),
    },
    {
      title: 'Expert Mentors & Developers',
      description:
        'Our team comprises experienced developers, data scientists, and academic professionals with real-world expertise.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#g5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Confidential & Private',
      description:
        'Your identity are always kept completely confidential. We take your privacy seriously.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#g6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Why UpthriveWork"
        title="The smarter way to get academic help."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We don't just complete your work — we ensure it meets the highest
          academic and technical standards, every single time.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <FadeIn key={reason.title} className="flex h-full">
              <div className="relative flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-8 transition duration-300 hover:border-2 hover:border-[#0EA5E9]">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(14,165,233,0.1) 100%)',
                  }}
                >
                  {reason.icon}
                </div>
                <strong className="font-display text-base font-semibold text-neutral-950">
                  {reason.title}
                </strong>
                <p className="mt-2 text-sm text-neutral-600">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'UpthriveWork provides expert full stack project making, AI/ML project making, assignment making, presentation making, and custom academic help for students worldwide.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Where Student Ambition Meets{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Expert Execution.
            </span>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            UpthriveWork helps undergraduate, postgraduate, PhD students and
            working professionals worldwide with full stack projects, AI/ML
            projects, assignments, presentations, and custom academic help —
            delivered on time, every time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
            >
              Explore Our Work
            </Link>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-white"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.403 3.578C18.228 1.4 15.32.001 12.04 0 5.463 0 .104 5.356.101 11.932c-.001 2.101.547 4.149 1.588 5.963L0 24l6.26-1.642a11.934 11.934 0 0 0 5.773 1.47h.005c6.574 0 11.933-5.357 11.936-11.933.002-3.187-1.239-6.184-3.571-8.317Zm-8.363 18.354h-.004a9.907 9.907 0 0 1-5.048-1.38l-.362-.215-3.754.984 1.002-3.656-.236-.375a9.872 9.872 0 0 1-1.514-5.278c.002-5.456 4.444-9.895 9.903-9.895 2.645.001 5.128 1.031 6.993 2.898a9.832 9.832 0 0 1 2.892 6.988c-.003 5.457-4.444 9.929-9.872 9.929Zm5.43-7.418c-.298-.149-1.763-.87-2.036-.968-.273-.1-.472-.149-.671.149-.198.297-.769.968-.942 1.167-.174.198-.347.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.133-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.148-.671-1.617-.919-2.213-.242-.581-.488-.502-.671-.511l-.571-.01c-.198 0-.521.074-.794.372s-1.042 1.018-1.042 2.487 1.067 2.884 1.216 3.083c.148.198 2.1 3.205 5.086 4.494.711.307 1.266.49 1.699.627.714.227 1.364.195 1.878.118.573-.085 1.763-.721 2.011-1.417.248-.696.248-1.293.173-1.417-.074-.124-.272-.198-.57-.347Z"
                />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <Stats />

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

      <Services />

      <WhyUs />

      <ContactSection />
    </RootLayout>
  )
}