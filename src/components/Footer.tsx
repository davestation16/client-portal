import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-s16-bg border-t border-s16-border py-24 mt-24">
      <div className="s16-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="flex flex-col gap-6">
            <a href="https://station16.com/" className="block hover:opacity-80 transition-opacity">
              <div className="flex items-end grayscale">
                <img 
                  src="/logo.png" 
                  alt="Station16" 
                  className="h-10 w-auto grayscale brightness-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
                  }}
                />
                <div className="logo-fallback hidden flex items-end">
                  <span className="font-ui text-4xl font-bold tracking-tighter">s16</span>
                  <div className="ml-1 mb-2 h-0.5 w-10 bg-s16-text"></div>
                </div>
              </div>
            </a>
            <div>
              <p className="font-display text-xl text-s16-text leading-tight">brands with character(s)</p>
              <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-s16-text-muted mt-2">Atlanta, since 2011</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-s16-text-muted mb-8">Pages</h4>
            <nav className="flex flex-col gap-4">
              {['Services', 'About', 'Work', 'Notes', 'Contact'].map((page) => (
                <a 
                  key={page} 
                  href={`https://station16.com/${page.toLowerCase()}/`} 
                  className="font-ui text-xs uppercase font-bold tracking-widest text-s16-text hover:text-s16-accent transition-colors"
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-s16-text-muted mb-8">Services</h4>
            <nav className="flex flex-col gap-4">
              {['Foundation & Strategy', 'Design Systems', 'Digital Experiences', 'Story & Reputation'].map((service) => (
                <a 
                  key={service} 
                  href={`https://station16.com/services/#${encodeURIComponent(service)}`} 
                  className="font-ui text-xs uppercase font-bold tracking-widest text-s16-text hover:text-s16-accent transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-s16-text-muted mb-8">Follow</h4>
            <nav className="flex flex-col gap-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/station16/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/station16/' },
                { name: 'Facebook', url: 'https://www.facebook.com/Station16' },
                { name: 'X', url: 'https://x.com/station16' }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-ui text-xs uppercase font-bold tracking-widest text-s16-text hover:text-s16-accent transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-s16-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-s16-text-muted">
            &copy; 2026 Station16. All rights reserved. Proprietary & Confidential.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs italic text-s16-text-muted">A funky little engine that could.</span>
            <div className="h-4 w-px bg-s16-border"></div>
            <a href="#" className="font-ui text-[10px] uppercase tracking-[0.2em] text-s16-text-muted hover:text-s16-text">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
