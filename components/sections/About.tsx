"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PRINCIPLES = [
  {
    id: "01",
    title: "AUTOMATE FIRST",
    description: "Prefer repeatable infrastructure and workflows over manual configuration.",
  },
  {
    id: "02",
    title: "DEFINE INFRASTRUCTURE AS CODE",
    description: "Use Terraform to make infrastructure explicit, version-controlled and reproducible.",
  },
  {
    id: "03",
    title: "CONTAINERIZE & ORCHESTRATE",
    description: "Use Docker for consistent application environments and Kubernetes for workload orchestration.",
  },
  {
    id: "04",
    title: "OBSERVE WHAT YOU BUILD",
    description: "Use monitoring and observability tools to understand system behavior and identify issues.",
  },
];

const FOCUS_ITEMS = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "CI/CD",
  "DevSecOps",
  "Prometheus",
  "Grafana",
  "Linux",
];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function About() {
  return (
    <Section id="about" className="bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Main About */}
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="sticky top-32"
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wider text-muted backdrop-blur-sm">
                ABOUT
              </div>
              
              <SectionHeading className="mb-8">Building systems by understanding how they work.</SectionHeading>
              
              <div className="space-y-6 text-base md:text-lg text-muted leading-relaxed">
                <p>
                  I'm a BCA graduate focused on DevOps and cloud infrastructure, with hands-on experience building projects around AWS, Terraform, Docker and Kubernetes.
                </p>
                <p>
                  I enjoy understanding how infrastructure, containers and deployment workflows fit together — from provisioning cloud resources with Infrastructure as Code to running containerized workloads on Kubernetes.
                </p>
                <p>
                  My current focus is strengthening my skills in cloud infrastructure, automation, CI/CD, Kubernetes and observability while continuing to build practical projects.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Principles, Focus, Education */}
          <div className="lg:w-1/2 flex flex-col space-y-16">
            
            {/* Principles */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeUpVariant} className="text-sm font-semibold text-foreground mb-8 uppercase tracking-wider">
                How I approach infrastructure.
              </motion.h3>
              
              <div className="space-y-8">
                {PRINCIPLES.map((item) => (
                  <motion.div key={item.id} variants={fadeUpVariant} className="flex flex-col">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs font-mono text-muted/60">{item.id}</span>
                      <h4 className="text-base font-bold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted text-sm leading-relaxed pl-8 md:pl-9">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Currently focused on */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
                Currently focused on
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {FOCUS_ITEMS.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-muted-foreground bg-background/50 border border-border rounded-md hover:text-foreground hover:border-muted transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education Metadata */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="pt-8 border-t border-border/50"
            >
              <h3 className="text-xs font-semibold text-muted/60 mb-2 uppercase tracking-wider">
                Education
              </h3>
              <div className="text-sm text-foreground font-medium">
                BCA — Computer Applications
              </div>
              <div className="text-xs text-muted mt-1">
                2025
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
