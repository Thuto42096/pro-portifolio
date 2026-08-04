export type SkillCategory = 'frontend' | 'backend' | 'web3' | 'devops';

export interface Skill {
  name: string;
  level: number; // 1-10
  icon: string;
}

export interface SkillModule {
  id: SkillCategory;
  title: string;
  subtitle: string;
  color: string;
  borderClass: string;
  shadowClass: string;
  glowClass: string;
  skills: Skill[];
}

export const SKILL_MODULES: SkillModule[] = [
  {
    id: 'frontend',
    title: 'FRONTEND ENGINE',
    subtitle: '// UI & CLIENT SYSTEMS',
    color: '#00f3ff',
    borderClass: 'border-neon-cyan',
    shadowClass: 'shadow-pixel-cyan',
    glowClass: 'glow-cyan',
    skills: [
      { name: 'React', level: 10, icon: '⚛' },
      { name: 'TypeScript', level: 9, icon: '𝓣' },
      { name: 'Next.js', level: 9, icon: '▲' },
      { name: 'Tailwind CSS', level: 10, icon: '🌊' },
      { name: 'Vite', level: 9, icon: '⚡' },
      { name: 'Framer Motion', level: 8, icon: '🎞' },
    ],
  },
  {
    id: 'backend',
    title: 'CORE & BACKEND',
    subtitle: '// SERVER & DATA SYSTEMS',
    color: '#00ff66',
    borderClass: 'border-cyber-green',
    shadowClass: 'shadow-pixel-green',
    glowClass: 'glow-green',
    skills: [
      { name: 'Node.js', level: 9, icon: '🟢' },
      { name: 'Python', level: 8, icon: '🐍' },
      { name: 'PostgreSQL', level: 8, icon: '🐘' },
      { name: 'GraphQL', level: 8, icon: '◈' },
      { name: 'REST APIs', level: 10, icon: '⇄' },
      { name: 'Redis', level: 7, icon: '🔴' },
    ],
  },
  {
    id: 'web3',
    title: 'WEB3 & DECENTRAL',
    subtitle: '// CHAIN SYSTEMS',
    color: '#ff0055',
    borderClass: 'border-electric-magenta',
    shadowClass: 'shadow-pixel-magenta',
    glowClass: 'glow-magenta',
    skills: [
      { name: 'Solidity', level: 9, icon: '◆' },
      { name: 'Foundry', level: 9, icon: '🔨' },
      { name: 'Hardhat', level: 8, icon: '⛑' },
      { name: 'Ethers.js', level: 9, icon: '⟠' },
      { name: 'Web3.js', level: 8, icon: '🕸' },
      { name: 'Smart Contracts', level: 9, icon: '📜' },
    ],
  },
  {
    id: 'devops',
    title: 'DEVOPS & ENV',
    subtitle: '// INFRA SYSTEMS',
    color: '#ffe600',
    borderClass: 'border-acid-yellow',
    shadowClass: 'shadow-pixel-yellow',
    glowClass: 'glow-yellow',
    skills: [
      { name: 'Linux', level: 9, icon: '🐧' },
      { name: 'Docker', level: 8, icon: '🐳' },
      { name: 'Git', level: 10, icon: '🌿' },
      { name: 'CI/CD', level: 8, icon: '⚙' },
      { name: 'GitHub Actions', level: 8, icon: '▶' },
      { name: 'AWS', level: 7, icon: '☁' },
    ],
  },
];
