import { useState } from 'react';
import confetti from 'canvas-confetti';
import { PROJECTS } from '../data/projects';

export interface TerminalLine {
  id: number;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
  content: string;
}

const HELP_TEXT = `
┌─────────────────────────────────────────────────┐
│           THUTO.ETH // COMMAND REFERENCE        │
├─────────────────────────────────────────────────┤
│  help       → Display this command list         │
│  skills     → Print ASCII skill report          │
│  projects   → List all built applications       │
│  contact    → Reveal contact handles & socials  │
│  whoami     → System identity report            │
│  sudo reward→ ??? (classified)                  │
│  clear      → Clear terminal stdout             │
└─────────────────────────────────────────────────┘`;

const SKILLS_TEXT = `
╔═══════════════════════════════════════════════╗
║           SKILL MATRIX // ASCII REPORT        ║
╠═══════════════════════════════════════════════╣
║  FRONTEND ENGINE                              ║
║  JavaScript    █████████·   9/10              ║
║  TypeScript    ████████··   8/10              ║
║  React         ████████··   8/10              ║
║  HTML / CSS    █████████·   9/10              ║
╠═══════════════════════════════════════════════╣
║  WEB3 & DECENTRALIZED                         ║
║  Solidity      ████████··   8/10              ║
║  Hardhat       ████████··   8/10              ║
║  Ethers.js     ████████··   8/10              ║
║  ERC-721/20    ████████··   8/10              ║
╠═══════════════════════════════════════════════╣
║  CORE & BACKEND                               ║
║  Python        ████████··   8/10              ║
║  Node.js       ███████···   7/10              ║
║  Gemini AI     ███████···   7/10              ║
║  REST APIs     ████████··   8/10              ║
╠═══════════════════════════════════════════════╣
║  TOOLS & DEVOPS                               ║
║  Git / GitHub  █████████·   9/10              ║
║  Vercel        █████████·   9/10              ║
║  Vite          ████████··   8/10              ║
║  Linux         ███████···   7/10              ║
╚═══════════════════════════════════════════════╝
║  GITHUB STATS  → 54 repos · 9 live deploys    ║
║  LANGUAGES     → JS, TS, Python, HTML, CSS    ║
║                  Solidity, Java, C#           ║
╚═══════════════════════════════════════════════╝`;

const CONTACT_TEXT = `
╔═══════════════════════════════════════════════╗
║       CONTACT // SECURE CHANNEL OPEN          ║
╠═══════════════════════════════════════════════╣
║  EMAIL    → thuto42096@gmail.com              ║
║  GITHUB   → github.com/Thuto42096             ║
║  PORTFOLIO→ thutopro.vercel.app               ║
║                                               ║
╠═══════════════════════════════════════════════╣
║  STATUS   → [OPEN TO OPPORTUNITIES]           ║
║  TIMEZONE → Africa/Johannesburg (UTC+2)       ║
╚═══════════════════════════════════════════════╝`;

const WHOAMI_TEXT = `
╔═══════════════════════════════════════════════╗
║          SYSTEM IDENTITY REPORT               ║
╠═══════════════════════════════════════════════╣
║  USER     → Thuto Ratlhahane (Thuto_R)        ║
║  GITHUB   → github.com/Thuto42096             ║
║  ROLE     → Junior Dev @ ABC                  ║
║             Africa's Blockchain Club          ║
║  BIO      → Problem solver. LifeLong Learner. ║
║  REPOS    → 54 public (47 original)           ║
║  DEPLOYS  → 9 live on Vercel                  ║
║  STACK    → JS/TS · Python · Solidity         ║
║  LOCATION → South Africa [ZA]                   ║
║  ON CHAIN → Since April 2024                  ║
║  UPTIME   → ${new Date().getFullYear() - 2024}+ years of building              ║
╚═══════════════════════════════════════════════╝`;

