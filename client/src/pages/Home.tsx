import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalView } from '@/components/terminal/TerminalView';
import { GUIView } from '@/components/gui/GUIView';
import { MatrixBackground } from '@/components/MatrixBackground';
import { ParticleBackground } from '@/components/ParticleBackground';
import type { TerminalTheme } from '@shared/schema';

export default function Home() {
  const [viewMode, setViewMode] = useState<'terminal' | 'gui'>(() => {
    const saved = localStorage.getItem('portfolio-view-mode');
    return (saved as 'terminal' | 'gui') || 'terminal';
  });

  const [theme, setTheme] = useState<TerminalTheme>(() => {
    const saved = localStorage.getItem('portfolio-terminal-theme');
    return (saved as TerminalTheme) || 'neon-green';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-view-mode', viewMode);
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem('portfolio-terminal-theme', theme);
  }, [theme]);

  const switchToGUI = () => setViewMode('gui');
  const switchToTerminal = () => setViewMode('terminal');

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      {viewMode === 'terminal' && <MatrixBackground />}
      {viewMode === 'gui' && <ParticleBackground />}

      {/* View Content */}
      <AnimatePresence mode="wait">
        {viewMode === 'terminal' ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TerminalView
              onSwitchView={switchToGUI}
              theme={theme}
              onThemeChange={setTheme}
            />
          </motion.div>
        ) : (
          <motion.div
            key="gui"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GUIView onSwitchView={switchToTerminal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
