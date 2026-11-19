import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

export default function Categories() {
  const featured = CATEGORIES.slice(0, 7); // 7 + 1 CTA tile = 8, keeps the 4-col grid even

  return (
    <section id="categories" className="py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="ce-eyebrow text-brand-green mb-4">What we source</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Any category. Any quantity.
            </h2>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              These are the categories Nigerian buyers request most — but they're
              examples, not limits. If it can be sourced in China, we can source it for you.
            </p>
          </div>
          <Link
            href="/register-interest"
            className="text-sm font-semibold text-brand-red hover:underline"
          >
            Request a product →
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((c) => (
            <div
              key={c}
              className="group relative rounded-2xl border border-neutral-200 p-6 hover:border-brand-red transition-colors duration-200"
            >
              <div className="h-8 w-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
              </div>
              <p className="mt-6 font-semibold leading-snug">{c}</p>
              <p className="mt-2 text-xs text-neutral-500">Sourced to order</p>
              <span className="absolute top-6 right-6 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </div>
          ))}

          {/* "Anything else" tile — makes the open-endedness explicit */}
          <Link
            href="/register-interest"
            className="group relative rounded-2xl border border-dashed border-neutral-300 p-6 hover:border-brand-red hover:bg-neutral-50 transition-colors duration-200 flex flex-col justify-between"
          >
            <div className="h-8 w-8 rounded-lg bg-brand-black flex items-center justify-center text-white font-bold">
              +
            </div>
            <div>
              <p className="mt-6 font-semibold leading-snug">
                Anything else
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Tell us what you need — we'll find it
              </p>
            </div>
          </Link>
        </div>

        {/* explicit reassurance line */}
        <p className="mt-10 text-sm text-neutral-500">
          Can't see your product?{' '}
          <Link href="/register-interest" className="text-brand-red font-semibold hover:underline">
            Request it
          </Link>{' '}
          — electronics, machinery, packaging, industrial equipment, custom items and more.
        </p>
      </div>
    </section>
  );
}