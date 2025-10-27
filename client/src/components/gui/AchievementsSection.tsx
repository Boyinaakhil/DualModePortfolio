import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Award, Users, Code, GitBranch } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { useAchievements } from '@/hooks/usePortfolioData';

const iconMap: Record<string, any> = {
  '1': SiLeetcode,
  '2': Code,
  '3': Users,
  '4': Trophy,
  '5': GitBranch,
};

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: achievements, isLoading } = useAchievements();

  if (isLoading || !achievements) {
    return (
      <section id="achievements" className="py-20 md:py-32 bg-muted/30" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading achievements...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="achievements" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </Card>
          </motion.div>
        </div>

        {/* Achievements List */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = iconMap[achievement.id] || Award;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
              >
                <Card className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Platform Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Card className="px-6 py-3 hover-elevate transition-all duration-300">
            <a
              href="https://leetcode.com/u/Akhil_boyina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              data-testid="link-leetcode"
            >
              <SiLeetcode className="w-5 h-5 text-primary" />
              <span className="font-medium">LeetCode Profile</span>
            </a>
          </Card>

          <Card className="px-6 py-3 hover-elevate transition-all duration-300">
            <a
              href="https://geeksforgeeks.org/user/akhilboybvvi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              data-testid="link-gfg"
            >
              <SiGeeksforgeeks className="w-5 h-5 text-primary" />
              <span className="font-medium">GeeksforGeeks Profile</span>
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
