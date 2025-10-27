import { useCallback } from 'react';
import type { TerminalTheme } from '@shared/schema';
import { aboutText } from '@/lib/portfolio-data';
import { useProjects, useSkills, useAchievements, useMotivation, useStats } from './usePortfolioData';

export function useTerminalCommands(
  theme: TerminalTheme,
  onThemeChange: (theme: TerminalTheme) => void
) {
  const { data: projects } = useProjects();
  const { data: skillCategories } = useSkills();
  const { data: achievements } = useAchievements();
  const { data: motivation } = useMotivation();
  const { data: stats } = useStats();

  const commands = [
    'help', 'ls', 'cat', 'cd', 'open', 'resume', 'leetcode', 'gfg',
    'clear', 'theme', 'whoami', 'motivation', 'stats', 'sudo'
  ];

  const getAutocompleteSuggestions = useCallback((input: string) => {
    if (!input) return [];
    return commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
  }, []);

  const executeCommand = useCallback(async (cmd: string) => {
    const parts = cmd.toLowerCase().trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        return {
          type: 'text',
          content: `Available commands:
  help       - Show this help message
  ls         - List files and directories
  cat        - Display file contents (e.g., cat about.txt)
  cd         - Change directory (e.g., cd projects)
  open       - Open file (e.g., open resume.pdf)
  resume     - Display resume information
  leetcode   - View LeetCode profile
  gfg        - View GeeksforGeeks profile
  theme      - Toggle terminal theme
  whoami     - Display user information
  motivation - Get a random DSA quote
  stats      - Show coding statistics
  clear      - Clear terminal screen`
        };

      case 'ls':
        return {
          type: 'list',
          content: [
            { name: 'about.txt', type: 'file' },
            { name: 'skills/', type: 'folder' },
            { name: 'projects/', type: 'folder' },
            { name: 'achievements/', type: 'folder' },
            { name: 'resume.pdf', type: 'file' },
          ]
        };

      case 'cat':
        if (args[0] === 'about.txt') {
          return {
            type: 'text',
            content: aboutText
          };
        }
        return {
          type: 'error',
          content: `File not found: ${args[0] || '(no file specified)'}`
        };

      case 'cd':
        if (args[0] === 'projects') {
          if (!projects) return { type: 'error', content: 'Loading projects...' };
          return {
            type: 'text',
            content: projects.map((p, i) => `${i + 1}. ${p.title} - ${p.description.split('.')[0]}`).join('\n')
          };
        } else if (args[0] === 'skills') {
          if (!skillCategories) return { type: 'error', content: 'Loading skills...' };
          return {
            type: 'text',
            content: skillCategories.map(cat =>
              `${cat.category}:\n${cat.skills.map(s => `  - ${s.name} (${s.proficiency}%)`).join('\n')}`
            ).join('\n\n')
          };
        } else if (args[0] === 'achievements') {
          if (!achievements) return { type: 'error', content: 'Loading achievements...' };
          return {
            type: 'text',
            content: achievements.map((a, i) => `${i + 1}. ${a.title}\n   ${a.description}`).join('\n\n')
          };
        }
        return {
          type: 'error',
          content: `Directory not found: ${args[0] || '(no directory specified)'}`
        };

      case 'open':
      case 'resume':
        return {
          type: 'text',
          content: `AKHIL B (Boyina Akhil)
Computer Science Student | MERN Stack Developer | DSA Enthusiast

EDUCATION
Gayatri Vidya Parishad College of Engineering
B.Tech in Computer Science Engineering (2024-2027)

SKILLS
Languages: JavaScript, C++, Python, Java
Frontend: React, Redux, Tailwind CSS, Bootstrap
Backend: Node.js, Express.js, REST APIs, JWT, Socket.IO
Database: MongoDB, Mongoose, Firebase

ACHIEVEMENTS
- Solved 300+ DSA problems on LeetCode & Codeforces
- Active mentor for DSA and Open Source
- Hackathon participant and community contributor

CONTACT
Email: akhilboyina2005@gmail.com
GitHub: github.com/Boyinaakhil
LinkedIn: linkedin.com/in/akhil-boyina`
        };

      case 'leetcode':
        return {
          type: 'text',
          content: `Opening LeetCode profile...
Profile: https://leetcode.com/u/Akhil_boyina

Stats: 300+ problems solved
Active participant in coding challenges
Focus areas: Data Structures, Algorithms, Dynamic Programming`
        };

      case 'gfg':
        return {
          type: 'text',
          content: `Opening GeeksforGeeks profile...
Profile: https://geeksforgeeks.org/user/akhilboybvvi

Active contributor to the GFG community
Regular practice sessions and problem solving`
        };

      case 'theme':
        const themes: TerminalTheme[] = ['neon-green', 'matrix-blue', 'amber-crt'];
        const currentIndex = themes.indexOf(theme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        onThemeChange(nextTheme);
        return {
          type: 'text',
          content: `Theme changed to: ${nextTheme.replace('-', ' ').toUpperCase()}`
        };

      case 'whoami':
        return {
          type: 'text',
          content: 'Akhil B — MERN Stack Developer | DSA Enthusiast'
        };

      case 'motivation':
        if (!motivation) return { type: 'error', content: 'Loading motivation...' };
        return {
          type: 'text',
          content: `${motivation.quote}${motivation.author ? ` - ${motivation.author}` : ''}`
        };

      case 'stats':
        if (!stats) return { type: 'error', content: 'Loading stats...' };
        return {
          type: 'stats',
          content: {
            title: 'Coding Statistics',
            data: [
              { label: 'Problem Solving', value: stats.skills.problemSolving },
              { label: 'MERN Stack', value: stats.skills.mernStack },
              { label: 'Data Structures', value: stats.skills.dataStructures },
              { label: 'Algorithms', value: stats.skills.algorithms },
              { label: 'Web Development', value: stats.skills.webDevelopment },
            ]
          }
        };

      case 'sudo':
        if (args.join(' ').includes('rm -rf /')) {
          return {
            type: 'ascii-art',
            content: `
    ⚠️  ACCESS DENIED! ⚠️
    
    ╔═══════════════════════════╗
    ║  Nice try! 😉             ║
    ║                           ║
    ║  You don't have           ║
    ║  permission to            ║
    ║  destroy the universe.    ║
    ╚═══════════════════════════╝
    
    System integrity: PROTECTED`
          };
        }
        return {
          type: 'error',
          content: 'Permission denied'
        };

      case 'clear':
        return { type: 'clear' };

      default:
        return {
          type: 'error',
          content: `Command not found: ${command}. Type 'help' for available commands.`
        };
    }
  }, [theme, onThemeChange, projects, skillCategories, achievements, motivation, stats]);

  return { executeCommand, getAutocompleteSuggestions };
}
