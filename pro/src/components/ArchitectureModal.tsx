import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GitBranch } from 'lucide-react';
import type { Project } from '../data/projects';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm"
            aria-label="Close modal"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} Architecture`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-2xl border-2 bg-surface overflow-hidden"
              style={{
                borderColor: project.networkColor,
                boxShadow: `6px 6px 0px ${project.networkColor}`,
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b"
                style={{ borderColor: `${project.networkColor}40` }}
              >
                <div>
                  <div className="font-pixel text-[9px] text-gray-400">// ARCHITECTURE DIAGRAM</div>
                  <div className="font-pixel text-xs mt-1" style={{ color: project.networkColor }}>
                    {project.title}
                  </div>
                </div>
                <button
                  id={`modal-close-${project.id}`}
                  onClick={onClose}
                  className="p-1.5 border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close architecture modal"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Diagram */}
              <div className="p-5">
                <pre
                  className="font-mono text-[11px] leading-relaxed overflow-x-auto"
                  style={{ color: project.networkColor }}
                >
                  {project.architectureDiagram}
                </pre>
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 border-t flex items-center justify-between"
                style={{ borderColor: `${project.networkColor}40` }}
              >
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-pixel text-[7px] px-2 py-1 border"
                      style={{ borderColor: `${project.networkColor}60`, color: project.networkColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-pixel text-[8px] text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={10} />
                    GITHUB
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
