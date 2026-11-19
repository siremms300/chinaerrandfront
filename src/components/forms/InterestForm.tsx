'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/api';
import { BUYER_TYPES, NIGERIAN_STATES, CATEGORIES, QUANTITY_RANGES, BUDGET_RANGES } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function InterestForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus('loading');
//     setError('');
//     const form = new FormData(e.currentTarget);
//     const categories = form.getAll('categories') as string[];

//     const payload = {
//       name: form.get('name'),
//       phone: form.get('phone'),
//       email: form.get('email') || undefined,
//       state: form.get('state'),
//       city: form.get('city'),
//       buyerType: form.get('buyerType'),
//       purchasedBefore: form.get('purchasedBefore') || undefined,
//       categories,
//       specificProducts: form.get('specificProducts'),
//       quantityRange: form.get('quantityRange'),
//       budgetRange: form.get('budgetRange'),
//       frequency: form.get('frequency') || undefined,
//       timeline: form.get('timeline') || undefined,
//       wantsUpdates: form.get('wantsUpdates') || undefined,
//       notes: form.get('notes') || undefined,
//     };

//     try {
//       await submitLead(payload);
//       setStatus('success');
//       e.currentTarget.reset();
//     } catch (err: any) {
//       setStatus('error');
//       setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
//     }
//   }


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formEl = e.currentTarget;
  setStatus('loading');
  setError('');

  const form = new FormData(formEl);
  const categories = form.getAll('categories') as string[];

  const payload = {
    name: form.get('name'),
    phone: form.get('phone'),
    email: form.get('email') || undefined,
    state: form.get('state'),
    city: form.get('city'),
    buyerType: form.get('buyerType'),
    purchasedBefore: form.get('purchasedBefore') || undefined,
    categories,
    specificProducts: form.get('specificProducts'),
    quantityRange: form.get('quantityRange'),
    budgetRange: form.get('budgetRange'),
    frequency: form.get('frequency') || undefined,
    timeline: form.get('timeline') || undefined,
    wantsUpdates: form.get('wantsUpdates') || undefined,
    notes: form.get('notes') || undefined,
  };

  console.log('[submit] payload →', payload);

  try {
    const res = await submitLead(payload);
    console.log('[submit] success →', res);
    formEl.reset();
    setStatus('success');
  } catch (err: any) {
    console.error('[submit] error status →', err?.response?.status);
    console.error('[submit] error body →', err?.response?.data);
    console.error('[submit] raw →', err);
    setStatus('error');
    setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
  }
}


  if (status === 'success') {
    return (
      <div className="bg-white border border-brand-green rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-brand-green">Thank you!</h3>
        <p className="mt-3 text-neutral-600">
          Your interest has been received. Our teams will follow up with you and share updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 space-y-6">
      <section className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" required><input name="name" required className={inputCls} /></Field>
        <Field label="WhatsApp Number" required><input name="phone" required className={inputCls} /></Field>
        <Field label="Email (optional)"><input name="email" type="email" className={inputCls} /></Field>
        <Field label="State" required>
          <select name="state" required className={inputCls}>
            <option value="">Select state</option>
            {NIGERIAN_STATES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="City / Town"><input name="city" className={inputCls} /></Field>
      </section>

      <Field label="Which best describes you?" required>
        <select name="buyerType" required className={inputCls}>
          <option value="">Select</option>
          {BUYER_TYPES.map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>

      <Field label="Product categories (select all that apply)" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {CATEGORIES.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="categories" value={c} className="accent-brand-red" />
              {c}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Specific products you want" required>
        <textarea name="specificProducts" required rows={3} className={inputCls} placeholder="e.g. rechargeable fans, smart watches, power banks" />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Quantity" required>
          <select name="quantityRange" required className={inputCls}>
            <option value="">Select</option>
            {QUANTITY_RANGES.map((q) => <option key={q}>{q}</option>)}
          </select>
        </Field>
        <Field label="Budget" required>
          <select name="budgetRange" required className={inputCls}>
            <option value="">Select</option>
            {BUDGET_RANGES.map((b) => <option key={b}>{b}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Anything else? (optional)">
        <textarea name="notes" rows={3} className={inputCls} />
      </Field>

      {status === 'error' && <p className="text-brand-red text-sm">{error}</p>}

      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Submit Registration'}
      </Button>
    </form>
  );
}

const inputCls = 'w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-brand-red">*</span>}
      </span>
      {children}
    </label>
  );
}