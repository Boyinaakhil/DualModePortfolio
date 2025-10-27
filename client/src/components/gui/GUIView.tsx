import { motion } from 'framer-motion';
import { Terminal, Mail, Github, Linkedin, Code2, Award } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { AchievementsSection } from './AchievementsSection';
import { ContactSection } from './ContactSection';

interface GUIViewProps {
  onSwitchView: () => void;
}

export function GUIView({ onSwitchView }: GUIViewProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold"
            >
              Akhil B
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="hover-elevate text-sm font-medium px-3 py-2 rounded-md transition-colors"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="hover-elevate text-sm font-medium px-3 py-2 rounded-md transition-colors"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover-elevate text-sm font-medium px-3 py-2 rounded-md transition-colors"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="hover-elevate text-sm font-medium px-3 py-2 rounded-md transition-colors"
                data-testid="nav-achievements"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover-elevate text-sm font-medium px-3 py-2 rounded-md transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={onSwitchView}
              className="hover-elevate"
              data-testid="button-switch-to-terminal"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Terminal Mode
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Akhil B. Built with React + TypeScript + Tailwind CSS
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Boyinaakhil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
                data-testid="footer-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akhil-boyina"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Akhil_boyina"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
                data-testid="footer-leetcode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
              <a
                href="https://geeksforgeeks.org/user/akhilboybvvi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
                data-testid="footer-gfg"
              >
                <SiGeeksforgeeks className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
