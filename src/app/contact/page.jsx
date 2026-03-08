'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 transition duration-300 focus:border-[#0EA5E9] focus:outline-none focus:ring-0 group-first:rounded-t-2xl group-last:rounded-b-2xl -mt-px"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label} <span className="text-red-500">*</span>
      </label>
    </div>
  )
}

function SelectInput({ label, children, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10 -mt-px">
      <select
        id={id}
        {...props}
        required
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 transition duration-300 focus:border-[#0EA5E9] focus:outline-none focus:ring-0"
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left -translate-y-4 scale-75 font-semibold text-neutral-950"
      >
        {label} <span className="text-red-500">*</span>
      </label>
    </div>
  )
}

function DateInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10 -mt-px">
      <input
        type="datetime-local"
        id={id}
        {...props}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 transition duration-300 focus:border-[#0EA5E9] focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left -translate-y-4 scale-75 font-semibold text-neutral-950"
      >
        {label} <span className="text-red-500">*</span>
      </label>
    </div>
  )
}

function TextareaInput({ label }) {
  let id = useId()
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="group relative z-0 transition-all focus-within:z-10 -mt-px rounded-b-2xl">
      <textarea
        id={id}
        name="message"
        rows={4}
        required
        placeholder=" "
        onChange={(e) => setHasValue(e.target.value !== '')}
        className="peer block w-full resize-none border border-neutral-300 rounded-b-2xl bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 placeholder:text-transparent transition duration-300 focus:border-[#0EA5E9] focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-6 origin-left text-base/6 transition-all duration-200
          ${hasValue
            ? 'top-6 -translate-y-4 scale-75 font-semibold text-neutral-950'
            : 'top-6 text-neutral-500'
          }
          peer-focus:top-6 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950`}
      >
        {label} <span className="text-red-500">*</span>
      </label>
    </div>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const data = Object.fromEntries(new FormData(form))

  try {
    // Send to both Formspark and MongoDB simultaneously
    await Promise.all([
      // Formspark - email notification
      fetch('https://submit-form.com/dnFLj8HFg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      }),
      // MongoDB - save to database
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    ])

    setSubmitted(true)
  } catch (error) {
    alert('Something went wrong. Please try again.')
  }
}

  if (submitted) {
    return (
      <FadeIn className="lg:order-last">
        <div className="flex flex-col items-start justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-12">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-none stroke-white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
            Message received!
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Thank you for reaching out to UpthriveWork. Our team will get
            back to you within 24 hours. For faster response, feel free to
            chat with us directly on WhatsApp.
          </p>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-x-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
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
    )
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Send us a message
        </h2>
        <div className="isolate mt-6 rounded-2xl bg-white/50">
          <TextInput
            label="Full Name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
          <TextInput
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="WhatsApp Number"
            type="tel"
            name="whatsapp"
            autoComplete="tel"
            required
          />
          <TextInput
            label="University / Institution"
            type="text"
            name="university"
            autoComplete="organization"
            required
          />
          <SelectInput label="Service Needed" name="service">
            <option value="">Select a service</option>
            <option value="fullstack">Full Stack Project</option>
            <option value="aiml">AI/ML Project</option>
            <option value="assignment">Assignment</option>
            <option value="presentation">Presentation</option>
            <option value="academic">Custom Academic Help</option>
          </SelectInput>
          <DateInput
            label="Your Deadline"
            name="deadline"
            required
          />
          <TextareaInput label="Tell us about your requirements"/>
        </div>
        <Button type="submit" className="mt-10">
          Send Message
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Get in touch
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        We're available 24/7 across all time zones. Reach out via the form,
        WhatsApp, or email — and we'll get back to you within a few hours.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['General Inquiries', 'hello@upthriveWork.com'],
            ['Project Support', 'support@upthriveWork.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Chat on WhatsApp
        </h2>
        <p className="mt-4 text-sm text-neutral-600">
          Prefer a quicker response? Message us directly on WhatsApp and
          our team will respond within minutes.
        </p>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-x-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
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
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact Us" title="Let's work together">
        <p>
          Tell us about your project, assignment, or academic requirement —
          and we'll match you with the right expert within hours.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}