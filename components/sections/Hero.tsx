"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Terminal as TerminalIcon, 
  Check, 
  Layers, 
  Box, 
  Cpu, 
  Sparkles,
  Play
} from "lucide-react";
import { buttonBaseStyles, buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const STAGGER_DELAY = 0.08;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

type TerminalTab = "terraform" | "docker" | "kubernetes";

interface CommandScenario {
  id: TerminalTab;
  tabLabel: string;
  command: string;
  badge: string;
  output: {
    text: string;
    type?: "info" | "success" | "highlight" | "dim";
  }[];
  summary: string;
}

const TERMINAL_SCENARIOS: CommandScenario[] = [
  {
    id: "terraform",
    tabLabel: "terraform plan",
    command: "terraform plan -out=tfplan.binary",
    badge: "IaC Workflow",
    output: [
      { text: "Acquiring state lock in DynamoDB table 'tf-locks'...", type: "dim" },
      { text: "Reading configuration for provider 'hashicorp/aws'...", type: "dim" },
      { text: "+ aws_vpc.main { cidr_block = \"10.0.0.0/16\" }", type: "info" },
      { text: "+ aws_subnet.public_a { az = \"ap-south-1a\" }", type: "info" },
      { text: "+ aws_eks_cluster.production { version = \"1.29\" }", type: "highlight" },
      { text: "+ aws_ecr_repository.app { image_tag_mutability = \"IMMUTABLE\" }", type: "info" },
      { text: "Plan: 4 to add, 0 to change, 0 to destroy.", type: "success" },
    ],
    summary: "Plan validated • Remote state synchronized",
  },
  {
    id: "docker",
    tabLabel: "docker build",
    command: "docker build -t three-tier-api:v1.0 .",
    badge: "Containerization",
    output: [
      { text: "[1/4] FROM node:20-alpine AS runtime", type: "dim" },
      { text: "[2/4] WORKDIR /app && COPY package*.json ./", type: "dim" },
      { text: "[3/4] RUN npm ci --omit=dev && COPY src/ ./src", type: "info" },
      { text: "[4/4] EXPOSE 8080 && USER node", type: "highlight" },
      { text: "=> Writing image sha256:d891bca7e89104...", type: "dim" },
      { text: "=> Naming to docker.io/library/three-tier-api:v1.0", type: "success" },
    ],
    summary: "Image built • Minimal Alpine base layer",
  },
  {
    id: "kubernetes",
    tabLabel: "kubectl get pods",
    command: "kubectl get pods -n production -o wide",
    badge: "EKS Cluster",
    output: [
      { text: "NAME                          READY   STATUS    RESTARTS   AGE", type: "dim" },
      { text: "frontend-deploy-7b89-f12a     1/1     Running   0          24m", type: "success" },
      { text: "backend-service-9c44-k09l     1/1     Running   0          24m", type: "success" },
      { text: "mongodb-statefulset-0         1/1     Running   0          2d", type: "highlight" },
      { text: "ingress-controller-4a11-8v2   1/1     Running   0          5d", type: "dim" },
      { text: "Status: 4/4 services healthy across worker nodes.", type: "success" },
    ],
    summary: "All pods operational • Ingress routes active",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<TerminalTab>("terraform");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const activeScenario = TERMINAL_SCENARIOS.find((s) => s.id === activeTab) || TERMINAL_SCENARIOS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Radial Gradient Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-cyan-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
          {/* Eyebrow status pill */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>ENTRY-LEVEL DEVOPS ENGINEER</span>
            <span className="text-blue-400/50">•</span>
            <span className="text-muted/80 text-[11px] font-normal font-mono">PUNE, INDIA</span>
          </motion.div>

          {/* Main Name & Title Headline */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-4"
          >
            <div className="text-sm font-mono text-muted/70 tracking-widest uppercase mb-1">
              Aman Shaikh
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.08] text-foreground">
              BUILD.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                AUTOMATE.
              </span>
              <br />
              DEPLOY.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-muted mb-4 max-w-xl leading-relaxed font-normal"
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
            className="text-sm sm:text-base text-muted/80 mb-6 max-w-lg leading-relaxed"
          >
            Passionate about Infrastructure as Code, reproducible container deployments, and reliable CI/CD automation pipelines.
          </motion.p>

          {/* Tech Badges Row */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono text-muted/90"
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

          {/* Action Buttons: View Projects, GitHub, LinkedIn */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-3.5"
          >
            <Link 
              href="#work" 
              className={cn(buttonBaseStyles, buttonVariants.accent, "group")}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="https://github.com/Shaikh-aman-47" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(buttonBaseStyles, buttonVariants.outline, "group")}
            >
              GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-muted group-hover:text-foreground" />
            </Link>

            <Link 
              href="https://www.linkedin.com/in/shaikh-aman-322216376" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(buttonBaseStyles, buttonVariants.outline, "group border-blue-500/20 hover:border-blue-500/50")}
            >
              LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-blue-400" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Sophisticated Interactive DevOps Terminal */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="lg:col-span-5 w-full mx-auto"
        >
          <div className="relative rounded-xl border border-border/80 bg-[#0c0e14]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col font-mono text-xs">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/80 bg-[#090b10]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                <span className="text-[11px] text-muted/70 pl-2 font-mono flex items-center gap-1.5">
                  <TerminalIcon className="h-3 w-3 text-blue-400" />
                  infra-workflow.sh
                </span>
              </div>
              <span className="text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                Simulation
              </span>
            </div>

            {/* Interactive Command Tabs */}
            <div className="flex border-b border-border/60 bg-[#0b0d13] overflow-x-auto text-[11px]">
              {TERMINAL_SCENARIOS.map((scenario) => {
                const isSelected = activeTab === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveTab(scenario.id)}
                    className={cn(
                      "px-3.5 py-2 transition-colors border-r border-border/50 flex items-center gap-1.5 focus-visible:outline-none focus-visible:bg-blue-500/10 whitespace-nowrap",
                      isSelected
                        ? "text-blue-300 bg-[#0f121a] font-semibold border-b-2 border-b-blue-400"
                        : "text-muted hover:text-foreground hover:bg-[#0e1017]"
                    )}
                  >
                    <span className="text-muted/60">$</span>
                    <span>{scenario.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Terminal Output Area */}
            <div className="p-5 flex flex-col space-y-3 min-h-[260px] bg-[#090b10]/95 font-mono">
              {/* Active Command Prompt */}
              <div className="flex items-center text-foreground font-medium pb-2 border-b border-border/30">
                <span className="text-emerald-400 mr-2">shaikh@devops-node:~$</span>
                <span className="text-blue-300">{activeScenario.command}</span>
              </div>

              {/* Animated lines for the selected scenario */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1.5 text-xs"
                >
                  {activeScenario.output.map((line, idx) => {
                    let textColor = "text-muted/90";
                    if (line.type === "success") textColor = "text-emerald-400 font-medium";
                    if (line.type === "info") textColor = "text-blue-300";
                    if (line.type === "highlight") textColor = "text-cyan-300 font-medium";
                    if (line.type === "dim") textColor = "text-muted/60";

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className={cn("flex items-start gap-2", textColor)}
                      >
                        <span className="text-muted/30 select-none text-[10px] w-4">{idx + 1}</span>
                        <span className="break-all">{line.text}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Status summary banner */}
              <div className="mt-auto pt-4 flex items-center justify-between text-[11px] border-t border-border/40 text-muted">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="h-3.5 w-3.5" />
                  <span>{activeScenario.summary}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted/60 font-mono">
                  <span>exit: 0</span>
                  <span className="inline-block w-1.5 h-3 bg-blue-400 animate-pulse ml-1" />
                </div>
              </div>
            </div>

            {/* Disclaimer Footer */}
            <div className="px-4 py-2 bg-[#06080c] border-t border-border/50 text-[10px] text-muted/60 flex items-center justify-between">
              <span>Interactive Simulator</span>
              <span className="text-muted/40">Visual demonstration of DevOps workflows</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
