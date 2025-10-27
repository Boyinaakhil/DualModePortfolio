import type { Project, SkillCategory, Achievement, SocialLink, MotivationQuote } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkillCategories(): Promise<SkillCategory[]>;
  getAchievements(): Promise<Achievement[]>;
  getSocialLinks(): Promise<SocialLink[]>;
  getMotivationQuotes(): Promise<MotivationQuote[]>;
  getRandomMotivationQuote(): Promise<MotivationQuote>;
}

export class MemStorage implements IStorage {
  private projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Website",
      description: "Full-stack MERN store with login, cart, checkout, filtering, and JWT authentication. Handles 100+ concurrent users with optimized MongoDB queries.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      githubUrl: "https://github.com/Boyinaakhil",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "2",
      title: "TrackIt Platform",
      description: "Task & productivity tracker using React, Node, MongoDB with real-time updates via Socket.IO for 20+ simultaneous users.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Redux"],
      githubUrl: "https://github.com/Boyinaakhil",
      featured: true,
    },
    {
      id: "3",
      title: "Grocery List & To-Do App",
      description: "Simple productivity app built with React + Firebase featuring full CRUD operations, real-time sync, and offline support.",
      technologies: ["React", "Firebase", "Firestore", "React Hooks"],
      githubUrl: "https://github.com/Boyinaakhil",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: "4",
      title: "Portfolio v1",
      description: "The current interactive dual-view website showcasing innovation and full-stack mastery with terminal and GUI modes.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Boyinaakhil",
      liveUrl: "https://example.com",
      featured: true,
    },
  ];

  private skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", proficiency: 90 },
        { name: "C++", proficiency: 85 },
        { name: "Python", proficiency: 75 },
        { name: "Java", proficiency: 70 },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", proficiency: 90 },
        { name: "Redux", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 85 },
        { name: "Bootstrap", proficiency: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express.js", proficiency: 85 },
        { name: "REST APIs", proficiency: 90 },
        { name: "JWT", proficiency: 80 },
        { name: "Socket.IO", proficiency: 75 },
      ],
    },
    {
      category: "Database & Hosting",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "Mongoose", proficiency: 80 },
        { name: "Firebase", proficiency: 75 },
        { name: "Cloudinary", proficiency: 70 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "GitHub", proficiency: 85 },
        { name: "VS Code", proficiency: 90 },
        { name: "Vercel", proficiency: 75 },
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Data Structures", proficiency: 85 },
        { name: "Algorithms", proficiency: 85 },
        { name: "Problem Solving", proficiency: 90 },
        { name: "Web Optimization", proficiency: 80 },
      ],
    },
  ];

  private achievements: Achievement[] = [
    {
      id: "1",
      title: "300+ DSA Problems Solved",
      description: "Solved 300+ Data Structures and Algorithms problems across LeetCode and Codeforces platforms.",
    },
    {
      id: "2",
      title: "Active Competitive Programmer",
      description: "Regular participant on LeetCode and GeeksforGeeks with consistent problem-solving activity.",
    },
    {
      id: "3",
      title: "DSA/Open Source Mentor",
      description: "Mentor for Data Structures, Algorithms, and Open Source contributions on GitHub & LinkedIn.",
    },
    {
      id: "4",
      title: "Hackathon Participant",
      description: "Active participant in hackathons and coding contests, building innovative solutions under tight deadlines.",
    },
    {
      id: "5",
      title: "Community Contributor",
      description: "Active contributor in GitHub Discussions and various technical communities.",
    },
  ];

  private socialLinks: SocialLink[] = [
    {
      platform: "GitHub",
      url: "https://github.com/Boyinaakhil",
      username: "Boyinaakhil",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/akhil-boyina",
      username: "akhil-boyina",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/Akhil_boyina",
      username: "Akhil_boyina",
    },
    {
      platform: "GeeksforGeeks",
      url: "https://geeksforgeeks.org/user/akhilboybvvi",
      username: "akhilboybvvi",
    },
  ];

  private motivationQuotes: MotivationQuote[] = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { quote: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { quote: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { quote: "Knowledge is power.", author: "Francis Bacon" },
    { quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
    { quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
    { quote: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
  ];

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getSkillCategories(): Promise<SkillCategory[]> {
    return this.skillCategories;
  }

  async getAchievements(): Promise<Achievement[]> {
    return this.achievements;
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    return this.socialLinks;
  }

  async getMotivationQuotes(): Promise<MotivationQuote[]> {
    return this.motivationQuotes;
  }

  async getRandomMotivationQuote(): Promise<MotivationQuote> {
    const randomIndex = Math.floor(Math.random() * this.motivationQuotes.length);
    return this.motivationQuotes[randomIndex];
  }
}

export const storage = new MemStorage();
