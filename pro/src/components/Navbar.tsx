import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Monitor, MonitorOff, Menu, X } from 'lucide-react';

interface NavbarProps {
  crtEnabled: boolean;
  onToggleCrt: () => void;
  audioMuted: boolean;
  onToggleAudio: () => void;
}

const NAV_LINKS = [
  { label: '// HERO', href: '#hero' },
  { label: '// NODES', href: '#projects' },
  { label: '// STACK', href: '#skills' },
  { label: '// TERMINAL', href: '#terminal' },
];

export function Navbar({ crtEnabled, onToggleCrt, audioMuted, onToggleAudio }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-2 border-neon-cyan/40 bg-obsidian/90 backdrop-blur-md px-4 sm:px-6 py-3 shadow-neon-cyan">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group"
            aria-label="Thuto ETH Home"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-cyber-green hud-pulse"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-pixel text-[10px] sm:text-xs text-neon-cyan glow-cyan animate-glitch tracking-wider">
              [THUTO.ETH]
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-pixel text-[9px] text-pixel-gray hover:text-neon-cyan transition-colors duration-200 px-3 py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              id="audio-toggle"
              onClick={onToggleAudio}
              title={audioMuted ? 'Unmute Audio' : 'Mute Audio'}
              className="p-2 border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200 text-neon-cyan"
            >
              {audioMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <button
              id="crt-toggle"
              onClick={onToggleCrt}
              title={crtEnabled ? 'Disable CRT' : 'Enable CRT'}
              className="p-2 border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200 text-neon-cyan"
            >
              {crtEnabled ? <MonitorOff size={14} /> : <Monitor size={14} />}
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden p-2 border border-neon-cyan/30 hover:border-neon-cyan text-neon-cyan transition-all duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-2 border-t-0 border-neon-cyan/40 bg-obsidian/95 backdrop-blur-md overflow-hidden"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left font-pixel text-[9px] text-pixel-gray hover:text-neon-cyan hover:bg-neon-cyan/5 px-6 py-4 transition-colors duration-150 border-b border-neon-cyan/10 last:border-0"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
