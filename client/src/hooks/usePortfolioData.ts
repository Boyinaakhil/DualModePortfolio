import { useQuery } from '@tanstack/react-query';
import type { Project, SkillCategory, Achievement, SocialLink, MotivationQuote } from '@shared/schema';

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });
}

export function useSkills() {
  return useQuery<SkillCategory[]>({
    queryKey: ['/api/skills'],
  });
}

export function useAchievements() {
  return useQuery<Achievement[]>({
    queryKey: ['/api/achievements'],
  });
}

export function useSocialLinks() {
  return useQuery<SocialLink[]>({
    queryKey: ['/api/social-links'],
  });
}

export function useMotivation() {
  return useQuery<MotivationQuote>({
    queryKey: ['/api/motivation'],
  });
}

export function useStats() {
  return useQuery<{
    problemsSolved: number;
    easyProblems: number;
    mediumProblems: number;
    hardProblems: number;
    languages: string[];
    skills: Record<string, number>;
  }>({
    queryKey: ['/api/stats'],
  });
}
