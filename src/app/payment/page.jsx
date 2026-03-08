import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Payment',
  description: 'Securely pay for your UpthriveWork project or service.',
}

export default function Payment() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Payment" title="Secure & simple payments">
        <p>
          Pay for your project or service securely. Once payment is
          confirmed, our team will begin working on your requirements
          immediately.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="mx-auto max-w-lg">

            {/* Coming Soon Card */}
            <div className="rounded-2xl border border-neutral-300 bg-white p-12 text-center transition duration-300 hover:border-[#0EA5E9]">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-none stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Payment coming soon
              </h2>
              <p className="mt-4 text-base text-neutral-600">
                Our online payment system is being set up and will be
                available very soon. In the meantime, please contact us
                directly on WhatsApp to discuss payment options.
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

            {/* Accepted Methods Preview */}
            <div className="mt-8 rounded-2xl border border-neutral-300 bg-white p-6 transition duration-300 hover:border-[#0EA5E9]">
              <h3 className="text-sm font-semibold text-neutral-950">
                Coming payment methods
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method) => (
                  <div
                    key={method}
                    className="flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-3 py-3 text-xs font-semibold text-neutral-600 transition duration-300 hover:border-[#0EA5E9]"
                  >
                    {method}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-neutral-500 text-center">
                🔒 Payments will be secured by Razorpay
              </p>
            </div>

          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}