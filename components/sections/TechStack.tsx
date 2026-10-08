"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const STACK_CATEGORIES = [
  {
    id: "01",
    title: "Cloud",
    tech: ["AWS", "EC2", "S3", "IAM", "VPC", "EKS", "ECR", "CloudWatch"],
  },
  {
    id: "02",
    title: "Infrastructure",
    tech: ["Terraform", "Terraform Modules", "Remote Backend", "State Management"],
  },
  {
    id: "03",
    title: "Containers & Orchestration",
    tech: ["Docker", "Kubernetes", "Helm", "Kustomize", "Amazon EKS"],
  },
  {
    id: "04",
    title: "CI/CD & DevSecOps",
    tech: ["Jenkins", "GitHub Actions", "Argo CD", "SonarQube", "Trivy", "Nexus"],
  },
  {
    id: "05",
    title: "Systems & Monitoring",
    tech: ["Linux", "Git", "GitHub", "Ansible", "Python", "Prometheus", "Grafana"],
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

const rowVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  },
};

export function TechStack() {
  return (
    <Section id="stack" className="bg-background relative overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wider text-muted backdrop-blur-sm"
          >
            TECH STACK
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-6">Tools I build with.</SectionHeading>
            <p className="text-lg text-muted leading-relaxed">
              A practical stack for cloud infrastructure, automation, containers and observability.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {STACK_CATEGORIES.map((category) => (
            <motion.div key={category.id} variants={rowVariant}>
              <Card className="p-6 md:p-8 bg-card/40 border-border group hover:bg-card transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Category Info */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="text-sm font-mono text-muted/60 mb-2 group-hover:text-foreground transition-colors duration-300">
                      {category.id}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="md:w-2/3 flex flex-wrap gap-2 md:gap-3">
                    {category.tech.map((tech) => (
                      <div 
                        key={tech} 
                        className="px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-muted-foreground bg-background/50 border border-border rounded-md hover:text-foreground hover:border-muted transition-colors duration-200"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
