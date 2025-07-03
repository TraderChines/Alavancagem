import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ProblemsSection } from '@/components/landing/problems-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { OfferSection } from '@/components/landing/offer-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { FaqSection } from '@/components/landing/faq-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
