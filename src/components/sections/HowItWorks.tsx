const steps = [
  { n: '01', t: 'Tell us what you need', d: 'Share the products, quantities and budget. No commitment — this maps real demand.' },
  { n: '02', t: 'We source in China', d: 'We visit markets and factories, verify quality and negotiate factory prices.' },
  { n: '03', t: 'You approve the quote', d: 'You receive a transparent landed-cost quote — product, freight, duties, clearing.' },
  { n: '04', t: 'We ship and track', d: 'Orders are consolidated, shipped to Nigeria and tracked until delivery.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-50 py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="ce-eyebrow text-brand-red mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            A process built on clarity, not guesswork.
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Every step is transparent. You always know what you're paying for and where your order is.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-8">
              <p className="text-sm font-bold text-brand-red tracking-widest">{s.n}</p>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}