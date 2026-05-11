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
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white px-3 py-1 font-ui font-black text-xl tracking-tighter italic">S16</div>
          <span className="text-xs font-ui font-bold uppercase tracking-widest text-slate-400 border-l border-slate-200 pl-4">Client Portal</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-sm font-ui font-medium text-slate-500 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right mr-4 hidden sm:block">
          <p className="text-xs font-ui font-bold text-slate-900">Piedmont Jets Rebrand</p>
          <p className="text-[10px] font-ui text-slate-400 uppercase tracking-tight">Current Route: /piedmont-jets</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-ui font-bold">PJ</div>
      </div>
    </header>
  );
};

export default Header;
