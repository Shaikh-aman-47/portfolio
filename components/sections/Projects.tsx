"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { 
  ArrowDown, 
  ArrowRight, 
  ArrowUpRight,
  GitBranch, 
  Activity, 
  Box, 
  Database, 
  Server, 
  FileCode, 
  MonitorPlay, 
  Cloud, 
  Network,
  Cpu,
  Layers,
  Lock,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { buttonBaseStyles, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PROJECT_01 = {
  id: "01",
  title: "Three-Tier Application Deployment on AWS EKS",
  label: "AWS / Kubernetes / Terraform",
  githubUrl: "https://github.com/Shaikh-aman-47",
  description:
    "Provisioned and deployed a three-tier application environment on Amazon EKS using Terraform, Docker and Kubernetes.",
  details:
    "Provisioned AWS infrastructure for an Amazon EKS environment using Terraform, containerized application components with Docker, and deployed the workloads to Kubernetes using Deployments, Services, and Secrets.",
  capabilities: [
    "Terraform-managed AWS infrastructure",
    "Dockerized application components",
    "Amazon ECR image workflow",
    "Kubernetes Deployments and Services",
    "Secrets management",
    "Helm-based deployment",
    "Grafana monitoring",
  ],
  tech: ["AWS EKS", "Terraform", "Kubernetes", "Docker", "Amazon ECR", "VPC", "IAM", "Helm", "MongoDB", "Grafana"],
};

const PROJECT_02 = {
  id: "02",
  title: "Modular AWS Infrastructure with Terraform",
  label: "Terraform / AWS / Infrastructure as Code",
  githubUrl: "https://github.com/Shaikh-aman-47",
  description:
    "Built reusable Terraform infrastructure across development, staging and production environments.",
  details:
    "Created reusable Terraform modules to provision AWS infrastructure across separate development, staging and production environments. The infrastructure included EC2 instances, S3 buckets and DynamoDB tables, with Terraform remote state using Amazon S3 and DynamoDB state locking.",
  capabilities: [
    "Terraform modules",
    "Variables & Outputs",
    "Environment separation",
    "Remote backend",
    "S3 state storage",
    "DynamoDB state locking",
    "Infrastructure reuse",
  ],
  tech: ["Terraform", "AWS", "EC2", "S3", "DynamoDB", "VPC", "Terraform Modules"],
  environments: [
    { name: "DEV", spec: "2 × EC2 t2.micro • S3 • DynamoDB" },
    { name: "STAGING", spec: "1 × EC2 t2.medium • S3 • DynamoDB" },
    { name: "PRODUCTION", spec: "1 × EC2 t2.small • S3 • DynamoDB" },
  ],
};

const PROJECT_03 = {
  id: "03",
  title: "Containerized Two-Tier Flask Application",
  label: "Docker / Flask / MySQL",
  githubUrl: "https://github.com/Shaikh-aman-47",
  description:
    "Containerized a Flask application and MySQL database using Docker and Docker networking.",
  details:
    "Built a two-tier application consisting of a Flask application and MySQL database running as separate Docker containers. Configured container networking and service communication to demonstrate containerized application architecture.",
  capabilities: [
    "Docker images & Dockerfiles",
    "Multi-container networking",
    "Service-to-service communication",
    "Database containerization & persistence",
    "Container lifecycle management",
  ],
  tech: ["Docker", "Docker Compose", "Flask", "MySQL", "Docker Networking"],
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } 
  },
};

