import InterestForm from '@/components/forms/InterestForm';

export default function RegisterInterestPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">China Sourcing & Wholesale Interest Registration</h1>
      <p className="mt-3 text-neutral-600">
        Tell us what products you’re interested in buying from China, your preferred quantities and budget.
        Registration is free and does not commit you to an order.
      </p>
      <div className="mt-8">
        <InterestForm />
      </div>
    </section>
  );
}