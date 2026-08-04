import { useRef, useEffect, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import { useTerminal } from '../hooks/useTerminal';

const LINE_COLORS: Record<string, string> = {
  input: '#00f3ff',
  output: '#e0e0e0',
  error: '#ff0055',
  success: '#00ff66',
  system: '#ffe600',
};

export function Terminal() {
  const { history, inputValue, setInputValue, submitCommand, navigateHistory } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      submitCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    }
  }

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-pixel text-[8px] text-cyber-green mb-3">// SECTION 04</div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-2">
            CYBER{' '}
            <span className="text-cyber-green glow-green">TERMINAL</span>
          </h2>
          <div className="h-px w-48 bg-gradient-to-r from-cyber-green to-transparent mb-4" />
          <p className="font-mono text-sm text-gray-400">
            Interactive shell. Type{' '}
            <code className="font-mono text-neon-cyan bg-surface px-1 py-0.5">help</code>{' '}
            to get started.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-2 border-cyber-green/40 bg-obsidian overflow-hidden"
          style={{ boxShadow: '6px 6px 0px #00ff66' }}
          onClick={focusInput}
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-cyber-green/20 bg-surface">
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-electric-magenta" />
                <div className="w-2.5 h-2.5 rounded-full bg-acid-yellow" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyber-green" />
              </div>
              <div className="flex items-center gap-2">
                <TerminalIcon size={11} className="text-cyber-green" />
                <span className="font-pixel text-[8px] text-cyber-green">
                  thuto@eth:~$
                </span>
              </div>
            </div>
            <div className="font-pixel text-[7px] text-gray-600">BASH v5.2 // WEB3 SHELL</div>
          </div>

          {/* Stdout Window */}
          <div
            className="h-80 sm:h-96 overflow-y-auto p-4 font-mono text-[11px] leading-relaxed cursor-text space-y-0.5"
            style={{ scrollbarWidth: 'thin' }}
          >
            {history.map((line) => (
              <div
                key={line.id}
                style={{ color: LINE_COLORS[line.type] || '#e0e0e0' }}
                className="whitespace-pre-wrap break-words leading-relaxed"
              >
                {line.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Row */}
          <div className="border-t border-cyber-green/20 bg-surface/50 px-4 py-3 flex items-center gap-2">
            <ChevronRight size={12} className="text-neon-cyan flex-shrink-0" />
            <span className="font-mono text-[11px] text-neon-cyan flex-shrink-0">
              root@thuto.eth:~${' '}
            </span>
            <input
              ref={inputRef}
              id="terminal-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              className="flex-1 bg-transparent outline-none font-mono text-[11px] text-white caret-neon-cyan min-w-0"
              placeholder="enter command..."
              aria-label="Terminal input"
            />
            <span className="terminal-cursor" />
          </div>
        </motion.div>

        {/* Quick command chips */}
        <div className="flex flex-wrap gap-2 mt-5">
          <span className="font-pixel text-[7px] text-gray-600 self-center">QUICK CMDS:</span>
          {['help', 'skills', 'projects', 'contact', 'whoami', 'sudo reward'].map((cmd) => (
            <button
              key={cmd}
              id={`quick-cmd-${cmd.replace(' ', '-')}`}
              onClick={() => {
                setInputValue(cmd);
                setTimeout(() => submitCommand(cmd), 50);
              }}
              className="font-pixel text-[7px] px-2 py-1 border border-cyber-green/30 text-cyber-green/70 hover:text-cyber-green hover:border-cyber-green hover:bg-cyber-green/5 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
