"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  PlayCircle,
  Boxes,
  Server,
  Cloud,
  Workflow,
  ChevronRight,
  FileDown
} from "lucide-react";
import { buttonBaseStyles, buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

// Check if resume exists (hidden by default until file is present in public/resume.pdf)
const HAS_RESUME = false;

const STAGGER_DELAY = 0.08;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.45,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

interface WorkflowStage {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: typeof GitBranch;
  tech: string;
  status: string;
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "01",
    name: "GitHub",
    category: "Source & VCS",
    description: "Version-controlled infrastructure & app code triggers automated workflows.",
    icon: GitBranch,
    tech: "Git / Trunk Flow",
    status: "Version Control",
  },
  {
    id: "02",
    name: "CI/CD",
    category: "Automation",
    description: "Automated linting, container image build, and security scanning on PR merge.",
    icon: PlayCircle,
    tech: "GitHub Actions / Jenkins",
    status: "CI/CD Automation",
  },
  {
    id: "03",
    name: "Docker / ECR",
    category: "Artifact Registry",
    description: "Immutable container images tagged with commit SHA and stored in private registry.",
    icon: Boxes,
    tech: "Docker / Amazon ECR",
    status: "Container Registry",
  },
  {
    id: "04",
    name: "Kubernetes / EKS",
    category: "Orchestration",
    description: "Workloads deployed to Amazon EKS cluster with declarative manifest configurations.",
    icon: Server,
    tech: "Amazon EKS / Helm",
    status: "Container Orchestration",
  },
  {
    id: "05",
    name: "AWS Cloud",
    category: "Infrastructure",
    description: "Isolated VPC, IAM least privilege, Application Load Balancers, and S3 backend.",
    icon: Cloud,
    tech: "VPC / EC2 / S3",
    status: "Cloud Infrastructure",
  },
];

