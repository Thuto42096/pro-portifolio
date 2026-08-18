export type ProjectCategory = 'all' | 'blockchain' | 'fullstack' | 'architecture';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  tags: string[];
  description: string;
  achievements: string[];
  liveUrl?: string;
  githubUrl?: string;
  contractUrl?: string;
  architectureDiagram: string;
  status: 'LIVE' | 'BETA' | 'AUDIT' | 'WIP';
  networkColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'fatb',
    title: 'FATB — HERMES AGENT',
    subtitle: 'Autonomous Forex & Crypto Trading Bot',
    category: ['fullstack', 'architecture'],
    tags: ['Python', 'Gemini AI', 'CCXT', 'yfinance', 'Antigravity SDK'],
    description:
      'Modular autonomous trading-signal framework powered by Google Antigravity / Gemini. The Hermes Agent fetches live OHLCV data from Binance (KuCoin fallback) and forex pairs via yfinance, computes technical indicators, and emits structured JSON signals consumed by downstream execution agents.',
    achievements: [
      'Multi-exchange OHLCV ingestion via CCXT — no API key required',
      'Supports BTC/ETH/SOL crypto and forex pairs simultaneously',
      'Structured JSON signal output for downstream execution agents',
      'Modular architecture: data → indicators → Gemini AI → signal',
    ],
    githubUrl: 'https://github.com/Thuto42096/FATB',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│          FATB — HERMES AGENT SYSTEM             │
