import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akhilboyina2005@gmail.com',
      href: 'mailto:akhilboyina2005@gmail.com',
      testId: 'contact-email',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Boyinaakhil',
      href: 'https://github.com/Boyinaakhil',
      testId: 'contact-github',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'akhil-boyina',
      href: 'https://linkedin.com/in/akhil-boyina',
      testId: 'contact-linkedin',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      value: '@Akhil_boyina',
      href: 'https://leetcode.com/u/Akhil_boyina',
      testId: 'contact-leetcode',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover-elevate transition-all duration-300 border border-transparent hover:border-primary/20"
                    data-testid={method.testId}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {method.label}
                      </div>
                      <div className="text-sm font-semibold truncate">
                        {method.value}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-8 border-t text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Interested in working together?
              </p>
              <Button
                size="lg"
                asChild
                className="hover-elevate active-elevate-2"
                data-testid="button-send-email"
              >
                <a href="mailto:akhilboyina2005@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an email
                </a>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
