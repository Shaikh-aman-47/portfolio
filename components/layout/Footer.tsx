"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border/50 py-12 md:py-16 mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          <div className="text-xl font-bold tracking-tight text-foreground">
            AMAN SHAIKH
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 text-sm font-medium text-muted-foreground">
            <Link 
              href="https://github.com/Shaikh-aman-47"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/shaikh-aman-322216376"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="mailto:shaikhaman2654@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted/60 pt-8 border-t border-border/30">
          <div>
            &copy; 2026 Aman Shaikh
          </div>
          <div>
            Built with Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </Container>
    </footer>
  );
}
