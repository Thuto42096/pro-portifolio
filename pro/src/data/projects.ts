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
    id: 'defi-vault',
    title: 'YIELD VAULT PROTOCOL',
    subtitle: 'DeFi Yield Aggregator',
    category: ['blockchain', 'architecture'],
    tags: ['Solidity', 'Foundry', 'EVM', 'Ethers.js', 'React'],
    description:
      'A non-custodial yield aggregation protocol that routes assets across Aave, Compound, and Curve to maximize APY. Implements ERC-4626 vault standard with custom rebalancing logic and emergency withdrawal mechanisms.',
    achievements: [
      'TVL capacity tested to $2M in simulated environments',
      'Gas optimized: avg 45k gas per deposit via assembly tricks',
      '100% test coverage via Foundry fuzzing (50k runs)',
      'Reentrancy-safe via checks-effects-interactions + ReentrancyGuard',
    ],
    githubUrl: 'https://github.com/thutor',
    contractUrl: 'https://github.com/thutor',
    architectureDiagram: `
┌─────────────────────────────────────────────┐
│           YIELD VAULT PROTOCOL               │
├─────────────────────────────────────────────┤
│  User ──► VaultProxy (ERC-4626)             │
│              │                               │
│              ▼                               │
│       StrategyRouter                        │
│      ┌──────┼──────┐                        │
│      ▼      ▼      ▼                        │
│   Aave   Compound  Curve                    │
│   Strategy Strategy Strategy                │
│      └──────┼──────┘                        │
│             ▼                               │
│      Rebalancer (Keeper)                    │
│             │                               │
│             ▼                               │
│       Oracle (Chainlink)                    │
└─────────────────────────────────────────────┘`,
    status: 'AUDIT',
    networkColor: '#00f3ff',
  },
  {
    id: 'nft-marketplace',
    title: 'PIXELCHAIN MARKET',
    subtitle: 'NFT Marketplace & Launchpad',
    category: ['blockchain', 'fullstack'],
    tags: ['Solidity', 'Next.js', 'TypeScript', 'IPFS', 'Hardhat'],
    description:
      'Full-stack NFT marketplace with on-chain royalties (EIP-2981), lazy minting, auction mechanics, and IPFS-pinned metadata. Frontend built with Next.js App Router and real-time event subscriptions.',
    achievements: [
      '0% platform fee until $100k volume via incentive contract',
      'Lazy mint reduces creator gas by ~80% vs eager mint',
      'Sub-100ms UI updates via WebSocket event subscriptions',
      'IPFS CID pinning with Pinata fallback redundancy',
    ],
    liveUrl: 'https://github.com/thutor',
    githubUrl: 'https://github.com/thutor',
    architectureDiagram: `
┌─────────────────────────────────────────────┐
│          PIXELCHAIN MARKETPLACE             │
├─────────────────────────────────────────────┤
│  Creator ──► LazyMint ──► IPFS (Pinata)    │
│                │                            │
│                ▼                            │
│         MarketplaceV2.sol                  │
│         (EIP-2981 Royalties)               │
│                │                            │
│    ┌───────────┼───────────┐               │
│    ▼           ▼           ▼               │
│  List()    Bid/Buy()  Settle()             │
│                │                            │
│                ▼                            │
│    Next.js Frontend (App Router)           │
│    WebSocket ──► Event Indexer             │
└─────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#ff0055',
  },
  {
    id: 'dao-governance',
    title: 'ONCHAIN DAO',
    subtitle: 'Governance & Treasury System',
    category: ['blockchain', 'architecture'],
    tags: ['Solidity', 'OpenZeppelin', 'Foundry', 'Ethers.js', 'Tailwind'],
    description:
      'Token-weighted on-chain governance system with timelocked execution, delegate voting, and multi-sig treasury. Built on OpenZeppelin Governor framework with custom modules for quadratic voting and conviction scoring.',
    achievements: [
      '72h timelock on all treasury executions for safety',
      'Quadratic voting module prevents whale dominance',
      'Conviction scoring boosts long-term holders\' influence',
      'Gas-subsidized voting for micro-holders (<100 tokens)',
    ],
    githubUrl: 'https://github.com/thutor',
    contractUrl: 'https://github.com/thutor',
    architectureDiagram: `
┌─────────────────────────────────────────────┐
│            ONCHAIN DAO SYSTEM               │
├─────────────────────────────────────────────┤
│  Token (ERC-20 + Votes)                    │
│       │                                     │
│       ▼                                     │
│  Governor.sol ──► Proposal CRUD            │
│       │                                     │
│  ┌────┴────┐                               │
│  ▼         ▼                               │
│ Quorum  QuadraticVote                      │
│  Module   Module                           │
│       │                                     │
│       ▼                                     │
│  TimelockController (72h)                  │
│       │                                     │
│       ▼                                     │
│  Treasury MultiSig (3/5)                   │
└─────────────────────────────────────────────┘`,
    status: 'BETA',
    networkColor: '#ffe600',
  },
  {
    id: 'defi-analytics',
    title: 'CHAIN LENS',
    subtitle: 'DeFi Analytics Dashboard',
    category: ['fullstack', 'blockchain'],
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Node.js'],
    description:
      'Real-time DeFi analytics platform aggregating on-chain data from multiple protocols. Tracks TVL, APY fluctuations, liquidation risk metrics, and wallet health scores across EVM chains.',
    achievements: [
      'Ingests 50k+ events/day from The Graph subgraphs',
      'WebSocket streams deliver data with <200ms latency',
      'PostgreSQL time-series with hypertable partitioning',
      'Wallet health score algorithm with 94% liquidation prediction accuracy',
    ],
    liveUrl: 'https://github.com/thutor',
    githubUrl: 'https://github.com/thutor',
    architectureDiagram: `
┌─────────────────────────────────────────────┐
│           CHAIN LENS PLATFORM               │
├─────────────────────────────────────────────┤
│  Indexer (Node.js) ──► The Graph           │
│       │                                     │
│       ▼                                     │
│  PostgreSQL (TimescaleDB)                  │
│  Hypertable: events, prices, positions     │
│       │                                     │
│  GraphQL API (Apollo Server)               │
│       │                                     │
│  ┌────┴────┐                               │
│  ▼         ▼                               │
│  REST    WebSocket                         │
│  API     Streams                           │
│       │                                     │
│  Next.js Dashboard (App Router)            │
│  Recharts + Custom D3 Visualizations       │
└─────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#00ff66',
  },
  {
    id: 'cross-chain-bridge',
    title: 'WARP BRIDGE',
    subtitle: 'Cross-Chain Asset Bridge',
    category: ['blockchain', 'architecture'],
    tags: ['Solidity', 'LayerZero', 'Foundry', 'TypeScript', 'Redis'],
    description:
      'Trustless cross-chain bridge using LayerZero messaging protocol. Supports ERC-20 token bridging between Ethereum, Arbitrum, and Polygon with optimistic verification and fraud proof windows.',
    achievements: [
      'Avg bridge time: 4.2 minutes (Ethereum → Arbitrum)',
      'Fraud proof window: 1h with slashing penalties',
      'Liquidity pool model eliminates bridge lock-up latency',
      'Message replay protection via nonce + chain ID binding',
    ],
    githubUrl: 'https://github.com/thutor',
    contractUrl: 'https://github.com/thutor',
    architectureDiagram: `
┌─────────────────────────────────────────────┐
│            WARP BRIDGE PROTOCOL             │
├─────────────────────────────────────────────┤
│  Source Chain (ETH)                        │
│  User ──► BridgeLock.sol                  │
│              │                              │
│              ▼                              │
│       LayerZero Endpoint                  │
│              │ (Cross-chain message)        │
│              ▼                              │
│       Destination Chain (ARB)              │
│       BridgeMint.sol                       │
│              │                              │
│    ┌─────────┴─────────┐                  │
│    ▼                   ▼                  │
│  Optimistic          Fraud                │
│  Verifier            Proof Window         │
│                   (Relayer Network)        │
└─────────────────────────────────────────────┘`,
    status: 'BETA',
    networkColor: '#00f3ff',
  },
  {
    id: 'realtime-collab',
    title: 'SYNC STUDIO',
    subtitle: 'Real-Time Collaboration Platform',
    category: ['fullstack', 'architecture'],
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis'],
    description:
      'Low-latency real-time collaboration platform with operational transform conflict resolution, presence indicators, and version history. Handles 500+ concurrent users per room with Redis pub/sub fan-out.',
    achievements: [
      '< 50ms round-trip latency on same-region connections',
      'OT algorithm resolves concurrent edits without data loss',
      'Redis pub/sub handles 500 concurrent editors per room',
      'Automatic reconnect with offline queue replay',
    ],
    liveUrl: 'https://github.com/thutor',
    githubUrl: 'https://github.com/thutor',
    architectureDiagram: `
┌─────────────────────────────────────────────┐
│           SYNC STUDIO PLATFORM              │
├─────────────────────────────────────────────┤
│  React Client ──► WebSocket (Socket.IO)    │
│                        │                   │
│                        ▼                   │
│               Node.js WS Server            │
│                        │                   │
│            ┌───────────┼──────────┐        │
│            ▼           ▼          ▼        │
│         Redis       Postgres    OT Engine  │
│        Pub/Sub      (History)  (Conflicts) │
│            │                               │
│            ▼                               │
│     Room Fan-out ──► All Connected Clients │
└─────────────────────────────────────────────┘`,
    status: 'LIVE',
    networkColor: '#ff0055',
  },
];
