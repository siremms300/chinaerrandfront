import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const links = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#categories', label: 'Categories' },
  { href: '/#about', label: 'About' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="China Errand" width={120} height={120} priority className="h-11 w-auto object-contain" />
          <span className="font-extrabold text-lg tracking-tight"></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-neutral-700 hover:text-brand-red transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/register-interest">
          <Button size="md">Register interest</Button>
        </Link>
      </nav>
    </header>
  );
}