export function Hero() {
  const [activeStage, setActiveStage] = useState<string>("04");
  const selectedStage = WORKFLOW_STAGES.find((s) => s.id === activeStage) || WORKFLOW_STAGES[3];

  return (
    <section id="home" className="relative flex items-center pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Radial Gradient Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-cyan-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-6 flex flex-col items-start max-w-2xl">
          {/* Eyebrow status pill */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>DEVOPS ENGINEER</span>
            <span className="text-blue-400/50">•</span>
            <span className="text-muted/80 text-[11px] font-normal font-mono">AWS CLOUD & INFRASTRUCTURE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-4"
          >
            <div className="text-xs sm:text-sm font-mono text-muted/70 tracking-widest uppercase mb-1">
              Aman Shaikh
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.1] text-foreground">
              Automating Cloud.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Deploying with Confidence.
              </span>
            </h1>
          </motion.div>

          {/* Credible Description */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-sm sm:text-base md:text-lg text-muted mb-3 max-w-xl leading-relaxed font-normal"
          >
            I build and automate cloud infrastructure using{" "}
            <span className="text-foreground font-medium">AWS</span>,{" "}
            <span className="text-foreground font-medium">Terraform</span>,{" "}
            <span className="text-foreground font-medium">Docker</span>, and{" "}
            <span className="text-foreground font-medium">Kubernetes</span>.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-xs sm:text-sm text-muted/80 mb-6 max-w-lg leading-relaxed"
          >
            Focusing on reproducible Infrastructure as Code, container orchestration on Amazon EKS, and reliable CI/CD pipelines through hands-on engineering.
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-2 mb-6 text-xs font-mono text-muted/90"
          >
            <span className="px-2.5 py-1 rounded-md border border-border/80 bg-card/60 text-foreground">AWS</span>
            <span className="text-muted/40">•</span>
            <span className="px-2.5 py-1 rounded-md border border-border/80 bg-card/60 text-foreground">Terraform</span>
            <span className="text-muted/40">•</span>
            <span className="px-2.5 py-1 rounded-md border border-border/80 bg-card/60 text-foreground">Docker</span>
            <span className="text-muted/40">•</span>
            <span className="px-2.5 py-1 rounded-md border border-border/80 bg-card/60 text-foreground">Kubernetes</span>
            <span className="text-muted/40">•</span>
            <span className="px-2.5 py-1 rounded-md border border-border/80 bg-card/60 text-foreground">CI/CD</span>
            <span className="text-muted/40">•</span>
            <span className="px-2.5 py-1 rounded-md border border-border/80 bg-card/60 text-foreground">Linux</span>
          </motion.div>

          {/* Action CTAs: View Projects (Primary), GitHub, LinkedIn */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#projects"
              className={cn(buttonBaseStyles, buttonVariants.accent, "group shadow-sm")}
              aria-label="View featured DevOps projects"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {HAS_RESUME && (
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonBaseStyles, buttonVariants.glow, "group")}
                aria-label="Download Aman Shaikh's Resume PDF"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            )}
            
            <Link 
              href="https://github.com/Shaikh-aman-47" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(buttonBaseStyles, buttonVariants.outline, "group")}
              aria-label="Visit Aman Shaikh's GitHub profile"
            >
              GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-muted group-hover:text-foreground" />
            </Link>

            <Link 
              href="https://www.linkedin.com/in/shaikh-aman-322216376" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(buttonBaseStyles, buttonVariants.outline, "group border-blue-500/20 hover:border-blue-500/50")}
              aria-label="Connect with Aman Shaikh on LinkedIn"
            >
              LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-blue-400" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Deployment Workflow Visualization */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="lg:col-span-6 w-full mx-auto"
        >
          <div className="relative rounded-xl border border-border/80 bg-[#0c0e14]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col font-mono text-xs">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/80 bg-[#090b10]">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="text-[11px] text-muted/70 pl-2 font-mono flex items-center gap-1.5">
                  <Workflow className="h-3 w-3 text-blue-400" />
                  DevOps Deployment Pipeline
                </span>
              </div>
              <span className="text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                Illustrative Flow
              </span>
            </div>

            {/* Workflow Diagram Nodes */}
            <div className="p-4 sm:p-5 flex flex-col space-y-3 bg-[#090b10]/95">
              <div className="text-[11px] text-muted/70 mb-1 flex items-center justify-between">
                <span>Select a workflow stage to inspect architecture:</span>
                <span className="text-muted/80 text-[10px] font-mono flex items-center gap-1.5">
                  <Workflow className="h-3 w-3 text-blue-400" /> Example Workflow
                </span>
              </div>

              {/* Node Sequence List */}
              <div className="grid grid-cols-1 gap-1.5">
                {WORKFLOW_STAGES.map((stage) => {
                  const Icon = stage.icon;
                  const isSelected = activeStage === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(stage.id)}
                      className={cn(
                        "flex items-center justify-between p-2.5 rounded-lg border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                        isSelected
                          ? "border-blue-500/50 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                          : "border-border/60 bg-card/40 hover:bg-card/80 hover:border-border"
                      )}
                      aria-label={`Inspect ${stage.name} stage architecture`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "h-7 w-7 rounded-md flex items-center justify-center transition-colors flex-shrink-0",
                          isSelected
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                            : "bg-background text-muted border border-border/70"
                        )}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "text-xs font-bold transition-colors",
                              isSelected ? "text-white" : "text-foreground"
                            )}>
                              {stage.name}
                            </span>
                            <span className="text-[10px] text-muted/60 font-normal">
                              ({stage.category})
                            </span>
                          </div>
                          <div className="text-[10px] text-muted/80 truncate max-w-[160px] xs:max-w-[200px] sm:max-w-xs">
                            {stage.tech}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted/70 font-mono hidden sm:inline-block">
                          {stage.status}
                        </span>
                        <ChevronRight className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          isSelected ? "text-blue-400 translate-x-0.5" : "text-muted/40"
                        )} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Inspected Stage Details Panel */}
              <div className="p-3 rounded-lg border border-border/60 bg-[#080a0f] text-xs space-y-1 mt-1">
                <div className="flex items-center justify-between text-blue-300 font-semibold text-[11px]">
                  <span>Stage {selectedStage.id}: {selectedStage.name} Details</span>
                  <span className="text-muted/50 font-normal">{selectedStage.category}</span>
                </div>
                <p className="text-muted/90 text-[11px] leading-relaxed">
                  {selectedStage.description}
                </p>
              </div>

              {/* Pipeline Footer Info */}
              <div className="pt-2 text-[10px] text-muted/50 border-t border-border/40 flex items-center justify-between">
                <span>Architecture Pattern: GitOps & Declarative IaC</span>
                <span className="text-muted/40">Illustrative DevOps workflow</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
