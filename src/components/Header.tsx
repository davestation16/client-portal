import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const navItems = [
    { label: 'Overview', href: '#' },
    { label: 'Work', href: 'https://station16.com/work' },
    { label: 'Services', href: 'https://station16.com/services' },
    { label: 'About', href: 'https://station16.com/about' },
  ];

  return (
    <header className="h-16 bg-s16-bg border-b border-s16-border flex items-center justify-between px-8 shrink-0 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <a href="https://station16.com/" className="block">
            <img 
              src="/logo.png" 
              alt="Station16" 
              className="h-8 w-auto grayscale brightness-0 hover:grayscale-0 hover:brightness-100 transition-all"
              onError={(e) => {
                // Fallback to stylized text if logo isn't uploaded yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden bg-s16-text text-s16-bg px-3 py-1 font-ui font-black text-xl tracking-tighter italic">S16</div>
          </a>
          <span className="text-xs font-ui font-bold uppercase tracking-[0.22em] text-s16-text-muted border-l border-s16-border pl-4">Client Portal</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-[12px] font-ui font-medium uppercase tracking-[0.05em] text-s16-text-muted hover:text-s16-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-s16-bg-surface border border-s16-border flex items-center justify-center text-xs font-ui font-bold text-s16-text">PJ</div>
      </div>
    </header>
  );
};

export default Header;
