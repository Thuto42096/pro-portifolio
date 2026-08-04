import { motion } from 'framer-motion';
import { GitBranch, MessageSquare, Briefcase, Globe } from 'lucide-react';
import { useClock } from '../hooks/useClock';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/thutor', icon: GitBranch, id: 'footer-github' },
  { label: 'Twitter', href: 'https://twitter.com/thutoratlhahane', icon: MessageSquare, id: 'footer-twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/thutor', icon: Briefcase, id: 'footer-linkedin' },
  { label: 'Website', href: 'https://thuto.eth', icon: Globe, id: 'footer-website' },
];

const NAV_LINKS = [
  { label: '// HERO', href: '#hero' },
  { label: '// NODES', href: '#projects' },
  { label: '// STACK', href: '#skills' },
  { label: '// TERMINAL', href: '#terminal' },
];

export function Footer() {
  const clock = useClock();

  return (
    <footer className="border-t-2 border-neon-cyan/20 bg-surface pt-12 pb-8 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-pixel text-sm text-neon-cyan glow-cyan">[THUTO.ETH]</div>
            <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-xs">
              Full-Stack Engineer & Smart Contract Developer. Building Web3 systems, DeFi protocols, and high-performance applications from South Africa.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-green hud-pulse" />
              <span className="font-pixel text-[7px] text-cyber-green">OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <div className="font-pixel text-[8px] text-gray-500">// NAVIGATION</div>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block font-pixel text-[9px] text-gray-400 hover:text-neon-cyan transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Clock & Socials */}
          <div className="space-y-4">
            <div className="font-pixel text-[8px] text-gray-500">// SYSTEM CLOCK</div>
            <motion.div
              className="font-pixel text-2xl text-neon-cyan glow-cyan border-2 border-neon-cyan/30 bg-obsidian px-4 py-3 w-fit"
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {clock}
            </motion.div>
            <div className="font-pixel text-[7px] text-gray-600">UTC+02:00 // AF/JHB</div>

            <div className="space-y-2 pt-2">
              <div className="font-pixel text-[8px] text-gray-500">// SOCIAL LINKS</div>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon, id }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan/60 hover:text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neon-cyan/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-pixel text-[7px] text-gray-600 text-center sm:text-left">
            © 2026 THUTO RATLHAHANE // ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4">
            <div className="font-pixel text-[7px] text-gray-600">BUILT WITH</div>
            {['REACT', 'VITE', 'TAILWIND', 'FRAMER'].map((tech) => (
              <span key={tech} className="font-pixel text-[7px] text-neon-cyan/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-6 h-px bg-gradient-to-r from-electric-magenta via-neon-cyan to-acid-yellow opacity-30" />
      </div>
    </footer>
  );
}
