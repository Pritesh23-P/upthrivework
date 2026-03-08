import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Ready to thrive? Let's build something great.
            </h2>
            <p className="mt-4 text-base text-neutral-400">
              Whether it's a full stack project, AI/ML solution, assignment,
              presentation, or any academic help — we've got you covered.
              Reach out and let's get started today.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact" invert>
                Get Started
              </Button>
              <Button
                href="https://wa.me/911234567890"
                invert
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-x-2">
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
                </span>
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Reach us anywhere
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}