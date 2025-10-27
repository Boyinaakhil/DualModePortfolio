import { z } from "zod";

// Portfolio Data Types
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.boolean().default(false),
});

export const skillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.object({
    name: z.string(),
    proficiency: z.number().min(0).max(100),
  })),
});

export const achievementSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string(),
  username: z.string().optional(),
});

export const motivationQuoteSchema = z.object({
  quote: z.string(),
  author: z.string().optional(),
});

// Terminal Theme Types
export type TerminalTheme = 'neon-green' | 'matrix-blue' | 'amber-crt';

export const terminalThemeSchema = z.enum(['neon-green', 'matrix-blue', 'amber-crt']);

// Command Response Types
export const commandResponseSchema = z.object({
  type: z.enum(['text', 'list', 'error', 'ascii-art', 'stats']),
  content: z.any(),
});

// Export Types
export type Project = z.infer<typeof projectSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Achievement = z.infer<typeof achievementSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type MotivationQuote = z.infer<typeof motivationQuoteSchema>;
export type CommandResponse = z.infer<typeof commandResponseSchema>;
