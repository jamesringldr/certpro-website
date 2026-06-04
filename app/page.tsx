import BookServiceButton from '@/components/booking/BookServiceButton'
import LeadCaptureSection from '@/components/sections/LeadCaptureSection'
import ServiceAreaSection from '@/components/sections/ServiceAreaSection'
import ServiceGridSection from '@/components/sections/ServiceGridSection'
import SocialProofTrustSection from '@/components/sections/SocialProofTrustSection'
import WhyChooseCertProSection from '@/components/sections/WhyChooseCertProSection'
import ArticlesSection from '@/components/sections/ArticlesSection'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-bg py-14 md:py-16 lg:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('/images/hero-mobile.png')" }}
          aria-hidden="true"
        />
        <video className="absolute inset-0 hidden h-full w-full object-cover md:block" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/84 via-brand-bg/69 to-brand-bg/80" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-brand-bg/70 to-brand-bg md:h-44" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Kansas City&apos;s Rapid Response Plumbing for 30+ years
          </h1>
          <div className="mt-4 max-w-2xl space-y-2 text-base leading-7 md:text-lg">
            <p className="font-bold text-white">Family-owned, Licensed &amp; Insured.</p>
            <p className="font-bold italic text-white">
              One tap to call. One form to book. One path to service.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+18164540247"
              className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Call Emergency Line
            </a>
            <BookServiceButton
              entrypoint="hero_cta"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-bold text-brand-primary transition-colors duration-200 hover:bg-slate-100"
            >
              Request Estimate
            </BookServiceButton>
          </div>
        </div>
      </section>
      <SocialProofTrustSection />
      <WhyChooseCertProSection />
      <ServiceGridSection />
      <ServiceAreaSection />
      <ArticlesSection />
      <LeadCaptureSection />
    </>
  )
}