export function Projects() {
  return (
    <Section id="work" className="bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/[0.03] blur-[150px] pointer-events-none rounded-full" />
      
      <Container className="relative z-10">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-sm"
          >
            <span>SELECTED WORK</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-4">Projects built to learn by doing.</SectionHeading>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Hands-on projects focused on cloud infrastructure, containerization, Kubernetes and infrastructure automation.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* PROJECT 01 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
          >
            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 rounded">
                  {PROJECT_01.id}
                </span>
                <span className="text-xs font-mono text-muted/70 tracking-wide">
                  {PROJECT_01.label}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                {PROJECT_01.title}
              </h3>
              
              <p className="text-muted text-base leading-relaxed mb-4">
                {PROJECT_01.description}
              </p>
              
              <p className="text-muted/80 text-sm leading-relaxed mb-8">
                {PROJECT_01.details}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-foreground/90 mb-4 uppercase tracking-wider font-mono">
                  Key Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_01.capabilities.map((item) => (
                    <li key={item} className="flex items-start text-xs sm:text-sm text-muted/90">
                      <ArrowRight className="h-3.5 w-3.5 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {PROJECT_01.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted/80 bg-background/80 border border-border/80 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  href={PROJECT_01.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonBaseStyles, buttonVariants.outline, "gap-2 text-xs font-mono")}
                >
                  <GitBranch className="h-3.5 w-3.5 text-blue-400" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                </Link>
              </div>
            </div>

            {/* Architecture Visual 01 */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <Card className="w-full bg-[#0c0e14]/90 p-5 md:p-7 border-border/80 flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.5)] font-mono text-xs rounded-xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/50 text-[11px]">
                  <span className="text-muted/70 uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-blue-400" />
                    Architecture Topology
                  </span>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Workflow
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start w-full justify-between">
                  
                  {/* INFRASTRUCTURE COLUMN */}
                  <div className="flex flex-col items-center w-full md:w-1/3 bg-[#080a0f]/60 p-3 rounded-lg border border-border/40">
                    <div className="text-[10px] text-blue-400 mb-3 font-semibold tracking-wider uppercase">
                      1. Infra Provisioning
                    </div>
                    <div className="flex flex-col items-center space-y-2 w-full">
                      <div className="flex items-center gap-2 border border-border/70 bg-background/90 px-2.5 py-2 rounded-md w-full justify-center text-muted-foreground text-[11px]">
                        <FileCode className="h-3.5 w-3.5 text-purple-400" /> Terraform
                      </div>
                      <ArrowDown className="h-3.5 w-3.5 text-muted/40" />
                      <div className="flex items-center gap-2 border border-border/70 bg-background/90 px-2.5 py-2 rounded-md w-full justify-center text-muted-foreground text-[11px]">
                        <Cloud className="h-3.5 w-3.5 text-amber-400" /> AWS VPC
                      </div>
                      <ArrowDown className="h-3.5 w-3.5 text-muted/40" />
                      <div className="flex items-center gap-2 border border-blue-500/40 bg-blue-500/10 px-2.5 py-2 rounded-md w-full justify-center text-blue-300 text-[11px] font-semibold">
                        <Server className="h-3.5 w-3.5 text-blue-400" /> Amazon EKS
                      </div>
                    </div>
                  </div>

                  {/* APPLICATION CONTAINER WORKFLOW */}
                  <div className="flex flex-col items-center w-full md:w-1/3 bg-[#080a0f]/60 p-3 rounded-lg border border-border/40">
                    <div className="text-[10px] text-cyan-400 mb-3 font-semibold tracking-wider uppercase text-center">
                      2. Container Delivery
                    </div>
                    <div className="flex flex-col items-center space-y-2 w-full">
                      <div className="flex items-center gap-2 border border-border/70 bg-background/90 px-2.5 py-2 rounded-md w-full justify-center text-muted-foreground text-[11px]">
                        <Box className="h-3.5 w-3.5 text-cyan-400" /> Docker
                      </div>
                      <ArrowDown className="h-3.5 w-3.5 text-muted/40" />
                      <div className="flex items-center gap-2 border border-border/70 bg-background/90 px-2.5 py-2 rounded-md w-full justify-center text-muted-foreground text-[11px]">
                        <Database className="h-3.5 w-3.5 text-amber-400" /> Amazon ECR
                      </div>
                      <ArrowDown className="h-3.5 w-3.5 text-muted/40" />
                      
                      {/* Pods block */}
                      <div className="flex flex-col items-center space-y-1.5 w-full border border-blue-500/30 bg-blue-500/5 rounded-md p-2">
                        <span className="text-[10px] text-blue-400 font-semibold mb-1">EKS Pods</span>
                        <div className="border border-border/60 bg-background/80 px-2 py-1 rounded text-center w-full text-[10px] text-muted-foreground">
                          Frontend (React)
                        </div>
                        <div className="border border-border/60 bg-background/80 px-2 py-1 rounded text-center w-full text-[10px] text-muted-foreground">
                          Backend (API)
                        </div>
                        <div className="border border-border/60 bg-background/80 px-2 py-1 rounded text-center w-full text-[10px] text-muted-foreground">
                          MongoDB Stateful
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OBSERVABILITY */}
                  <div className="flex flex-col items-center w-full md:w-1/3 bg-[#080a0f]/60 p-3 rounded-lg border border-border/40">
                    <div className="text-[10px] text-emerald-400 mb-3 font-semibold tracking-wider uppercase">
                      3. Observability
                    </div>
                    <div className="flex flex-col items-center space-y-2 w-full">
                      <div className="flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-2.5 py-2 rounded-md w-full justify-center text-blue-300 text-[11px]">
                        <Server className="h-3.5 w-3.5 text-blue-400" /> Amazon EKS
                      </div>
                      <ArrowDown className="h-3.5 w-3.5 text-muted/40" />
                      <div className="flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-2.5 py-2 rounded-md w-full justify-center text-orange-300 text-[11px]">
                        <Activity className="h-3.5 w-3.5 text-orange-400" /> Prometheus
                      </div>
                      <ArrowDown className="h-3.5 w-3.5 text-muted/40" />
                      <div className="flex items-center gap-2 border border-border/70 bg-background/90 px-2.5 py-2 rounded-md w-full justify-center text-muted-foreground text-[11px]">
                        <MonitorPlay className="h-3.5 w-3.5 text-emerald-400" /> Grafana Dashboards
                      </div>
                    </div>
                  </div>

                </div>
              </Card>
            </div>
          </motion.div>

          <div className="w-full h-px bg-border/50" />

          {/* PROJECT 02 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start"
          >
            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 rounded">
                  {PROJECT_02.id}
                </span>
                <span className="text-xs font-mono text-muted/70 tracking-wide">
                  {PROJECT_02.label}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                {PROJECT_02.title}
              </h3>
              
              <p className="text-muted text-base leading-relaxed mb-4">
                {PROJECT_02.description}
              </p>
              
              <p className="text-muted/80 text-sm leading-relaxed mb-8">
                {PROJECT_02.details}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-foreground/90 mb-4 uppercase tracking-wider font-mono">
                  Core Concepts
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_02.capabilities.map((item) => (
                    <li key={item} className="flex items-start text-xs sm:text-sm text-muted/90">
                      <ArrowRight className="h-3.5 w-3.5 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {PROJECT_02.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted/80 bg-background/80 border border-border/80 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  href={PROJECT_02.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonBaseStyles, buttonVariants.outline, "gap-2 text-xs font-mono")}
                >
                  <GitBranch className="h-3.5 w-3.5 text-blue-400" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                </Link>
              </div>
            </div>

            {/* Architecture Visual 02 */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <Card className="w-full bg-[#0c0e14]/90 p-5 md:p-7 border-border/80 flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.5)] font-mono text-xs rounded-xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/50 text-[11px]">
                  <span className="text-muted/70 uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-blue-400" />
                    Terraform Multi-Env State Engine
                  </span>
                  <span className="text-blue-400 text-[10px] font-mono">
                    hashicorp/terraform
                  </span>
                </div>
                
                <div className="flex flex-col items-center space-y-4 w-full">
                  <div className="flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 px-4 py-2 rounded-md text-purple-300 font-semibold w-full max-w-sm justify-center">
                    <FileCode className="h-4 w-4 text-purple-400" /> Reusable Terraform Modules
                  </div>
                  
                  <ArrowDown className="h-4 w-4 text-muted/40" />
                  
                  {/* Environments Grid */}
                  <div className="grid grid-cols-1 gap-2.5 w-full max-w-sm">
                    {PROJECT_02.environments.map((env) => (
                      <div 
                        key={env.name} 
                        className="border border-border/70 bg-[#080a0f]/80 rounded-md p-3 hover:border-blue-500/40 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-blue-400" />
                          <span className="text-foreground font-bold text-xs">{env.name}</span>
                        </div>
                        <div className="text-muted/80 text-[11px] truncate">{env.spec}</div>
                      </div>
                    ))}
                  </div>

                  <ArrowDown className="h-4 w-4 text-muted/40" />

                  {/* Remote State & Locking block */}
                  <div className="border border-blue-500/30 bg-blue-500/5 rounded-md p-4 flex flex-col items-center text-center max-w-sm w-full">
                    <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs mb-1">
                      <Lock className="h-3.5 w-3.5 text-blue-400" />
                      Remote Backend Architecture
                    </div>
                    <div className="text-muted/80 text-[11px]">
                      Amazon S3 (Encrypted State) + DynamoDB (State Locking)
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <div className="w-full h-px bg-border/50" />

          {/* PROJECT 03 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
          >
            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 rounded">
                  {PROJECT_03.id}
                </span>
                <span className="text-xs font-mono text-muted/70 tracking-wide">
                  {PROJECT_03.label}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                {PROJECT_03.title}
              </h3>
              
              <p className="text-muted text-base leading-relaxed mb-4">
                {PROJECT_03.description}
              </p>
              
              <p className="text-muted/80 text-sm leading-relaxed mb-8">
                {PROJECT_03.details}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-foreground/90 mb-4 uppercase tracking-wider font-mono">
                  Focus Areas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_03.capabilities.map((item) => (
                    <li key={item} className="flex items-start text-xs sm:text-sm text-muted/90">
                      <ArrowRight className="h-3.5 w-3.5 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {PROJECT_03.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted/80 bg-background/80 border border-border/80 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  href={PROJECT_03.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonBaseStyles, buttonVariants.outline, "gap-2 text-xs font-mono")}
                >
                  <GitBranch className="h-3.5 w-3.5 text-blue-400" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                </Link>
              </div>
            </div>

            {/* Architecture Visual 03 */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <Card className="w-full bg-[#0c0e14]/90 p-5 md:p-7 border-border/80 flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.5)] font-mono text-xs rounded-xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/50 text-[11px]">
                  <span className="text-muted/70 uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-cyan-400" />
                    Docker Bridge Network Topology
                  </span>
                  <span className="text-cyan-400 text-[10px]">
                    docker-compose
                  </span>
                </div>
                
                <div className="flex flex-col items-center space-y-5 w-full">
                  <div className="w-full max-w-sm border border-border/80 bg-[#080a0f]/80 rounded-lg p-5 flex flex-col relative items-center hover:border-blue-500/40 transition-colors">
                    <div className="absolute -top-3 bg-background px-2.5 py-0.5 text-[10px] text-muted-foreground border border-border rounded-md flex items-center gap-1.5 font-mono">
                      <Server className="h-3 w-3 text-blue-400" /> Linux Docker Engine
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-3">
                      <div className="border border-border/60 bg-background/90 p-4 rounded-md flex flex-col items-center hover:border-cyan-400/50 transition-colors">
                        <MonitorPlay className="h-6 w-6 text-cyan-400 mb-2" />
                        <div className="text-center font-semibold text-foreground text-xs">Flask Container</div>
                        <div className="text-[10px] text-muted/60 mt-1 font-mono">Port: 5000</div>
                      </div>
                      
                      <div className="border border-border/60 bg-background/90 p-4 rounded-md flex flex-col items-center hover:border-emerald-400/50 transition-colors">
                        <Database className="h-6 w-6 text-emerald-400 mb-2" />
                        <div className="text-center font-semibold text-foreground text-xs">MySQL Container</div>
                        <div className="text-[10px] text-muted/60 mt-1 font-mono">Port: 3306</div>
                      </div>
                    </div>
                    
                    <div className="w-full mt-5">
                      <div className="border border-dashed border-cyan-500/40 bg-cyan-500/5 w-full rounded-md p-3 text-center text-cyan-300 flex items-center justify-center gap-2 text-xs">
                        <Network className="h-4 w-4 text-cyan-400" />
                        <span>Isolated User-Defined Bridge Network</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
