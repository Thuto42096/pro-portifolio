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
      // TypeScript (11 repos) and JavaScript (12 repos) are top languages
      { name: 'JavaScript', level: 9, icon: 'JS' },
      { name: 'TypeScript', level: 8, icon: 'TS' },
      { name: 'React', level: 8, icon: '⚛' },
      { name: 'Next.js', level: 7, icon: '▲' },
      { name: 'HTML / CSS', level: 9, icon: '</>' },
      { name: 'Tailwind CSS', level: 7, icon: '~' },
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
      // Python (9 repos) — FATB, agent-jorvis, my-first-agent etc.
      { name: 'Python', level: 8, icon: 'Py' },
      { name: 'Node.js', level: 7, icon: '▶' },
      { name: 'REST APIs', level: 8, icon: '⇄' },
      { name: 'Google Gemini AI', level: 7, icon: '✦' },
      { name: 'Antigravity SDK', level: 7, icon: '◈' },
      { name: 'Java', level: 5, icon: '◇' },
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
      // Real: WTC NFT, Raffle, Lottery, P2P, ABC-ERC721, VendingMachine, smartWalletFactory
      { name: 'Solidity', level: 8, icon: '◆' },
      { name: 'Hardhat', level: 8, icon: '⛑' },
      { name: 'Ethers.js', level: 8, icon: '⟠' },
      { name: 'ERC-721 / ERC-20', level: 8, icon: '◎' },
      { name: 'Smart Contracts', level: 8, icon: '◆' },
      { name: 'dApp Development', level: 7, icon: '▣' },
    ],
  },
  {
    id: 'devops',
    title: 'TOOLS & DEVOPS',
    subtitle: '// INFRA & WORKFLOW',
    color: '#ffe600',
    borderClass: 'border-acid-yellow',
    shadowClass: 'shadow-pixel-yellow',
    glowClass: 'glow-yellow',
    skills: [
      // 9 Vercel deployments, GitHub (54 repos), Git heavy usage
      { name: 'Git / GitHub', level: 9, icon: '⎇' },
      { name: 'Vercel', level: 9, icon: '▲' },
      { name: 'Vite', level: 8, icon: '◉' },
      { name: 'npm / pip', level: 8, icon: '■' },
      { name: 'Linux', level: 7, icon: '$_' },
      { name: 'C#', level: 4, icon: '◈' },
    ],
  },
];
