import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_MODULES, type SkillModule } from '../data/skills';

function BatteryBar({ level, color }: { level: number; color: string }) {
  const totalSegments = 10;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalSegments }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: i * 0.05 }}
          className="battery-segment"
          style={{
            backgroundColor: i < level ? color : 'transparent',
            borderColor: i < level ? color : 'rgba(255,255,255,0.1)',
            boxShadow: i < level ? `0 0 4px ${color}80` : 'none',
          }}
        />
      ))}
      <span
        className="font-pixel text-[7px] ml-1"
        style={{ color: color }}
      >
        {level}/10
      </span>
    </div>
  );
}

function SkillModuleCard({ module, isActive, onClick }: {
  module: SkillModule;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className={`border-2 bg-surface cursor-pointer transition-all duration-300 overflow-hidden ${
        isActive ? module.borderClass : 'border-pixel-gray hover:border-pixel-gray/80'
      }`}
      style={{
        boxShadow: isActive ? `4px 4px 0px ${module.color}` : '0 0 0 transparent',
      }}
    >
      {/* Module Header */}
      <div
        className="px-4 py-3 border-b border-pixel-gray/50 flex items-center justify-between"
        style={{ backgroundColor: isActive ? `${module.color}10` : 'transparent' }}
      >
        <div>
          <div className="font-pixel text-[7px] text-gray-500 mb-1">{module.subtitle}</div>
          <h3 className="font-pixel text-[10px]" style={{ color: module.color }}>
            {module.title}
          </h3>
        </div>
        <div
          className="font-pixel text-[8px] px-2 py-1 border"
          style={{ color: module.color, borderColor: `${module.color}40` }}
        >
          {module.skills.length} SKILLS
        </div>
      </div>

      {/* Skills list */}
      <motion.div
        initial={false}
        animate={{ height: isActive ? 'auto' : '120px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-4 py-3 space-y-3">
          {module.skills.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm flex-shrink-0">{skill.icon}</span>
                <span className="font-pixel text-[8px] text-gray-300 truncate">{skill.name}</span>
              </div>
              <div className="flex-shrink-0">
                <BatteryBar level={skill.level} color={module.color} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expand hint */}
      {!isActive && (
        <div className="px-4 pb-3">
          <div className="font-pixel text-[7px] text-gray-600">
            + {module.skills.length - 2} MORE // CLICK TO EXPAND
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function SkillMatrix() {
  const [activeModule, setActiveModule] = useState<string | null>('frontend');

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative bg-surface/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="font-pixel text-[8px] text-acid-yellow mb-3">// SECTION 03</div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-2">
            SKILL{' '}
            <span className="text-acid-yellow glow-yellow">MATRIX</span>
          </h2>
          <div className="h-px w-48 bg-gradient-to-r from-acid-yellow to-transparent mb-6" />
          <p className="font-mono text-sm text-gray-400 max-w-xl">
            Tech stack power-ups organized by domain. Mastery levels measured in battle-tested production systems.
          </p>
        </motion.div>

        {/* Inventory Slot Module Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_MODULES.map((mod) => (
            <button
              key={mod.id}
              id={`skill-tab-${mod.id}`}
              onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
              className="font-pixel text-[8px] px-3 py-2 border-2 transition-all duration-200"
              style={{
                borderColor: activeModule === mod.id ? mod.color : 'rgba(255,255,255,0.1)',
                color: activeModule === mod.id ? mod.color : '#6b7280',
                backgroundColor: activeModule === mod.id ? `${mod.color}10` : 'transparent',
                boxShadow: activeModule === mod.id ? `2px 2px 0px ${mod.color}` : 'none',
              }}
            >
              {mod.title}
            </button>
          ))}
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_MODULES.map((mod) => (
            <SkillModuleCard
              key={mod.id}
              module={mod}
              isActive={activeModule === mod.id}
              onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
            />
          ))}
        </div>

        {/* Overall mastery summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 border-2 border-acid-yellow/20 bg-surface p-5"
        >
          <div className="font-pixel text-[8px] text-acid-yellow/60 mb-4">// OVERALL SYSTEM PROFICIENCY</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SKILL_MODULES.map((mod) => {
              const avg = Math.round(mod.skills.reduce((s, sk) => s + sk.level, 0) / mod.skills.length * 10);
              return (
                <div key={mod.id} className="text-center">
                  <div
                    className="font-pixel text-2xl mb-1"
                    style={{ color: mod.color }}
                  >
                    {avg}%
                  </div>
                  <div className="font-pixel text-[7px] text-gray-500">{mod.id.toUpperCase()}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
