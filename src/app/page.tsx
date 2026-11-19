import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Categories from '@/components/sections/Categories';
import WhyUs from '@/components/sections/WhyUs';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Categories />
      <WhyUs />
      <CTASection />
    </>
  );
}