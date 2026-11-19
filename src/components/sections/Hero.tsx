import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* thin brand accent */}
      <div className="h-1 w-full bg-brand-red" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 ce-fade-up">
          <p className="ce-eyebrow text-brand-green mb-6">
            Source · Buy · Ship — China to Nigeria
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-brand-black">
            The serious way to source from{' '}
            <span className="text-brand-red">China</span>.
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed">
            We source directly from manufacturers and wholesale markets in China —
            inspect every order, consolidate shipments, and deliver to Nigeria with
            transparent pricing and zero guesswork.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/register-interest">
              <Button size="lg">Start sourcing</Button>
            </Link>
            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg" variant="secondary">
                Talk to us
              </Button>
            </a>
          </div>

          {/* trust line */}
          <div className="mt-10 flex items-center gap-6 text-xs text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              Verified suppliers
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              Transparent landed cost
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              Consolidated shipping
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-brand-black shadow-2xl">
            <Image
              src="/hero.png"
              alt="Sourcing from Chinese wholesale markets"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">Guangzhou · Yiwu</p>
              <p className="mt-1 text-xl font-bold">China → Nigeria</p>
            </div>
          </div>

          {/* floating stat card */}
          <div className="absolute -left-6 -bottom-6 hidden md:block bg-white rounded-2xl shadow-xl border border-neutral-200 p-5 w-44">
            <p className="text-3xl font-extrabold text-brand-red">100%</p>
            <p className="mt-1 text-xs text-neutral-500 leading-snug">
              Orders inspected before shipping
            </p>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200">
          {[
            ['2', 'Sourcing cities in China'],
            ['0', 'Hidden fees'],
            ['1', 'Consolidated shipment'],
            ['24/7', 'WhatsApp support'],
          ].map(([n, l]) => (
            <div key={l} className="py-8 px-6 first:pl-0">
              <p className="text-3xl font-extrabold text-brand-black">{n}</p>
              <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wide">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}