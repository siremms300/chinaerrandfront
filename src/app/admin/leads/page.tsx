'use client';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

type Lead = {
  _id: string; name: string; phone: string; buyerType: string;
  categories: string[]; quantityRange: string; budgetRange: string; status: string; createdAt: string;
};

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('ce_token');
    if (!token) {
      window.location.href = '/admin/login';
      return;
    }
    api.get('/leads', { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => setLeads(r.data))
      .catch(() => {
        localStorage.removeItem('ce_token');
        window.location.href = '/admin/login';
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">Loading…</p>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Leads ({leads.length})</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-neutral-100 text-left">
            <tr><th className="p-3">Name</th><th className="p-3">Phone</th><th className="p-3">Type</th><th className="p-3">Categories</th><th className="p-3">Qty</th><th className="p-3">Budget</th><th className="p-3">Status</th></tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l._id} className="border-t">
                <td className="p-3">{l.name}</td>
                <td className="p-3">{l.phone}</td>
                <td className="p-3">{l.buyerType}</td>
                <td className="p-3">{l.categories.join(', ')}</td>
                <td className="p-3">{l.quantityRange}</td>
                <td className="p-3">{l.budgetRange}</td>
                <td className="p-3">{l.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}