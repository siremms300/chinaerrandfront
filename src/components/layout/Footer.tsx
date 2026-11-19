import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/logo.png" alt="China Errand" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-extrabold text-lg">China Errand</span>
          </div>
          <p className="text-sm text-neutral-400">Source • Buy • Ship</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold">Explore</p>
          <Link href="/how-it-works" className="block text-neutral-400 hover:text-white">How It Works</Link>
          <Link href="/categories" className="block text-neutral-400 hover:text-white">Categories</Link>
          <Link href="/register-interest" className="block text-neutral-400 hover:text-white">Register Interest</Link>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold">Contact</p>
          <p className="text-neutral-400">WhatsApp: +2349065219811</p>
          <p className="text-neutral-400">hello@chinaerrand.com</p>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
        © 2026 China Errand. All rights reserved.
      </div>
    </footer>
  );
}