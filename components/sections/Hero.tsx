"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { buttonBaseStyles, buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const STAGGER_DELAY = 0.1;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-foreground/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy */}
        <div className="flex flex-col items-start max-w-2xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wider text-muted backdrop-blur-sm"
          >
            ENTRY-LEVEL DEVOPS ENGINEER
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-[1.1]"
          >
            BUILD.
            <br />
            AUTOMATE.
            <br />
            DEPLOY.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-muted mb-3 max-w-lg leading-relaxed"
          >
            I build and automate cloud infrastructure using AWS, Terraform, Docker and Kubernetes.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-muted/80 mb-6 max-w-lg leading-relaxed"
          >
            Focused on infrastructure automation, containerized workloads and reliable CI/CD workflows.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-xs sm:text-sm font-medium text-foreground tracking-widest uppercase mb-8 opacity-90"
          >
            AWS &bull; TERRAFORM &bull; DOCKER &bull; KUBERNETES &bull; CI/CD
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link 
              href="#work" 
              className={cn(buttonBaseStyles, buttonVariants.primary, "group")}
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
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Visual */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
        >
          <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div className="text-xs text-muted font-sans">Example infrastructure workflow</div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 flex flex-col space-y-4">
              <div className="flex items-center text-muted-foreground">
                <span className="text-foreground mr-2">$</span> terraform apply
              </div>
              
              <div className="space-y-3 pl-2">
                <div className="flex items-center justify-between text-muted">
                  <span>aws_vpc.main</span>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>aws_eks_cluster</span>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>aws_ecr_repository</span>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>kubernetes_deploy</span>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4 }}
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                  </motion.div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="pt-2 text-foreground flex items-center"
              >
                <Check className="h-4 w-4 text-emerald-500 mr-2" /> workflow complete
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-2 w-2 h-4 bg-foreground inline-block"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
