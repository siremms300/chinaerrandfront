'use client';
import { useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  async function login(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('ce_token', data.token);
      router.push('/admin/leads');
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <form onSubmit={login} className="max-w-sm mx-auto py-24 px-4 space-y-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <input className="w-full border rounded-lg px-4 py-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full border rounded-lg px-4 py-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {err && <p className="text-brand-red text-sm">{err}</p>}
      <button className="w-full bg-brand-red text-white rounded-lg py-3 font-semibold">Sign In</button>
    </form>
  );
}