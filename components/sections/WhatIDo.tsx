"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const CAPABILITIES = [
  {
    id: "01",
    title: "Cloud Infrastructure",
    description: "Design and provision AWS infrastructure with a focus on repeatability, scalability and clean resource management.",
    tech: ["AWS", "EC2", "VPC", "IAM", "S3", "EKS", "ECR"],
  },
  {
    id: "02",
    title: "Infrastructure as Code",
    description: "Define and manage cloud infrastructure using Terraform and reusable infrastructure modules.",
    tech: ["Terraform", "Modules", "Remote State", "State Management"],
  },
  {
    id: "03",
    title: "Containers & Kubernetes",
    description: "Containerize applications and deploy workloads using Docker and Kubernetes, including Amazon EKS.",
    tech: ["Docker", "Kubernetes", "EKS", "Helm", "Kustomize"],
  },
  {
    id: "04",
    title: "CI/CD & Automation",
    description: "Build automated workflows that move code from version control through testing, security checks and deployment.",
    tech: ["GitHub Actions", "Jenkins", "Argo CD", "SonarQube", "Trivy"],
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
      ease: "easeOut",
    }
  },
};

export function WhatIDo() {
  return (
    <Section id="what-i-do" className="bg-background relative overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wider text-muted backdrop-blur-sm"
          >
            WHAT I DO
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-6">Infrastructure, automation and delivery.</SectionHeading>
            <p className="text-lg text-muted leading-relaxed">
              I focus on building reliable cloud infrastructure, containerized workloads and automated delivery pipelines.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CAPABILITIES.map((item) => (
            <motion.div key={item.id} variants={cardVariant} className="h-full">
              <Card className="h-full p-8 bg-card/40 hover:bg-card transition-colors duration-300 border-border group flex flex-col">
                <div className="text-sm font-mono text-muted/60 mb-6 group-hover:text-foreground transition-colors duration-300">
                  {item.id}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-muted-foreground/80 bg-background/50 px-2 py-1 rounded-sm border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
