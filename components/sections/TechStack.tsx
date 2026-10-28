"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Cloud,
  FileCode2,
  Boxes,
  GitMerge,
  Cpu,
  Activity,
  GitBranch,
  Terminal
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Cloud;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "01",
    title: "Cloud",
    subtitle: "AWS Cloud Infrastructure",
    icon: Cloud,
    skills: ["AWS", "EC2", "S3", "IAM", "VPC"],
  },
  {
    id: "02",
    title: "Infrastructure as Code",
    subtitle: "Declarative Automation",
    icon: FileCode2,
    skills: ["Terraform"],
  },
  {
    id: "03",
    title: "Containers & Orchestration",
    subtitle: "Containerized Workloads",
    icon: Boxes,
    skills: ["Docker", "Kubernetes", "Helm"],
  },
  {
    id: "04",
    title: "CI/CD",
    subtitle: "Automated Pipelines",
    icon: GitMerge,
    skills: ["Jenkins", "GitHub Actions"],
  },
  {
    id: "05",
    title: "Configuration Management",
    subtitle: "System Configuration",
    icon: Cpu,
    skills: ["Ansible"],
  },
  {
    id: "06",
    title: "Monitoring",
    subtitle: "Metrics & Observability",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    id: "07",
    title: "Version Control",
    subtitle: "Source Code Management",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
  {
    id: "08",
    title: "Operating Systems",
    subtitle: "System Administration",
    icon: Terminal,
    skills: ["Linux"],
  },
];

const TICKER_ITEMS = [
  "AWS",
  "TERRAFORM",
  "DOCKER",
  "KUBERNETES",
  "HELM",
  "GITHUB ACTIONS",
  "JENKINS",
  "ANSIBLE",
  "PROMETHEUS",
  "GRAFANA",
  "CLOUDWATCH",
  "LINUX",
  "GIT",
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.4, 0.25, 1],
    }
  },
};

export function TechStack() {
  return (
    <Section id="skills" className="bg-background relative overflow-hidden">
      {/* Invisible anchor target for backwards compatibility */}
      <span id="stack" className="absolute -top-24 opacity-0 pointer-events-none" aria-hidden="true" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/[0.03] blur-[120px] pointer-events-none rounded-full" />

      {/* Infinite Horizontal Technology Ticker */}
      <div className="w-full mb-16 border-y border-border/60 bg-[#090b10] py-3.5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono font-medium tracking-widest text-muted/70">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="hover:text-blue-400 transition-colors cursor-default">
                {item}
              </span>
              <span className="text-blue-500/40">•</span>
            </div>
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mb-14 md:mb-18 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-sm"
          >
            <span>TECHNICAL SKILLS</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-4">Tools & Technologies</SectionHeading>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              A focused, practical stack for cloud infrastructure provisioning, containerized workloads, automated CI/CD pipelines, and systems observability.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={cardVariant} className="h-full">
                <Card className="h-full p-5 md:p-6 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 border-border/80 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col rounded-xl">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-mono text-muted/40">{category.id}</span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground group-hover:text-white transition-colors mb-0.5">
                    {category.title}
                  </h3>
                  <div className="text-[11px] font-mono text-muted/60 mb-3.5">
                    {category.subtitle}
                  </div>

                  <div className="w-full h-px bg-border/40 mb-3.5" />

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs font-mono text-muted/90 bg-background/70 border border-border/70 rounded-md hover:text-foreground hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
