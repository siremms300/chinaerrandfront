import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl bg-brand-red px-8 py-16 md:px-16 md:py-24 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-black/10" />
          <div className="relative max-w-3xl">
            <p className="ce-eyebrow text-white/80 mb-4">Get started</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Register your interest in minutes. It's free, and it doesn't commit you to an order.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/register-interest">
                <Button size="lg" variant="dark">Register interest</Button>
              </Link>
              <a href="https://wa.me/2349065219811" target="_blank" rel="noreferrer">
                <Button size="lg" variant="secondary">Chat on WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}