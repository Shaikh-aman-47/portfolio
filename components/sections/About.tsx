"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { 
  Bot, 
  FileCode2, 
  Boxes, 
  Activity, 
  GraduationCap, 
  Compass, 
  Terminal 
} from "lucide-react";

const PRINCIPLES = [
  {
    id: "01",
    icon: Bot,
    title: "AUTOMATE FIRST",
    description: "Prefer repeatable infrastructure and automated pipelines over manual, error-prone console actions.",
  },
  {
    id: "02",
    icon: FileCode2,
    title: "DEFINE INFRASTRUCTURE AS CODE",
    description: "Use Terraform to make infrastructure explicit, version-controlled, auditable, and reproducible across environments.",
  },
  {
    id: "03",
    icon: Boxes,
    title: "CONTAINERIZE & ORCHESTRATE",
    description: "Package runtimes with Docker for environment parity and orchestrate resilient microservices with Kubernetes.",
  },
  {
    id: "04",
    icon: Activity,
    title: "OBSERVE WHAT YOU BUILD",
    description: "Instrument systems with Prometheus, Grafana, and structured logs to understand cluster health and detect issues early.",
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
  "Linux / Bash",
];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
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
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Main About */}
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:sticky lg:top-28"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-sm">
                <span>ABOUT & PHILOSOPHY</span>
              </div>
              
              <SectionHeading className="mb-8">
                Building systems by understanding how they work.
              </SectionHeading>
              
              <div className="space-y-5 text-base md:text-lg text-muted leading-relaxed">
                <p>
                  I'm a BCA graduate focused on DevOps and cloud infrastructure, with hands-on experience building projects around <span className="text-foreground font-medium">AWS</span>, <span className="text-foreground font-medium">Terraform</span>, <span className="text-foreground font-medium">Docker</span>, and <span className="text-foreground font-medium">Kubernetes</span>.
                </p>
                <p>
                  I enjoy understanding how infrastructure, containers and deployment workflows fit together — from provisioning cloud resources with Infrastructure as Code to running containerized workloads on Kubernetes clusters.
                </p>
                <p className="text-muted/80 text-sm md:text-base">
                  My current focus is strengthening my skills in cloud infrastructure, automation, CI/CD, Kubernetes and observability while continuing to build practical, real-world projects.
                </p>
              </div>

              {/* Education Box */}
              <div className="mt-10 p-5 rounded-xl border border-border/80 bg-[#0c0e14]/70 backdrop-blur-sm max-w-md">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted/60 uppercase tracking-wider">Education</div>
                    <div className="text-sm font-bold text-foreground">BCA — Bachelor of Computer Applications</div>
                    <div className="text-xs text-muted/80 font-mono mt-0.5">Graduated: 2025 • Pune, India</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Principles & Focus */}
          <div className="lg:w-1/2 flex flex-col space-y-14">
            
            {/* Principles */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 mb-6 uppercase tracking-wider">
                <Compass className="h-4 w-4" />
                <span>How I approach infrastructure</span>
              </div>
              
              <div className="space-y-4">
                {PRINCIPLES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.id} variants={fadeUpVariant}>
                      <Card className="p-5 md:p-6 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 border-border/80 hover:border-blue-500/40 hover:shadow-[0_8px_25px_rgba(59,130,246,0.08)] transition-all duration-300 rounded-xl group">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-1.5">
                              <h4 className="text-sm font-bold text-foreground group-hover:text-blue-300 transition-colors">
                                {item.title}
                              </h4>
                              <span className="text-[11px] font-mono text-muted/40">{item.id}</span>
                            </div>
                            <p className="text-muted/80 text-xs sm:text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Currently focused on */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="p-6 rounded-xl border border-border/70 bg-[#0c0e14]/60"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                <Terminal className="h-3.5 w-3.5" />
                <span>Currently focused on</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {FOCUS_ITEMS.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-background/80 border border-border/70 rounded-lg hover:text-foreground hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
