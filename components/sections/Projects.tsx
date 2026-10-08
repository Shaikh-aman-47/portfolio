"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowDown, ArrowRight, GitBranch, ExternalLink, Activity, Box, Database, Server, GitMerge, FileCode, MonitorPlay, Cloud, Network } from "lucide-react";
import Link from "next/link";
import { buttonBaseStyles, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PROJECT_01 = {
  id: "01",
  title: "Three-Tier Application Deployment on AWS EKS",
  label: "AWS / Kubernetes / Terraform",
  description: "Provisioned and deployed a three-tier application environment on Amazon EKS using Terraform, Docker and Kubernetes.",
  details: "Provisioned AWS infrastructure for an Amazon EKS environment using Terraform, containerized application components with Docker, and deployed the workloads to Kubernetes using Deployments, Services, and Secrets.",
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
  description: "Built reusable Terraform infrastructure across development, staging and production environments.",
  details: "Created reusable Terraform modules to provision AWS infrastructure across separate development, staging and production environments. The infrastructure included EC2 instances, S3 buckets and DynamoDB tables, with Terraform remote state using Amazon S3 and DynamoDB state locking.",
  capabilities: [
    "Terraform modules",
    "Variables",
    "Outputs",
    "Environment separation",
    "Remote backend",
    "S3 state",
    "DynamoDB state locking",
    "Infrastructure reuse",
  ],
  tech: ["Terraform", "AWS", "EC2", "S3", "DynamoDB", "VPC", "Terraform Modules"],
  environments: [
    { name: "DEV", resources: "2 × EC2 t2.micro • S3 • DynamoDB" },
    { name: "STAGING", resources: "1 × EC2 t2.medium • S3 • DynamoDB" },
    { name: "PRODUCTION", resources: "1 × EC2 t2.small • S3 • DynamoDB" },
  ]
};

const PROJECT_03 = {
  id: "03",
  title: "Containerized Two-Tier Flask Application",
  label: "Docker / Flask / MySQL",
  description: "Containerized a Flask application and MySQL database using Docker and Docker networking.",
  details: "Built a two-tier application consisting of a Flask application and MySQL database running as separate Docker containers. Configured container networking and service communication to demonstrate containerized application architecture.",
  capabilities: [
    "Docker images",
    "Containers",
    "Container networking",
    "Service communication",
    "Database containerization",
  ],
  tech: ["Docker", "Docker Compose", "Flask", "MySQL", "Docker Networking"],
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function Projects() {
  return (
    <Section id="work" className="bg-background relative overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wider text-muted backdrop-blur-sm"
          >
            SELECTED WORK
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-6">Projects built to learn by doing.</SectionHeading>
            <p className="text-lg text-muted leading-relaxed">
              Hands-on projects focused on cloud infrastructure, containerization, Kubernetes and infrastructure automation.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* PROJECT 01 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          >
            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="text-sm font-mono text-muted/60 mb-4">{PROJECT_01.id}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{PROJECT_01.title}</h3>
              <p className="text-sm font-medium text-emerald-500 mb-6">{PROJECT_01.label}</p>
              
              <p className="text-muted text-base leading-relaxed mb-6">{PROJECT_01.description}</p>
              <p className="text-muted/80 text-sm leading-relaxed mb-8">{PROJECT_01.details}</p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Key Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_01.capabilities.map((item) => (
                    <li key={item} className="flex items-start text-sm text-muted">
                      <ArrowRight className="h-4 w-4 mr-2 text-muted/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {PROJECT_01.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-muted-foreground bg-card border border-border px-2 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <Card className="w-full bg-card/40 p-6 md:p-8 border-border flex flex-col items-center shadow-lg font-mono text-xs overflow-hidden">
                <div className="text-muted/50 mb-6 uppercase tracking-widest text-[10px]">Architecture Visual</div>
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full justify-center">
                  
                  {/* INFRASTRUCTURE */}
                  <div className="flex flex-col items-center w-full md:w-1/3">
                    <div className="text-[10px] text-muted/80 mb-4 font-semibold tracking-wider">INFRASTRUCTURE</div>
                    <div className="flex flex-col items-center space-y-2 w-full">
                      <div className="flex items-center gap-2 border border-border/50 bg-background px-3 py-2 rounded-md w-full justify-center text-muted-foreground"><FileCode className="h-4 w-4" /> Terraform</div>
                      <ArrowDown className="h-4 w-4 text-muted/30" />
                      <div className="flex items-center gap-2 border border-border/50 bg-background px-3 py-2 rounded-md w-full justify-center text-muted-foreground"><Cloud className="h-4 w-4" /> AWS VPC</div>
                      <ArrowDown className="h-4 w-4 text-muted/30" />
                      <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 rounded-md w-full justify-center text-emerald-500"><Server className="h-4 w-4" /> Amazon EKS</div>
                    </div>
                  </div>

                  {/* APPLICATION CONTAINER WORKFLOW */}
                  <div className="flex flex-col items-center w-full md:w-1/3">
                    <div className="text-[10px] text-muted/80 mb-4 font-semibold tracking-wider text-center">APP WORKFLOW</div>
                    <div className="flex flex-col items-center space-y-2 w-full">
                      <div className="flex items-center gap-2 border border-border/50 bg-background px-3 py-2 rounded-md w-full justify-center text-muted-foreground"><Box className="h-4 w-4" /> Docker</div>
                      <ArrowDown className="h-4 w-4 text-muted/30" />
                      <div className="flex items-center gap-2 border border-border/50 bg-background px-3 py-2 rounded-md w-full justify-center text-muted-foreground"><Database className="h-4 w-4" /> Amazon ECR</div>
                      <ArrowDown className="h-4 w-4 text-muted/30" />
                      <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 rounded-md w-full justify-center text-emerald-500 mb-2"><Server className="h-4 w-4" /> Kubernetes</div>
                      <ArrowDown className="h-4 w-4 text-muted/30" />
                      <div className="flex flex-col items-center space-y-2 w-full border border-border/30 bg-background/30 rounded-md p-2">
                        <div className="border border-border/50 bg-background p-1.5 rounded-sm w-full text-center truncate">Frontend</div>
                        <ArrowDown className="h-3 w-3 text-muted/30" />
                        <div className="border border-border/50 bg-background p-1.5 rounded-sm w-full text-center truncate">Backend</div>
                        <ArrowDown className="h-3 w-3 text-muted/30" />
                        <div className="border border-border/50 bg-background p-1.5 rounded-sm w-full text-center truncate">MongoDB</div>
                      </div>
                    </div>
                  </div>

                  {/* OBSERVABILITY */}
                  <div className="flex flex-col items-center w-full md:w-1/3">
                    <div className="text-[10px] text-muted/80 mb-4 font-semibold tracking-wider">OBSERVABILITY</div>
                    <div className="flex flex-col items-center space-y-2 w-full">
                      <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 rounded-md w-full justify-center text-emerald-500"><Server className="h-4 w-4" /> Amazon EKS</div>
                      <ArrowDown className="h-4 w-4 text-muted/30" />
                      <div className="flex items-center gap-2 border border-border/50 bg-background px-3 py-2 rounded-md w-full justify-center text-muted-foreground"><Activity className="h-4 w-4" /> Grafana</div>
                    </div>
                  </div>

                </div>
              </Card>
            </div>
          </motion.div>

          <div className="w-full h-px bg-border/50 hidden md:block" />

          {/* PROJECT 02 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16"
          >
            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="text-sm font-mono text-muted/60 mb-4">{PROJECT_02.id}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{PROJECT_02.title}</h3>
              <p className="text-sm font-medium text-emerald-500 mb-6">{PROJECT_02.label}</p>
              
              <p className="text-muted text-base leading-relaxed mb-6">{PROJECT_02.description}</p>
              <p className="text-muted/80 text-sm leading-relaxed mb-8">{PROJECT_02.details}</p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Core Concepts</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_02.capabilities.map((item) => (
                    <li key={item} className="flex items-start text-sm text-muted">
                      <ArrowRight className="h-4 w-4 mr-2 text-muted/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {PROJECT_02.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-muted-foreground bg-card border border-border px-2 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <Card className="w-full bg-card/40 p-6 md:p-8 border-border flex flex-col items-center shadow-lg font-mono text-xs overflow-hidden h-full">
                <div className="text-muted/50 mb-6 uppercase tracking-widest text-[10px]">Architecture Visual</div>
                
                <div className="flex flex-col items-center space-y-4 w-full h-full justify-center">
                  <div className="flex items-center gap-2 border border-border/50 bg-background px-4 py-2 rounded-md hover:border-muted transition-colors duration-300"><FileCode className="h-4 w-4" /> Terraform</div>
                  <ArrowDown className="h-4 w-4 text-muted/30" />
                  <div className="flex items-center gap-2 border border-border/50 bg-background px-4 py-2 rounded-md hover:border-muted transition-colors duration-300"><Box className="h-4 w-4" /> Reusable Modules</div>
                  <ArrowDown className="h-4 w-4 text-muted/30" />
                  
                  <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
                    {PROJECT_02.environments.map((env) => (
                      <div key={env.name} className="border border-border/50 bg-background rounded-md p-3 hover:border-muted transition-colors duration-300 flex flex-col">
                        <div className="text-foreground font-semibold mb-1">{env.name}</div>
                        <div className="text-muted/70 text-[10px] md:text-xs truncate">{env.resources}</div>
                      </div>
                    ))}
                  </div>

                  <ArrowDown className="h-4 w-4 text-muted/30 mt-4" />
                  <div className="border border-border/50 bg-background/50 rounded-md p-4 flex flex-col items-center text-center max-w-xs w-full">
                    <div className="text-muted mb-2">Remote State</div>
                    <div className="text-foreground text-[10px] md:text-xs">S3 + DynamoDB locking</div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <div className="w-full h-px bg-border/50 hidden md:block" />

          {/* PROJECT 03 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          >
            {/* Project Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="text-sm font-mono text-muted/60 mb-4">{PROJECT_03.id}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{PROJECT_03.title}</h3>
              <p className="text-sm font-medium text-emerald-500 mb-6">{PROJECT_03.label}</p>
              
              <p className="text-muted text-base leading-relaxed mb-6">{PROJECT_03.description}</p>
              <p className="text-muted/80 text-sm leading-relaxed mb-8">{PROJECT_03.details}</p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Focus Areas</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_03.capabilities.map((item) => (
                    <li key={item} className="flex items-start text-sm text-muted">
                      <ArrowRight className="h-4 w-4 mr-2 text-muted/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {PROJECT_03.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-muted-foreground bg-card border border-border px-2 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <Card className="w-full bg-card/40 p-6 md:p-8 border-border flex flex-col items-center shadow-lg font-mono text-xs overflow-hidden h-full">
                <div className="text-muted/50 mb-6 uppercase tracking-widest text-[10px]">Architecture Visual</div>
                
                <div className="flex flex-col items-center space-y-6 w-full h-full justify-center">
                  
                  <div className="w-full max-w-sm border border-border bg-background/50 rounded-lg p-6 flex flex-col relative items-center hover:border-muted transition-colors duration-300">
                    <div className="absolute -top-3 bg-background px-3 text-[10px] text-muted border border-border rounded-sm flex items-center gap-1">
                      <Server className="h-3 w-3" /> Docker Host
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full mt-2 justify-center items-center">
                      <div className="border border-border/50 bg-background px-4 py-6 rounded-md flex flex-col items-center w-32 hover:border-muted transition-colors duration-300">
                        <MonitorPlay className="h-6 w-6 text-emerald-500 mb-2" />
                        <div className="text-center font-medium">Flask Container</div>
                      </div>
                      
                      <div className="border border-border/50 bg-background px-4 py-6 rounded-md flex flex-col items-center w-32 hover:border-muted transition-colors duration-300">
                        <Database className="h-6 w-6 text-emerald-500 mb-2" />
                        <div className="text-center font-medium">MySQL Container</div>
                      </div>
                    </div>
                    
                    <div className="w-full flex justify-center mt-6">
                      <div className="border border-dashed border-border/70 bg-background/30 w-full rounded-md p-3 text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Network className="h-4 w-4" /> Docker Network
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
