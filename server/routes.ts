import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio data API endpoints
  
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/skills", async (_req, res) => {
    try {
      const skills = await storage.getSkillCategories();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch skills" });
    }
  });

  app.get("/api/achievements", async (_req, res) => {
    try {
      const achievements = await storage.getAchievements();
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch achievements" });
    }
  });

  app.get("/api/social-links", async (_req, res) => {
    try {
      const links = await storage.getSocialLinks();
      res.json(links);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch social links" });
    }
  });

  app.get("/api/motivation", async (_req, res) => {
    try {
      const quote = await storage.getRandomMotivationQuote();
      res.json(quote);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch motivation quote" });
    }
  });

  app.get("/api/stats", async (_req, res) => {
    try {
      // Mock LeetCode-style stats
      const stats = {
        problemsSolved: 300,
        easyProblems: 120,
        mediumProblems: 140,
        hardProblems: 40,
        languages: ["JavaScript", "C++", "Python", "Java"],
        skills: {
          problemSolving: 90,
          mernStack: 85,
          dataStructures: 85,
          algorithms: 85,
          webDevelopment: 90,
        }
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
