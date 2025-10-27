import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { Monitor, Minus, Square, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { TerminalTheme } from '@shared/schema';
import { TerminalOutput } from './TerminalOutput';
import { useTerminalCommands } from '@/hooks/useTerminalCommands';

interface TerminalViewProps {
  onSwitchView: () => void;
  theme: TerminalTheme;
  onThemeChange: (theme: TerminalTheme) => void;
}

export function TerminalView({ onSwitchView, theme, onThemeChange }: TerminalViewProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<Array<{ command: string; response: any; timestamp: Date }>>([]);
  const [uptime, setUptime] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const { executeCommand, getAutocompleteSuggestions } = useTerminalCommands(theme, onThemeChange);

  useEffect(() => {
    const timer = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCommand = async () => {
    const cmd = input.trim();
    if (!cmd) return;

    const response = await executeCommand(cmd);
    
    setOutput(prev => [...prev, { command: cmd, response, timestamp: new Date() }]);
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');

    if (cmd === 'clear') {
      setTimeout(() => setOutput([]), 50);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const suggestions = getAutocompleteSuggestions(input);
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
      } else if (suggestions.length > 1) {
        setOutput(prev => [...prev, {
          command: input,
          response: { type: 'list', content: suggestions },
          timestamp: new Date()
        }]);
      }
    }
  };

  const themeClasses = {
    'neon-green': 'bg-black text-green-400',
    'matrix-blue': 'bg-gray-900 text-blue-400',
    'amber-crt': 'bg-gray-900 text-amber-400',
  };

  const themeGlow = {
    'neon-green': 'shadow-[0_0_10px_rgba(34,197,94,0.3)]',
    'matrix-blue': 'shadow-[0_0_10px_rgba(59,130,246,0.3)]',
    'amber-crt': 'shadow-[0_0_10px_rgba(251,191,36,0.3)]',
  };

  return (
    <div className={`min-h-screen ${themeClasses[theme]} font-mono p-4 md:p-8 flex items-center justify-center`}>
      <div className={`w-full max-w-5xl ${themeGlow[theme]} rounded-lg overflow-hidden`}>
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            <span className="text-sm text-gray-300">akhilb@portfolio:~</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-200" data-testid="button-terminal-minimize">
              <Minus className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-200" data-testid="button-terminal-maximize">
              <Square className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-red-400" data-testid="button-terminal-close">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800/50 px-4 py-1 flex items-center justify-between text-xs border-b border-gray-700">
          <div className="flex items-center gap-4">
            <span>Uptime: {formatUptime(uptime)}</span>
            <span>Memory: {Math.floor(Math.random() * 20 + 60)}%</span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={onSwitchView}
            className="text-xs hover-elevate"
            data-testid="button-switch-to-gui"
          >
            Switch to Simple View <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>

        {/* Terminal Output */}
        <div
          ref={outputRef}
          className="h-[60vh] md:h-[65vh] overflow-y-auto p-4 space-y-2 scroll-smooth"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="mb-4">
            <p className="text-sm opacity-70">Welcome to Akhil B's Portfolio Terminal v1.0</p>
            <p className="text-sm opacity-70">Type 'help' to see available commands</p>
          </div>
          
          <TerminalOutput output={output} theme={theme} />
        </div>

        {/* Terminal Input */}
        <div className="border-t border-gray-700 p-4 flex items-center gap-2">
          <span className="text-sm">akhilb@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-sm"
            placeholder="Type a command..."
            autoFocus
            data-testid="input-terminal-command"
          />
          <span className="animate-cursor-blink">▊</span>
        </div>
      </div>
    </div>
  );
}
