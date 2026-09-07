import { motion } from 'framer-motion';
import { Download, Send, Zap, Activity } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const ROLES = ['Junior Dev @ ABC', 'Full-Stack Developer', 'Smart Contract Dev', 'AI Agent Builder'];

const GAS_BARS = [
  { label: 'BASE', value: 72, color: '#00f3ff' },
  { label: 'OPT', value: 45, color: '#00ff66' },
  { label: 'ARB', value: 31, color: '#ffe600' },
  { label: 'POLY', value: 58, color: '#ff0055' },
];

const STAT_ROWS = [
  { label: 'PUBLIC REPOS', value: '54', color: 'text-neon-cyan' },
  { label: 'LIVE DEPLOYS', value: '9', color: 'text-electric-magenta' },
  { label: 'LANGUAGES', value: '8', color: 'text-acid-yellow' },
  { label: 'FOLLOWERS', value: '18', color: 'text-cyber-green' },
];

export function Hero() {
  const displayText = useTypewriter(ROLES, 80, 40, 1800);

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 flex items-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,243,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* ─── Left Column ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-neon-cyan/40 bg-surface px-3 py-2 w-fit">
            <Zap size={10} className="text-acid-yellow fill-acid-yellow" />
            <span className="font-pixel text-[8px] text-acid-yellow tracking-widest">
              JUNIOR DEV @ AFRICA'S BLOCKCHAIN CLUB
            </span>
          </div>

          {/* Name */}
          <div>
            <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-2">
              THUTO
              <br />
              <span className="text-neon-cyan glow-cyan">RATLHAHANE</span>
            </h1>
            <div className="h-px w-full bg-gradient-to-r from-neon-cyan via-electric-magenta to-transparent mt-3" />
          </div>

          {/* Typewriter */}
          <div className="flex items-center gap-2 min-h-[32px]">
            <span className="font-pixel text-[10px] sm:text-xs text-electric-magenta">{'>'}</span>
            <span className="font-pixel text-[10px] sm:text-xs text-neon-cyan glow-cyan">
              {displayText}
            </span>
            <span className="terminal-cursor" />
          </div>

          {/* Description */}
          <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-lg">
            Building next-gen Web3 protocols, DeFi systems, and full-stack applications.
            Bridging on-chain smart contract security with high-performance off-chain architectures.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STAT_ROWS.map((stat) => (
              <div key={stat.label} className="border border-neon-cyan/20 bg-surface p-3 text-center">
                <div className={`font-pixel text-sm ${stat.color} mb-1`}>{stat.value}</div>
                <div className="font-pixel text-[7px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ─── System Status HUD ─── */}
          <div className="border-2 border-neon-cyan/30 bg-surface p-4 space-y-3">
            <div className="font-pixel text-[8px] text-neon-cyan/60 mb-2">// SYSTEM STATUS</div>

            {/* Online indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyber-green hud-pulse flex-shrink-0" />
              <span className="font-pixel text-[8px] text-cyber-green glow-green">
                ONLINE — ALL SYSTEMS NOMINAL
              </span>
            </div>

            {/* Chain tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <Activity size={10} className="text-neon-cyan/60" />
              <span className="font-pixel text-[7px] text-gray-500">CHAIN ECOSYSTEM:</span>
              {['EVM', 'SOLANA', 'NODE.JS'].map((chain) => (
                <span
                  key={chain}
                  className="font-pixel text-[7px] px-2 py-1 border border-neon-cyan/40 text-neon-cyan bg-neon-cyan/5"
                >
                  {chain}
                </span>
              ))}
            </div>

            {/* Gas meter */}
            <div className="space-y-1.5">
              <div className="font-pixel text-[7px] text-gray-500 mb-2">LIVE GAS TRACKER (GWEI)</div>
              {GAS_BARS.map((bar) => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="font-pixel text-[7px] text-gray-500 w-8 flex-shrink-0">{bar.label}</span>
                  <div className="flex-1 h-2 bg-surface-light border border-white/10 overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: bar.color }}
                      initial={{ width: '10%' }}
                      animate={{ width: `${bar.value}%` }}
                      transition={{
                        duration: 1.5,
                        ease: 'easeOut',
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        repeatDelay: 2,
                      }}
                    />
                  </div>
                  <span className="font-pixel text-[7px] w-6 flex-shrink-0" style={{ color: bar.color }}>
                    {bar.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-view-work"
              className="pixel-btn flex items-center gap-2 px-5 py-3 bg-neon-cyan text-obsidian font-pixel text-[9px] shadow-pixel-cyan hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            >
              <Zap size={12} />
              VIEW WORK
            </a>
            <a
              href="#terminal"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#terminal')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-open-terminal"
              className="pixel-btn flex items-center gap-2 px-5 py-3 border-2 border-electric-magenta text-electric-magenta font-pixel text-[9px] shadow-pixel-magenta hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100 hover:bg-electric-magenta/10"
            >
              <Download size={12} />
              OPEN TERMINAL
            </a>
          </div>
        </motion.div>

        {/* ─── Right Column: Avatar ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Outer decorative frame */}
            <div className="absolute -inset-4 border border-neon-cyan/20 pointer-events-none" />
            <div className="absolute -inset-8 border border-neon-cyan/10 pointer-events-none" />

            {/* Corner brackets */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />

            {/* Avatar */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
              className="relative"
            >
              <div
                className="border-4 border-neon-cyan bg-surface overflow-hidden"
                style={{
                  boxShadow: '6px 6px 0px #00f3ff, 0 0 30px rgba(0, 243, 255, 0.3)',
                  width: 280,
                  height: 280,
                }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Thuto Ratlhahane — Full-Stack & Web3 Developer"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* HUD overlays on avatar */}
              <div className="absolute top-2 left-2 font-pixel text-[7px] text-neon-cyan bg-obsidian/80 px-2 py-1">
                [ID:001]
              </div>
              <div className="absolute bottom-2 right-2 font-pixel text-[7px] text-cyber-green bg-obsidian/80 px-2 py-1">
                ▶ ACTIVE
              </div>

              {/* Glowing side lines */}
              <div className="absolute top-0 left-0 w-0.5 h-full bg-neon-cyan opacity-40" />
              <div className="absolute top-0 right-0 w-0.5 h-full bg-electric-magenta opacity-40" />
            </motion.div>

            {/* Info panel below avatar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="border-2 border-neon-cyan/30 bg-surface mt-3 p-3 w-full"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-pixel text-[8px] text-neon-cyan">THUTO.ETH</div>
                  <div className="font-pixel text-[7px] text-gray-500 mt-0.5">LVL 99 // BUILDER</div>
                </div>
                <div className="flex gap-1">
                  {['⚛', '◆', '🌿'].map((icon, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 border border-neon-cyan/30 flex items-center justify-center text-xs bg-surface-light"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <div className="font-pixel text-[7px] text-neon-cyan/40">SCROLL</div>
          <div className="w-px h-8 bg-gradient-to-b from-neon-cyan/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
