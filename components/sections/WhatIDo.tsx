"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Cloud, FileCode, Boxes, GitBranch, ArrowUpRight } from "lucide-react";

const CAPABILITIES = [
  {
    id: "01",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Design and provision AWS infrastructure with a focus on repeatability, security boundaries, and clean resource management.",
    tech: ["AWS", "EC2", "VPC", "IAM", "S3", "EKS", "ECR"],
  },
  {
    id: "02",
    icon: FileCode,
    title: "Infrastructure as Code",
    description:
      "Define and manage cloud environments using Terraform modules, version-controlled remote states, and automated drift prevention.",
    tech: ["Terraform", "Modules", "Remote Backend", "S3 & DynamoDB"],
  },
  {
    id: "03",
    icon: Boxes,
    title: "Containers & Kubernetes",
    description:
      "Package application runtimes into minimal Docker containers and orchestrate microservices reliably across Amazon EKS clusters.",
    tech: ["Docker", "Kubernetes", "Amazon EKS", "Helm", "Kustomize"],
  },
  {
    id: "04",
    icon: GitBranch,
    title: "CI/CD & Automation",
    description:
      "Construct automated delivery pipelines moving code seamlessly from commit to image scan, artifact release, and GitOps rollout.",
    tech: ["GitHub Actions", "Jenkins", "Argo CD", "Trivy", "SonarQube"],
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    }
  },
};

export function WhatIDo() {
  return (
    <Section id="what-i-do" className="bg-background relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/[0.03] blur-[120px] pointer-events-none rounded-full" />
      
      <Container className="relative z-10">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-sm"
          >
            <span>ENGINEERING CAPABILITIES</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-4">Infrastructure, automation and delivery.</SectionHeading>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              I focus on building reliable cloud infrastructure, containerized workloads and automated delivery pipelines with modern tooling.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CAPABILITIES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id} variants={cardVariant} className="h-full">
                <Card className="h-full p-7 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 border-border/80 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col rounded-xl">
                  {/* Top: ID and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-muted/50 group-hover:text-blue-400 transition-colors">
                      {item.id}
                    </span>
                    <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted/80 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/40">
                    {item.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[11px] font-mono text-muted/90 bg-background/60 px-2 py-0.5 rounded border border-border/60 group-hover:border-border transition-colors"
                      >
                        {t}
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
