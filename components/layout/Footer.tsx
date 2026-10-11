"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="w-full bg-[#050608] border-t border-border/60 py-12 md:py-16 mt-auto relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Terminal className="h-3 w-3" />
              </div>
              <span className="text-base font-bold tracking-tight text-foreground font-mono">
                AMAN SHAIKH
              </span>
            </div>
            <p className="text-xs text-muted/70 font-mono">
              Entry-Level DevOps Engineer • Pune, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs font-mono font-medium text-muted">
            <Link 
              href="https://github.com/Shaikh-aman-47"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/shaikh-aman-322216376"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="mailto:shaikhaman2654@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </Link>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/70 bg-card/40 hover:bg-card text-muted hover:text-foreground text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ml-auto md:ml-2"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] font-mono text-muted/50 pt-8 border-t border-border/40">
          <div>
            &copy; 2026 Aman Shaikh. All rights reserved.
          </div>
          <div className="text-muted/60">
            Built with Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </Container>
    </footer>
  );
}