function processCommand(cmd: string): { lines: TerminalLine[]; shouldClear?: boolean } {
  const trimmed = cmd.trim().toLowerCase();
  const nextId = () => Date.now() + Math.random();

  const inputLine: TerminalLine = {
    id: nextId(),
    type: 'input',
    content: `root@thuto.eth:~$ ${cmd}`,
  };

  switch (trimmed) {
    case 'help':
      return {
        lines: [
          inputLine,
          { id: nextId(), type: 'output', content: HELP_TEXT },
        ],
      };

    case 'skills':
      return {
        lines: [
          inputLine,
          { id: nextId(), type: 'success', content: SKILLS_TEXT },
        ],
      };

    case 'projects':
      return {
        lines: [
          inputLine,
          {
            id: nextId(),
            type: 'output',
            content: `\n[ PROJECT MANIFEST // ${PROJECTS.length} NODES FOUND ]\n`,
          },
          ...PROJECTS.map((p) => ({
            id: nextId(),
            type: 'output' as const,
            content: `  ► [${p.status}] ${p.title} — ${p.subtitle}\n     Tags: ${p.tags.join(', ')}\n     GitHub: ${p.githubUrl || 'N/A'}${p.liveUrl ? '\n     Live:   ' + p.liveUrl : ''}\n`,
          })),
        ],
      };

    case 'contact':
      return {
        lines: [
          inputLine,
          { id: nextId(), type: 'success', content: CONTACT_TEXT },
        ],
      };

    case 'whoami':
      return {
        lines: [
          inputLine,
          { id: nextId(), type: 'output', content: WHOAMI_TEXT },
        ],
      };

    case 'sudo reward': {
      const colors = ['#00f3ff', '#ff0055', '#ffe600', '#00ff66'];
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors,
        shapes: ['square'],
        scalar: 1.2,
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
          shapes: ['square'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
          shapes: ['square'],
        });
      }, 300);
      return {
        lines: [
          inputLine,
          {
            id: nextId(),
            type: 'success',
            content: '\n  [SUDO ACCESS GRANTED]\n  >> INITIATING PIXEL REWARD PROTOCOL...\n  >> ACHIEVEMENT UNLOCKED: "Easter Egg Hunter"\n',
          },
        ],
      };
    }

    case 'clear':
      return { lines: [], shouldClear: true };

    case '':
      return { lines: [inputLine] };

    default:
      return {
        lines: [
          inputLine,
          {
            id: nextId(),
            type: 'error',
            content: `  bash: ${cmd}: command not found. Type 'help' for available commands.`,
          },
        ],
      };
  }
}

const BOOT_LINES: TerminalLine[] = [
  { id: 1, type: 'system', content: '╔══════════════════════════════════════════════════╗' },
  { id: 2, type: 'system', content: '║    THUTO.ETH COMMAND TERMINAL v2.6.0             ║' },
  { id: 3, type: 'system', content: '║                    WEB3 COMMAND CENTER           ║' },
  { id: 4, type: 'system', content: '╚══════════════════════════════════════════════════╝' },
  { id: 5, type: 'system', content: '' },
  { id: 6, type: 'success', content: '  [OK] Chain connection: ESTABLISHED' },
  { id: 7, type: 'success', content: '  [OK] RPC endpoint: ACTIVE (EVM | SOL | NODE)' },
  { id: 8, type: 'success', content: '  [OK] Identity verified: thuto.eth' },
  { id: 9, type: 'system', content: '' },
  { id: 10, type: 'output', content: "  Type 'help' to list available commands." },
  { id: 11, type: 'system', content: '' },
];

export function useTerminal() {
  const [history, setHistory] = useState<TerminalLine[]>(BOOT_LINES);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  function submitCommand(cmd: string) {
    if (!cmd.trim()) {
      setHistory((prev) => [
        ...prev,
        { id: Date.now(), type: 'input', content: 'root@thuto.eth:~$ ' },
      ]);
      return;
    }

    const { lines, shouldClear } = processCommand(cmd);

    setCommandHistory((prev) => [cmd, ...prev.slice(0, 49)]);
    setHistoryIndex(-1);
    setInputValue('');

    if (shouldClear) {
      setHistory([...BOOT_LINES]);
    } else {
      setHistory((prev) => [...prev, ...lines]);
    }
  }

  function navigateHistory(direction: 'up' | 'down') {
    if (direction === 'up') {
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setInputValue(commandHistory[newIndex] ?? '');
    } else {
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInputValue(newIndex === -1 ? '' : commandHistory[newIndex]);
    }
  }

  return { history, inputValue, setInputValue, submitCommand, navigateHistory };
}
