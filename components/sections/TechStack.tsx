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
  Activity, 
  Wrench,
  CheckCircle2
} from "lucide-react";

const STACK_CATEGORIES = [
  {
    id: "01",
    title: "Cloud Infrastructure",
    subtitle: "AWS Ecosystem",
    icon: Cloud,
    tech: ["AWS", "EC2", "S3", "IAM", "VPC", "EKS", "ECR", "CloudWatch"],
  },
  {
    id: "02",
    title: "Infrastructure as Code",
    subtitle: "Declarative Automation",
    icon: FileCode2,
    tech: ["Terraform", "Terraform Modules", "Remote Backend", "S3 State", "DynamoDB Locking"],
  },
  {
    id: "03",
    title: "Containers & Orchestration",
    subtitle: "Microservices Runtime",
    icon: Boxes,
    tech: ["Docker", "Kubernetes", "Helm", "Kustomize", "Amazon EKS"],
  },
  {
    id: "04",
    title: "CI/CD & DevSecOps",
    subtitle: "Automated Pipelines",
    icon: GitMerge,
    tech: ["GitHub Actions", "Jenkins", "Git", "Ansible", "Argo CD", "SonarQube", "Trivy"],
  },
  {
    id: "05",
    title: "Monitoring & Observability",
    subtitle: "Metrics & Logs",
    icon: Activity,
    tech: ["Prometheus", "Grafana", "CloudWatch Metrics", "Container Insights"],
  },
  {
    id: "06",
    title: "Developer & Core Systems",
    subtitle: "Environment & Scripting",
    icon: Wrench,
    tech: ["Linux / Bash", "Python", "Nexus", "Maven"],
  },
];

const TICKER_ITEMS = [
  "AWS",
  "TERRAFORM",
  "DOCKER",
  "KUBERNETES",
  "AMAZON EKS",
  "HELM",
  "GITHUB ACTIONS",
  "JENKINS",
  "ARGO CD",
  "PROMETHEUS",
  "GRAFANA",
  "LINUX",
  "ANSIBLE",
  "SONARQUBE",
  "TRIVY",
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    <Section id="stack" className="bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
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
        <div className="mb-14 md:mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-sm"
          >
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading className="mb-4">Tools I build with.</SectionHeading>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              A practical stack for cloud infrastructure provisioning, containerized services, automated pipelines, and continuous observability.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {STACK_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={cardVariant} className="h-full">
                <Card className="h-full p-6 md:p-7 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 border-border/80 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col rounded-xl">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-white transition-colors">
                          {category.title}
                        </h3>
                        <div className="text-[11px] font-mono text-muted/60">
                          {category.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted/40">{category.id}</span>
                  </div>

                  <div className="w-full h-px bg-border/50 my-3" />

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 text-xs font-mono text-muted/90 bg-background/60 border border-border/70 rounded-md hover:text-foreground hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-200"
                      >
                        {tech}
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
