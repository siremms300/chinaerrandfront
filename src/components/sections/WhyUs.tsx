const points = [
  { t: 'Physical presence in China', d: 'We walk the markets and factories ourselves. No middlemen marking up your cost.' },
  { t: 'Transparent landed cost', d: 'Product, freight, customs, clearing — itemised before you pay. No surprises.' },
  { t: 'Inspection before shipping', d: 'Every order is checked before it leaves China. What you approve is what ships.' },
  { t: 'Consolidated logistics', d: 'Multiple suppliers, one clean shipment and one tracking record to Nigeria.' },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-brand-black text-white py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="ce-eyebrow text-brand-red mb-4">Why China Errand</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Built for buyers who can't afford surprises.
          </h2>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            China Errand exists to remove the risk, opacity and guesswork from importing
            from China — for individuals, retailers and businesses across Nigeria.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-16 bg-brand-red" />
            <p className="text-sm text-neutral-400">Source · Buy · Ship</p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-neutral-800 rounded-2xl overflow-hidden">
          {points.map((p) => (
            <div key={p.t} className="bg-brand-black p-8">
              <h3 className="font-bold text-white">{p.t}</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}