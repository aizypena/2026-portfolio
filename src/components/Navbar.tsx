'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  const navSurface = isDark
    ? 'border-emerald-400/15 bg-[#0a0a0a]/95 shadow-[0_10px_30px_rgba(0,0,0,0.28)]'
    : 'border-emerald-300/20 bg-[#151c17]/95 shadow-[0_10px_30px_rgba(0,0,0,0.24)]';

  const brandText = isDark
    ? 'text-emerald-300 hover:text-emerald-200'
    : 'text-emerald-200 hover:text-emerald-100';

  const logoChip = isDark
    ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.18)]'
    : 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.12)]';

  const menuWrap = isDark
    ? 'border-emerald-400/10 bg-white/5 shadow-black/20'
    : 'border-emerald-300/15 bg-emerald-300/5 shadow-black/20';

  const toggleBtn = isDark
    ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200 hover:border-emerald-300/40 hover:bg-emerald-400/15 hover:text-emerald-100'
    : 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200 hover:border-emerald-200/40 hover:bg-emerald-300/15 hover:text-emerald-100';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', nextDark);
    setIsDark(nextDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const nextDark = !current;
      document.documentElement.classList.toggle('dark', nextDark);
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
      return nextDark;
    });
  };

  return (
    <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl ${navSurface}`}>
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className={`flex items-center gap-3 transition ${brandText}`}
        >
          <span className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold ${logoChip}`} title='Julyza Peña'>
            JP
          </span>
        </Link>

        <div className="flex flex-1 justify-center">
          <div className={`hidden rounded-full border px-2 py-2 shadow-inner backdrop-blur md:flex md:items-center md:gap-1.5 ${menuWrap}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const activeClass = isDark
                ? 'bg-emerald-400/15 text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.12)]'
                : 'bg-emerald-300/15 text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.1)]';
              const idleClass = isDark
                ? 'text-emerald-100/80 hover:bg-emerald-400/10 hover:text-emerald-100'
                : 'text-emerald-100/80 hover:bg-emerald-300/10 hover:text-emerald-100';

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                    isActive ? activeClass : idleClass
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${toggleBtn}`}
        >
          <span className="text-base">{isDark ? '☀' : '☾'}</span>
        </button>
      </div>
    </nav>
  );
}