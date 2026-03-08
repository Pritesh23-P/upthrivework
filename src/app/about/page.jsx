import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import { loadArticles } from '@/lib/mdx'

function PersonIcon({ initials }) {
  return (
    <div
      className="relative flex h-48 w-full items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
      <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-white/10" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-4 ring-white/30 backdrop-blur-sm">
          <span className="text-2xl font-bold text-white">{initials}</span>
        </div>
      </div>
    </div>
  )
}

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Culture"
        title="Students first, always."
        invert={true}
      >
        <p>
          Everything we do at UpthriveWork is driven by one goal — helping
          students succeed. Our culture is built on expertise, empathy, and
          an unwavering commitment to quality.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Student-First Approach" invert>
            We understand the pressure students face. Every decision we make
            is guided by what's best for the student — their grades, their
            deadlines, their future.
          </GridListItem>
          <GridListItem title="Expertise You Can Trust" invert>
            Our team consists of experienced developers, data scientists, and
            academic professionals who have worked on real-world projects and
            know what academic excellence looks like.
          </GridListItem>
          <GridListItem title="Confidentiality & Integrity" invert>
            We treat every project with the utmost discretion. Your identity,
            and your details are always kept completely private and
            secure.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Rohan Mehta',
        role: 'CEO',
        initials: 'RM',
      },
      {
        name: 'Sathvik Nair',
        role: 'CTO',
        initials: 'SN',
      },
    ],
  },
  {
    title: 'Our Team',
    people: [
      {
        name: 'Aryan Singh',
        role: 'Full Stack Lead',
        initials: 'AS',
      },
      {
        name: 'Vijay Patel',
        role: 'AI/ML Specialist',
        initials: 'VP',
      },
      {
        name: 'Rohan Mehta',
        role: 'Academic Writing Expert',
        initials: 'RM',
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:border-[#0EA5E9]">
                          <PersonIcon
                            initials={person.initials}
                            role={person.role}
                          />
                          <div className="p-5">
                            <p className="font-display text-base font-semibold text-neutral-950">
                              {person.name}
                            </p>
                            <p className="mt-1 text-sm text-neutral-500">
                              {person.role}
                            </p>
                            <div className="mt-3 flex gap-2">
                              <span
                                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                                style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
                              >
                                {person.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}
   

export const metadata = {
  title: 'About Us',
  description:
    'UpthriveWork was founded by a group of engineers, data scientists, and academic professionals passionate about helping students worldwide succeed.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About Us"
        title="Built by experts, driven by your success."
      >
        <p>
          UpthriveWork was founded by a passionate group of engineers, data
          scientists, and academic professionals who saw a gap — students
          worldwide were struggling to bridge the distance between coursework
          demands and real-world execution.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We started UpthriveWork with a single mission: make expert
            academic and technical help accessible, affordable, and
            confidential for every student — regardless of where they are
            in the world. From an undergraduate student in Mumbai working on
            their first full stack project, to a PhD candidate in London
            refining their AI/ML dissertation, we've been there every step
            of the way.
          </p>
          <p>
            Today, UpthriveWork is a trusted partner for over 1,200 students
            across 40+ countries. Our team of developers, data scientists,
            academic writers, and designers work around the clock to ensure
            every deliverable is original, high quality, and on time. When
            you thrive, we thrive — and that's what drives us every single day.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="1,200+" label="Students Helped Worldwide" />
          <StatListItem value="850+" label="Projects Delivered" />
          <StatListItem value="40+" label="Countries Served" />
          <StatListItem value="4.9★" label="Average Student Rating" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From our blog"
        intro="Stay up to date with the latest tips, guides, and insights from our team of experts — designed to help students navigate academic and technical challenges with confidence."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}