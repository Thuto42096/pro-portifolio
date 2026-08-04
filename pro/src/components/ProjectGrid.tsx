import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Network, CheckCircle } from 'lucide-react';
import { PROJECTS, type Project, type ProjectCategory } from '../data/projects';
import { ArchitectureModal } from './ArchitectureModal';

type FilterKey = 'all' | ProjectCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'ALL PROJECTS' },
  { key: 'blockchain', label: 'BLOCKCHAIN / WEB3' },
  { key: 'fullstack', label: 'FULL STACK WEB' },
  { key: 'architecture', label: 'SYS ARCHITECTURE' },
];

const STATUS_COLORS: Record<string, string> = {
  LIVE: '#00ff66',
  BETA: '#ffe600',
  AUDIT: '#00f3ff',
  WIP: '#ff0055',
};

function ProjectCard({ project, onViewArch }: { project: Project; onViewArch: (p: Project) => void }) {
  return (
    <motion.div
      role="article"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group border-2 border-pixel-gray bg-surface hover:border-neon-cyan/60 transition-all duration-300 flex flex-col overflow-hidden"
      style={{
        boxShadow: '0 0 0 transparent',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `4px 4px 0px ${project.networkColor}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent';
      }}
    >
      {/* Card Header */}
      <div className="px-4 pt-4 pb-3 border-b border-pixel-gray/50">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-pixel text-[10px] text-white group-hover:text-neon-cyan transition-colors leading-relaxed">
              {project.title}
            </h3>
            <p className="font-pixel text-[7px] text-gray-500 mt-1">{project.subtitle}</p>
          </div>
          <div
            className="flex-shrink-0 font-pixel text-[7px] px-2 py-1 border"
            style={{ color: STATUS_COLORS[project.status], borderColor: `${STATUS_COLORS[project.status]}60` }}
          >
            {project.status}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-pixel text-[7px] px-2 py-0.5 bg-surface-light border border-pixel-gray/60 text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 py-3 flex-1 flex flex-col gap-3">
        <p className="font-mono text-xs text-gray-400 leading-relaxed">{project.description}</p>

        <div className="space-y-1.5">
          <div className="font-pixel text-[7px] text-gray-600 mb-2">// KEY ACHIEVEMENTS</div>
          {project.achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle
                size={10}
                className="flex-shrink-0 mt-0.5"
                style={{ color: project.networkColor }}
              />
              <span className="font-mono text-[10px] text-gray-400">{ach}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 border-t border-pixel-gray/50 flex items-center gap-2 flex-wrap">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-live-${project.id}`}
            className="flex items-center gap-1 font-pixel text-[7px] px-2 py-1.5 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
          >
            <ExternalLink size={9} />
            LIVE DEMO
          </a>
        )}
        {(project.githubUrl || project.contractUrl) && (
          <a
            href={project.githubUrl || project.contractUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-github-${project.id}`}
            className="flex items-center gap-1 font-pixel text-[7px] px-2 py-1.5 border border-pixel-gray/60 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
          >
            <GitBranch size={9} />
            {project.contractUrl ? 'CONTRACT' : 'GITHUB'}
          </a>
        )}
        <button
          id={`project-arch-${project.id}`}
          onClick={() => onViewArch(project)}
          className="flex items-center gap-1 font-pixel text-[7px] px-2 py-1.5 border transition-colors ml-auto"
          style={{
            borderColor: `${project.networkColor}60`,
            color: project.networkColor,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = `${project.networkColor}15`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
          }}
        >
          <Network size={9} />
          VIEW ARCH
        </button>
      </div>
    </motion.div>
  );
}

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category.includes(activeFilter as ProjectCategory));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="font-pixel text-[8px] text-electric-magenta mb-3">// SECTION 02</div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-2">
            NODE{' '}
            <span className="text-electric-magenta glow-magenta">NETWORK</span>
          </h2>
          <div className="h-px w-48 bg-gradient-to-r from-electric-magenta to-transparent mb-6" />
          <p className="font-mono text-sm text-gray-400 max-w-xl">
            Production-grade Web3 protocols, full-stack applications, and system architectures.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              id={`filter-${f.key}`}
              onClick={() => setActiveFilter(f.key)}
              className={`font-pixel text-[8px] px-3 py-2 border-2 transition-all duration-200 ${
                activeFilter === f.key
                  ? 'border-electric-magenta text-electric-magenta bg-electric-magenta/10 shadow-[3px_3px_0px_#ff0055]'
                  : 'border-pixel-gray text-gray-500 hover:border-gray-400 hover:text-gray-300'
              }`}
            >
              {f.label}
            </button>
          ))}
          <div className="flex items-center ml-auto">
            <span className="font-pixel text-[8px] text-gray-600">
              {filtered.length} NODE{filtered.length !== 1 ? 'S' : ''}
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewArch={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Architecture Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
