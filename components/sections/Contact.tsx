"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CONTACT_LINKS = [
  {
    id: "01",
    label: "Email",
    value: "shaikhaman2654@gmail.com",
    href: "mailto:shaikhaman2654@gmail.com",
  },
  {
    id: "02",
    label: "LinkedIn",
    value: "linkedin.com/in/shaikh-aman-322216376",
    href: "https://www.linkedin.com/in/shaikh-aman-322216376",
  },
  {
    id: "03",
    label: "GitHub",
    value: "github.com/Shaikh-aman-47",
    href: "https://github.com/Shaikh-aman-47",
  },
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

export function Contact() {
  return (
    <Section id="contact" className="bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Main Contact Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wider text-muted backdrop-blur-sm">
                GET IN TOUCH
              </div>
              
              <SectionHeading className="mb-6">Let's build<br />something useful.</SectionHeading>
              
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-md">
                I'm open to entry-level DevOps, cloud and infrastructure opportunities where I can keep learning, contribute to real systems and grow through hands-on engineering.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Contact Links */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col space-y-4 md:space-y-6"
            >
              {CONTACT_LINKS.map((link) => (
                <motion.div key={link.id} variants={fadeUpVariant}>
                  <Link 
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-border/50 bg-card/20 hover:bg-card/60 hover:border-border transition-all duration-300 gap-4"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-mono text-muted/50 group-hover:text-muted transition-colors">{link.id}</span>
                      <span className="text-lg font-semibold text-foreground">{link.label}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                        {link.value}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
