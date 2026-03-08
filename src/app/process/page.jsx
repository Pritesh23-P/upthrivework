import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { RootLayout } from '@/components/RootLayout'
import { loadArticles } from '@/lib/mdx'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Understand() {
  return (
    <Section title="Understand" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every great project starts with a conversation. When you reach out
          to us, we take the time to{' '}
          <strong className="font-semibold text-neutral-950">
            deeply understand
          </strong>{' '}
          your requirements — your subject, your deadline, your academic
          level, and your specific goals.
        </p>
        <p>
          Whether it's a full stack web application, an AI/ML model, an
          assignment, a presentation, or custom academic help — we ask the
          right questions to ensure we fully grasp what you need before we
          begin. No assumptions, no guesswork.
        </p>
        <p>
          Once we understand your needs, we assign the most{' '}
          <strong className="font-semibold text-neutral-950">
            relevant expert
          </strong>{' '}
          from our team — someone who specialises in your exact domain and
          academic level — and provide you with a clear timeline and quote.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What happens in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Requirements gathering</TagListItem>
        <TagListItem>Expert assignment</TagListItem>
        <TagListItem>Timeline planning</TagListItem>
        <TagListItem>Transparent pricing</TagListItem>
        <TagListItem>Deadline confirmation</TagListItem>
        <TagListItem>Initial consultation</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build & Create" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the requirements are crystal clear, our experts get to work.
          Whether it's writing clean, well-documented{' '}
          <strong className="font-semibold text-neutral-950">code</strong>,
          building intelligent ML models, crafting well-researched academic
          content, or designing stunning presentations — we execute with
          precision and care.
        </p>
        <p>
          Throughout the build phase, we keep you{' '}
          <strong className="font-semibold text-neutral-950">
            regularly updated
          </strong>{' '}
          on progress. You're never left wondering where things stand. Our
          project managers ensure smooth communication between you and your
          assigned expert at every stage.
        </p>
        <p>
          We welcome feedback and{' '}
          <strong className="font-semibold text-neutral-950">revisions</strong>{' '}
          during this phase. Your satisfaction isn't just a goal — it's a
          guarantee. If something isn't right, we fix it, no questions asked.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Priya Sharma', role: 'MSc Data Science, NUS Singapore' }}
        className="mt-12"
      >
        The team kept me updated at every step of my ML project. I always
        knew exactly where things stood, and the final model exceeded my
        expectations completely.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We deliver your completed work{' '}
          <strong className="font-semibold text-neutral-950">
            before your deadline
          </strong>{' '}
          — always. Every deliverable goes through a thorough quality check
          to ensure it meets the highest academic and technical standards
          before it reaches you.
        </p>
        <p>
          For full stack and AI/ML projects, we provide complete{' '}
          <strong className="font-semibold text-neutral-950">
            documentation
          </strong>
          , clean code, and a walkthrough session if needed so you fully
          understand what has been built. For academic work, we provide
          plagiarism reports on request.
        </p>
        <p>
          Our support doesn't end at delivery. We offer a{' '}
          <strong className="font-semibold text-neutral-950">
            free revision period
          </strong>{' '}
          after delivery, and our team remains available to answer any
          questions or make adjustments you need after submission.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What's included at delivery
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          Every deliverable is reviewed by a senior team member before
          being sent to you — ensuring accuracy, quality, and completeness.
        </ListItem>
        <ListItem title="Plagiarism Report">
          For all academic work, we provide a plagiarism-free guarantee
          and can share detailed reports on request.
        </ListItem>
        <ListItem title="Free Revisions">
          Not 100% satisfied? We offer free revisions within the agreed
          scope until you're completely happy with the result.
        </ListItem>
        <ListItem title="Post-Delivery Support">
          Have questions after submission? Our team is available 24/7
          via WhatsApp and email to provide ongoing support.
        </ListItem>
      </List>
    </Section>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'At UpthriveWork, we follow a simple three-step process — Understand, Build, and Deliver — to ensure every student gets exactly what they need, on time.',
}

export default async function Process() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="Our Process" title="How we work with you">
        <p>
          We follow a simple, transparent three-step process designed to
          make your experience with UpthriveWork seamless, stress-free,
          and results-driven — from your first message to final delivery.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Understand />
        <Build />
        <Deliver />
      </div>

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