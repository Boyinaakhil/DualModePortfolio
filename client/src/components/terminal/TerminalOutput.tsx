import type { TerminalTheme } from '@shared/schema';
import { File, Folder, FileText } from 'lucide-react';

interface OutputItem {
  command: string;
  response: any;
  timestamp: Date;
}

interface TerminalOutputProps {
  output: OutputItem[];
  theme: TerminalTheme;
}

export function TerminalOutput({ output, theme }: TerminalOutputProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  const renderResponse = (response: any) => {
    if (!response) return null;

    if (response.type === 'text') {
      return <pre className="whitespace-pre-wrap text-sm leading-relaxed">{response.content}</pre>;
    }

    if (response.type === 'list') {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-2">
          {response.content.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              {item.type === 'file' && <File className="w-4 h-4" />}
              {item.type === 'folder' && <Folder className="w-4 h-4" />}
              {!item.type && <FileText className="w-4 h-4" />}
              <span>{item.name || item}</span>
            </div>
          ))}
        </div>
      );
    }

    if (response.type === 'ascii-art') {
      return (
        <pre className="text-xs md:text-sm my-4 text-center">
          {response.content}
        </pre>
      );
    }

    if (response.type === 'stats') {
      return (
        <div className="my-4 space-y-2">
          <div className="text-sm font-semibold mb-2">{response.content.title}</div>
          {response.content.data.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className="w-32">{item.label}:</span>
              <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-current transition-all duration-1000"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="w-12 text-right">{item.value}%</span>
            </div>
          ))}
        </div>
      );
    }

    if (response.type === 'error') {
      return <div className="text-red-400 text-sm">Error: {response.content}</div>;
    }

    return <div className="text-sm">{JSON.stringify(response)}</div>;
  };

  return (
    <>
      {output.map((item, idx) => (
        <div key={idx} className="space-y-1" data-testid={`terminal-output-${idx}`}>
          <div className="flex items-center gap-2 text-sm opacity-70">
            <span>[{formatTime(item.timestamp)}]</span>
            <span>akhilb@portfolio:~$</span>
            <span className="text-current">{item.command}</span>
          </div>
          <div className="ml-4 md:ml-8">
            {renderResponse(item.response)}
          </div>
        </div>
      ))}
    </>
  );
}