├─────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐            │
│  │ Binance/CCXT │  │  yfinance    │            │
│  │ (crypto OHLCV│  │ (forex OHLCV)│            │
│  └──────┬───────┘  └──────┬───────┘            │
│         └────────┬─────────┘                   │
│                  ▼                              │
│         Hermes Data Layer                      │
│         crypto_data.py / forex_data.py         │
│                  │                              │
│                  ▼                              │
│         Technical Indicators                   │
│         (RSI, MACD, Bollinger, EMA)            │
│                  │                              │
│                  ▼                              │
│         Gemini AI Signal Engine                │
│         → Structured JSON Output               │
│                  │                              │
│         ┌────────┴────────┐                   │
│         ▼                 ▼                   │
│    Execution Agent    Dashboard API           │
└─────────────────────────────────────────────────┘`,
    status: 'WIP',
    networkColor: '#ffe600',
  },
  {
    id: 'wtc-nft-minter',
    title: 'WTC NFT MINTER',
    subtitle: 'NFT Minting & Staking dApp — Ethereum Sepolia',
    category: ['blockchain', 'fullstack'],
    tags: ['Solidity', 'Hardhat', 'Next.js', 'ERC-721', 'Etherscan'],
    description:
      'Full-stack NFT minting and staking ecosystem on Ethereum Sepolia. Three verified on-chain contracts: WTC_NFT (ERC-721), WTC_Coin (ERC-20 reward token), and StakingVault. Frontend dApp built with Next.js, live on Vercel.',
    achievements: [
      'Three verified contracts on Sepolia Etherscan',
      'WTC_NFT (ERC-721) + WTC_Coin (ERC-20) + StakingVault ecosystem',
      'Frontend dApp live at wtc-nft-minter.vercel.app',
      'Full Hardhat suite: compile, test, deploy, verify scripts',
    ],
    liveUrl: 'https://wtc-nft-minter.vercel.app',
    githubUrl: 'https://github.com/Thuto42096/wtc_nft_minter',
    contractUrl: 'https://sepolia.etherscan.io/address/0xE73A1CA4e89b1afFE6a96d7d5b6D6F8c1669b12D',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│          WTC NFT MINTER ECOSYSTEM               │
├─────────────────────────────────────────────────┤
│  Next.js Frontend dApp                         │
│  (wtc-nft-minter.vercel.app)                   │
│         │                                       │
│         ▼                                       │
│  Ethereum Sepolia Testnet                       │
│  ┌──────────────────────────────────────┐      │
│  │  WTC_NFT (ERC-721)                   │      │
│  │  0xE73A...b12D ✓ Verified            │      │
│  └──────────────┬─────────────────────┘       │
│                 │ mint / stake                  │
│  ┌──────────────▼──────────────────────┐       │
│  │  StakingVault                        │       │
│  │  0x5a74...5bB5 ✓ Verified            │       │
│  └──────────────┬──────────────────────┘       │
│                 │ reward                        │
│  ┌──────────────▼──────────────────────┐       │
│  │  WTC_Coin (ERC-20 reward token)      │       │
│  │  0xfd3e...24cA ✓ Verified            │       │
│  └──────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#ff0055',
  },
  {
    id: 'crypto-raffle',
    title: 'CRYPTO RAFFLE dAPP',
    subtitle: 'ETH Reward Pool — Live on Vercel',
    category: ['blockchain', 'fullstack'],
    tags: ['Solidity', 'JavaScript', 'Ethers.js', 'Hardhat', 'Vercel'],
    description:
      'Decentralised ETH reward pool raffle dApp. Players enter a pool by sending ETH; a smart contract randomly selects a winner and distributes the pooled funds. Live and deployed on Vercel.',
    achievements: [
      'Live at cryptorewardpool.vercel.app',
      'Smart contract handles entry, randomness, and payout on-chain',
      'Permissionless entry — any wallet can participate',
      'Real-time pool balance displayed in the frontend dApp',
    ],
    liveUrl: 'https://cryptorewardpool.vercel.app',
    githubUrl: 'https://github.com/Thuto42096/crypto-raffle-dApp',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│         CRYPTO RAFFLE dAPP SYSTEM              │
├─────────────────────────────────────────────────┤
│  Frontend (JavaScript / Ethers.js)             │
│  cryptorewardpool.vercel.app                   │
│         │                                       │
│         ▼                                       │
│  Raffle.sol Smart Contract                     │
│  ┌───────────────────────────────────┐         │
│  │  enter()   → player pays ETH in  │         │
│  │  pickWinner() → random selection  │         │
│  │  withdraw()  → winner gets pool   │         │
│  └─────────────────┬─────────────────┘         │
│                    │                            │
│         ┌──────────┴───────────┐               │
│         ▼                      ▼               │
│    Players Array         Prize Pool            │
│    (all entrants)        (ETH balance)         │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#00f3ff',
  },
  {
    id: 'p2p-marketplace',
    title: 'P2P MARKETPLACE',
    subtitle: 'Peer-to-Peer Decentralised Marketplace',
    category: ['blockchain', 'fullstack'],
    tags: ['JavaScript', 'Solidity', 'Ethers.js', 'Node.js', 'EVM'],
    description:
      'A peer-to-peer decentralised marketplace dApp where users can list, buy, and sell items directly on-chain without a central authority. Smart contracts handle escrow and trustless settlement between parties.',
    achievements: [
      'Trustless escrow via Solidity smart contract',
      'Decentralised listing and purchase flow — no central authority',
      'Frontend built with vanilla JavaScript and Ethers.js',
      'Dispute resolution logic baked into contract state machine',
    ],
    githubUrl: 'https://github.com/Thuto42096/P2P_Marketplace',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│          P2P MARKETPLACE ARCHITECTURE           │
├─────────────────────────────────────────────────┤
│  Seller                       Buyer             │
│    │                            │               │
│    ▼                            ▼               │
│  list(item, price)        buy(listingId)        │
│         │                       │               │
│         └──────────┬────────────┘               │
│                    ▼                            │
│         Marketplace.sol                        │
│  ┌───────────────────────────────────┐         │
│  │  Listings mapping                │         │
│  │  Escrow logic                    │         │
│  │  confirmDelivery() → release ETH │         │
│  │  dispute() → mediation state     │         │
│  └───────────────────────────────────┘         │
└─────────────────────────────────────────────────┘`,
    status: 'BETA',
    networkColor: '#00ff66',
  },
  {
    id: 'abc-erc721',
    title: 'ABC ERC-721',
    subtitle: 'ERC-721 NFT Contract & Minting dApp',
    category: ['blockchain', 'fullstack'],
    tags: ['Solidity', 'HTML', 'JavaScript', 'ERC-721', 'Hardhat'],
    description:
      'A fully functional ERC-721 NFT minting dApp with on-chain metadata storage. Forked by 2 other developers — a trusted reference implementation for ERC-721 contract patterns and frontend minting integration.',
    achievements: [
      'Forked by 2 other developers as a reference implementation',
      'Complete ERC-721 with minting, ownership, and transfer logic',
      'Frontend minting UI connected via Ethers.js',
      'On-chain metadata URI pattern with tokenURI override',
    ],
    githubUrl: 'https://github.com/Thuto42096/ABC-ERC721',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│            ABC ERC-721 ARCHITECTURE             │
├─────────────────────────────────────────────────┤
│  index.html (Minting UI)                       │
│  Ethers.js ←→ MetaMask wallet                  │
│         │                                       │
│         ▼                                       │
│  ABC_NFT.sol (ERC-721)                         │
│  ┌───────────────────────────────────┐         │
│  │  mint(to, tokenId)               │         │
│  │  tokenURI(tokenId) → metadata    │         │
│  │  ownerOf(tokenId)                │         │
│  │  transferFrom(from, to, id)      │         │
│  │  OpenZeppelin ERC721 base        │         │
│  └───────────────────────────────────┘         │
│                                                 │
│  Hardhat: compile → test → deploy → verify     │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#ff0055',
  },
  {
    id: 'smart-wallet-factory',
    title: 'SMART WALLET FACTORY',
    subtitle: 'On-Chain Smart Wallet Deployer',
    category: ['blockchain', 'architecture'],
    tags: ['Solidity', 'EVM', 'Factory Pattern', 'Hardhat', 'Account Abstraction'],
    description:
      'A Solidity smart wallet factory that deploys individual smart contract wallets for users on-chain. Each wallet is a minimal proxy (EIP-1167 clone pattern) enabling cheap deployment while supporting multi-sig and custom execution logic.',
    achievements: [
      'EIP-1167 minimal proxy clone for cheap per-user wallet deployment',
      'Factory pattern: one contract deploys unlimited smart wallets',
      'Each wallet supports custom execution logic and multi-sig guards',
      'Gas-efficient: clone deployment ~10x cheaper than full deploy',
    ],
    githubUrl: 'https://github.com/Thuto42096/smartWalletFactory',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│       SMART WALLET FACTORY ARCHITECTURE         │
├─────────────────────────────────────────────────┤
│  User calls: factory.createWallet(owner)        │
│         │                                       │
│         ▼                                       │
│  WalletFactory.sol                             │
│  ┌───────────────────────────────────┐         │
│  │  implementation (logic contract)  │         │
│  │  createWallet() →                │         │
│  │    EIP-1167 Clone Deploy          │         │
│  │    init(owner) on clone           │         │
│  │  wallets[user] → address          │         │
│  └──────────────────┬────────────────┘         │
│                     │                           │
│                     ▼                           │
│  SmartWallet.sol (cloned per user)             │
│  ├── execute(to, value, data)                  │
│  ├── executeMulti([calls])                     │
│  └── isOwner(addr) → bool                     │
└─────────────────────────────────────────────────┘`,
    status: 'BETA',
    networkColor: '#ffe600',
  },
  {
    id: 'lnft',
    title: 'LNFT',
    subtitle: 'NFT Project — Solidity & JavaScript',
    category: ['blockchain'],
    tags: ['Solidity', 'JavaScript', 'ERC-721', 'IPFS', 'Ethers.js'],
    description:
      'An NFT project exploring on-chain metadata and IPFS-stored assets. LNFT demonstrates minting workflows, metadata standards, and frontend interaction patterns for NFT collections on EVM chains.',
    achievements: [
      'IPFS-based metadata storage for decentralised NFT assets',
      'Custom minting logic with supply cap enforcement',
      'Frontend minting interface built with vanilla JS and Ethers.js',
      'Demonstrates ERC-721 metadata URI and collection patterns',
    ],
    githubUrl: 'https://github.com/Thuto42096/LNFT',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│             LNFT ARCHITECTURE                   │
├─────────────────────────────────────────────────┤
│  Minting Frontend (JS + Ethers.js)             │
│         │                                       │
│         ▼                                       │
│  LNFT.sol (ERC-721)                            │
│  ├── mint(to) → increments tokenId             │
│  ├── tokenURI → IPFS CID                      │
│  └── maxSupply cap enforced                   │
│                                                 │
│  IPFS Storage                                  │
│  ├── metadata JSON per token                  │
│  │   { name, description, image }             │
│  └── image assets → IPFS CID                 │
└─────────────────────────────────────────────────┘`,
    status: 'BETA',
    networkColor: '#00f3ff',
  },
  {
    id: 'vending-machine',
    title: 'VENDING MACHINE',
    subtitle: 'Simple Vending Machine dApp',
    category: ['blockchain', 'fullstack'],
    tags: ['Solidity', 'JavaScript', 'Ethers.js', 'Hardhat'],
    description:
      'A simple on-chain vending machine dApp — the classic beginner-to-intermediate Solidity project. Users send ETH to purchase virtual items; the contract owner can restock. Clean demonstration of payable functions, state variables, and owner access control.',
    achievements: [
      'Payable Solidity functions for on-chain purchasing',
      'Owner-only restock() with access control modifier',
      'Frontend UI shows live inventory from contract state',
      'Withdraw pattern for safe ETH collection by owner',
    ],
    githubUrl: 'https://github.com/Thuto42096/VendingMachine',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│         VENDING MACHINE dAPP                    │
├─────────────────────────────────────────────────┤
│  Frontend (JavaScript + Ethers.js)             │
│  ├── Show inventory                            │
│  ├── Purchase button → sends ETH              │
│  └── Owner panel → restock                    │
│         │                                       │
│         ▼                                       │
│  VendingMachine.sol                            │
│  ├── inventory: mapping(string → uint)        │
│  ├── purchase(item) payable                   │
│  ├── restock(item, qty) onlyOwner             │
│  └── withdraw() onlyOwner                    │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#00ff66',
  },
  {
    id: 'crypto-lottery',
    title: 'CRYPTO LOTTERY APP',
    subtitle: 'On-Chain Lottery — JavaScript dApp',
    category: ['blockchain', 'fullstack'],
    tags: ['Solidity', 'JavaScript', 'Ethers.js', 'Hardhat', 'EVM'],
    description:
      'A transparent on-chain lottery where participants buy tickets with ETH, and a smart contract randomly selects a winner to receive the prize pool. Trustless, permissionless, and verifiable on-chain.',
    achievements: [
      'Fully on-chain randomness and winner selection',
      'Permissionless ticket purchase — any wallet can enter',
      'Prize pool distributed trustlessly via smart contract',
      'JavaScript frontend shows live ticket count and pool balance',
    ],
    githubUrl: 'https://github.com/Thuto42096/CryptoLotteryApp',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│          CRYPTO LOTTERY SYSTEM                  │
├─────────────────────────────────────────────────┤
│  Frontend (JS + Ethers.js)                     │
│  ├── Buy ticket → sends ETH                   │
│  ├── View players list                        │
│  └── Pick winner (owner only)                 │
│         │                                       │
│         ▼                                       │
│  Lottery.sol                                   │
│  ├── enter() payable → adds msg.sender        │
│  ├── players[]  → entrant addresses            │
│  ├── pickWinner() → pseudo-random select      │
│  │    keccak256(block data + players)          │
│  └── winner receives full balance             │
└─────────────────────────────────────────────────┘`,
    status: 'BETA',
    networkColor: '#ffe600',
  },
  {
    id: 'agent-jorvis',
    title: 'AGENT JORVIS',
    subtitle: 'Personal AI Assistant & Life Coach',
    category: ['fullstack', 'architecture'],
    tags: ['Python', 'Gemini AI', 'Antigravity SDK', 'AI Agent'],
    description:
      'An autonomous personal assistant and life coach built with the Google Antigravity SDK and Gemini AI. Jorvis handles productivity tracking, goal management, and coaching sessions — a deeply personal AI companion engineered from scratch.',
    achievements: [
      'Built on Google Antigravity SDK with Gemini AI reasoning',
      'Autonomous multi-turn conversation with persistent memory',
      'Goal tracking, coaching mode, and daily check-in features',
      'Fully modular Python architecture for easy extensibility',
    ],
    githubUrl: 'https://github.com/Thuto42096/agent-jorvis',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│          AGENT JORVIS ARCHITECTURE              │
├─────────────────────────────────────────────────┤
│  User (CLI / API)                              │
│         │                                       │
│         ▼                                       │
│  Jorvis Agent Core (Antigravity SDK)           │
│         │                                       │
│  ┌──────┴──────┐                               │
│  ▼             ▼                               │
│ Gemini LLM   Memory Store                     │
│ (reasoning)  (conversation history)           │
│         │                                       │
│  ┌──────┴───────────────┐                      │
│  ▼         ▼            ▼                      │
│ Goals   Coaching     Productivity              │
│ Module  Sessions     Tracking                  │
└─────────────────────────────────────────────────┘`,
    status: 'WIP',
    networkColor: '#00ff66',
  },
  {
    id: 'system21',
    title: 'SYSTEM21',
    subtitle: 'Full-Stack Web Application — Live',
    category: ['fullstack'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    description:
      'A full-stack web application built and deployed on Vercel. System21 showcases clean frontend architecture, responsive design, and modern web standards — production-ready and live.',
    achievements: [
      'Live in production at system21.vercel.app',
      'Fully responsive across mobile, tablet, and desktop',
      'Semantic HTML5 with modern CSS layout patterns',
      'Vercel CI/CD: auto-deploy on every push to main',
    ],
    liveUrl: 'https://system21.vercel.app',
    githubUrl: 'https://github.com/Thuto42096/system21',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│              SYSTEM21 ARCHITECTURE              │
├─────────────────────────────────────────────────┤
│  GitHub → Vercel CI/CD pipeline                │
│  Auto-deploy on push to main branch            │
│         │                                       │
│         ▼                                       │
│  Vercel Edge Network (CDN)                     │
│  system21.vercel.app                           │
│         │                                       │
│  ┌──────┴──────┐                               │
│  ▼             ▼                               │
│  HTML/CSS     JavaScript                       │
│  Structure    Interactivity                    │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#00f3ff',
  },
  {
    id: 'mechanic-website',
    title: 'MECHANIC WEBSITE',
    subtitle: 'Business Landing Page',
    category: ['fullstack'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A professional business landing page for a mechanic workshop. Fully responsive, built from scratch with pure HTML, CSS, and JavaScript — no frameworks, fast load times, and a polished mobile experience.',
    achievements: [
      'Zero-dependency: pure HTML/CSS/JS for maximum performance',
      'Fully responsive layout across all screen sizes',
      'Service listing sections with custom CSS animations',
      'Contact form with client-side validation',
    ],
    githubUrl: 'https://github.com/Thuto42096/mechanicWebsite',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│         MECHANIC WEBSITE ARCHITECTURE           │
├─────────────────────────────────────────────────┤
│  index.html                                    │
│  ├── Hero / Header                             │
│  ├── Services Grid                             │
│  ├── About Section                             │
│  ├── Contact Form                             │
│  └── Footer                                   │
│                                                 │
│  styles/ → layout, animations, responsive      │
│  scripts/ → mobile nav, form validation        │
│                                                 │
│  Static hosting (Vercel ready)                 │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#ffe600',
  },
  {
    id: 'my-portfolio',
    title: 'PORTFOLIO V1',
    subtitle: 'Original Developer Portfolio — Live',
    category: ['fullstack'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    description:
      'The original portfolio — Thuto v1. Built entirely with vanilla HTML, CSS, and JavaScript. Live at thuto-r.vercel.app. The predecessor to this cyberpunk portfolio you\'re looking at right now.',
    achievements: [
      'Live at thuto-r.vercel.app',
      'Built with zero frameworks — pure HTML/CSS/JS',
      'Smooth scroll, mobile nav, and section reveal animations',
      'Deployed on Vercel with CI/CD on push',
    ],
    liveUrl: 'https://thuto-r.vercel.app',
    githubUrl: 'https://github.com/Thuto42096/my-portfolio',
    architectureDiagram: `
┌─────────────────────────────────────────────────┐
│          PORTFOLIO V1 ARCHITECTURE              │
├─────────────────────────────────────────────────┤
│  Vanilla Stack (zero frameworks)               │
│                                                 │
│  index.html                                    │
│  ├── Hero section                              │
│  ├── Projects showcase                         │
│  ├── Skills section                            │
│  └── Contact section                          │
│                                                 │
│  style.css                                     │
│  ├── CSS custom properties                     │
│  ├── Flexbox / Grid layouts                   │
│  └── CSS scroll animations                   │
│                                                 │
│  Deployed: Vercel (thuto-r.vercel.app)         │
└─────────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#ff0055',
  },
];
