'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/#about', label: 'About', id: 'about' },
  { href: '/#projects', label: 'Projects', id: 'projects' },
  { href: '/#experience', label: 'Experience', id: 'experience' },
  { href: '/#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dock styles
  const dockStyles = isDark
    ? 'bg-[#1a1a1a]/80 border-emerald-400/15 shadow-[0_10px_40px_rgba(0,0,0,0.7)]'
    : 'bg-[#1a1a1a]/80 border-emerald-300/15 shadow-[0_10px_40px_rgba(0,0,0,0.4)]';

  const dockItem = isDark
    ? 'text-emerald-100/70 hover:text-emerald-200 hover:bg-emerald-400/10'
    : 'text-emerald-100/70 hover:text-emerald-100 hover:bg-emerald-300/10';

  const dockItemActive = isDark
    ? 'bg-emerald-400/15 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
    : 'bg-emerald-300/15 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.12)]';

  const logoChip = isDark
    ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.18)]'
    : 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.12)]';

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

  // Intersection Observer for section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Fallback: when at the very top of the page, set active to 'home'
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-4 z-50 flex justify-center px-4">
      <div
        className={`flex w-full max-w-3xl items-center gap-3 rounded-2xl border px-5 py-2.5 backdrop-blur-2xl transition-all duration-300 ${dockStyles}`}
      >
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:scale-105"
          title="Julyza Peña"
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-semibold ${logoChip}`}
          >
            JP
          </span>
        </Link>

        {/* Separator */}
        <span className="mx-1 h-6 w-px bg-white/10" />

        {/* Nav links */}
        <div className="flex flex-1 items-center justify-center gap-0.5">
          {navLinks.map((link) => {
            const isActive =
              link.id === activeSection ||
              (link.id === 'home' && activeSection === 'home' && pathname === '/');

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive ? dockItemActive : dockItem
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Separator */}
        <span className="mx-1 h-6 w-px bg-white/10" />

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition hover:scale-105 ${toggleBtn}`}
        >
          <span className="text-base">{isDark ? '☀' : '☾'}</span>
        </button>
      </div>
    </nav>
  );
}
