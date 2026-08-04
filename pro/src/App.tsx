import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillMatrix } from './components/SkillMatrix';
import { Terminal } from './components/Terminal';
import { Footer } from './components/Footer';
import { ScanlineOverlay } from './components/ScanlineOverlay';

// Web Audio API — 8-bit beep synthesizer (no external audio files needed)
function createBeepContext() {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    return new AudioContext();
  } catch {
    return null;
  }
}

function playBeep(ctx: AudioContext | null, freq = 440, duration = 0.08, type: OscillatorType = 'square') {
  if (!ctx) return;
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch {
    // Silently fail if AudioContext not supported
  }
}

export default function App() {
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize audio context on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = createBeepContext();
      }
    };
    window.addEventListener('click', initAudio, { once: true });
    return () => window.removeEventListener('click', initAudio);
  }, []);

  function handleToggleCrt() {
    if (!audioMuted) playBeep(audioCtxRef.current, 880, 0.06, 'square');
    setCrtEnabled((v) => !v);
  }

  function handleToggleAudio() {
    setAudioMuted((v) => {
      const newMuted = !v;
      if (!newMuted) {
        // Play confirmation beep when unmuting
        playBeep(audioCtxRef.current, 660, 0.12, 'square');
      }
      return newMuted;
    });
  }

  return (
    <div className="min-h-screen bg-obsidian text-white overflow-x-hidden">
      {/* Global scanline overlay */}
      <ScanlineOverlay enabled={crtEnabled} />

      {/* Navigation */}
      <Navbar
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
        audioMuted={audioMuted}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Divider */}
        <div className="h-px mx-6 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

        {/* Projects Grid */}
        <ProjectGrid />

        {/* Divider */}
        <div className="h-px mx-6 bg-gradient-to-r from-transparent via-acid-yellow/30 to-transparent" />

        {/* Skill Matrix */}
        <SkillMatrix />

        {/* Divider */}
        <div className="h-px mx-6 bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent" />

        {/* Cyber Terminal */}
        <Terminal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
