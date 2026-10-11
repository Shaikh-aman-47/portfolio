"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  ArrowUpRight, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

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

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("shaikhaman2654@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <Section id="contact" className="bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.04] blur-[150px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Main Contact Intent */}
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-sm">
                <span>GET IN TOUCH</span>
              </div>
              
              <SectionHeading className="mb-6 leading-tight">
                Let's build<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  something useful.
                </span>
              </SectionHeading>
              
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-lg">
                I'm open to entry-level DevOps, cloud and infrastructure opportunities where I can keep learning, contribute to real systems and grow through hands-on engineering.
              </p>

              {/* Availability Box */}
              <div className="p-4 rounded-xl border border-border/80 bg-[#0c0e14]/70 max-w-sm flex items-center gap-3.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="text-xs">
                  <div className="text-foreground font-semibold">Active & Available</div>
                  <div className="text-muted/70 font-mono mt-0.5">Prompt response via Email or LinkedIn</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Contact Action Cards */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col space-y-4"
            >
              {/* 01: Email Card with Copy button */}
              <motion.div variants={fadeUpVariant}>
                <div className="group relative rounded-xl border border-border/80 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300 p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Link 
                      href="mailto:shaikhaman2654@gmail.com"
                      className="flex-grow flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                    >
                      <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                        01
                      </span>
                      <div>
                        <div className="text-xs font-mono text-muted/60 uppercase tracking-wider">Email</div>
                        <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-blue-300 transition-colors">
                          shaikhaman2654@gmail.com
                        </div>
                      </div>
                    </Link>

                    {/* Action buttons: Copy & Mailto */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-lg border border-border/70 bg-background/80 hover:bg-card text-muted hover:text-foreground transition-all duration-200 text-xs font-mono flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        title="Copy email to clipboard"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span className="text-[11px] hidden sm:inline">Copy</span>
                          </>
                        )}
                      </button>

                      <Link
                        href="mailto:shaikhaman2654@gmail.com"
                        className="p-2 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label="Send email"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 02: LinkedIn Card */}
              <motion.div variants={fadeUpVariant}>
                <Link
                  href="https://www.linkedin.com/in/shaikh-aman-322216376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border/80 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300 p-5 md:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                        02
                      </span>
                      <div>
                        <div className="text-xs font-mono text-muted/60 uppercase tracking-wider">LinkedIn</div>
                        <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-blue-300 transition-colors truncate">
                          linkedin.com/in/shaikh-aman-322216376
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-2 rounded-lg border border-border/70 bg-background/80 group-hover:border-blue-500/40 text-muted group-hover:text-blue-400 transition-colors">
                      <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* 03: GitHub Card */}
              <motion.div variants={fadeUpVariant}>
                <Link
                  href="https://github.com/Shaikh-aman-47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border/80 bg-[#0c0e14]/70 hover:bg-[#10131d]/90 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300 p-5 md:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                        03
                      </span>
                      <div>
                        <div className="text-xs font-mono text-muted/60 uppercase tracking-wider">GitHub</div>
                        <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-blue-300 transition-colors truncate">
                          github.com/Shaikh-aman-47
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-2 rounded-lg border border-border/70 bg-background/80 group-hover:border-blue-500/40 text-muted group-hover:text-blue-400 transition-colors">
                      <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
