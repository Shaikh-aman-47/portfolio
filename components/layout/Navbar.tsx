"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

// Set to true only if a valid resume file is present in public/resume.pdf
const HAS_RESUME = false;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (pathname !== "/") return;

      // 1. Top of page: Home is active
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      // 2. Bottom of page: always highlight Contact
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isBottom) {
        setActiveSection("/#contact");
        return;
      }

      // 3. Focal line threshold: 160px from viewport top accounts for fixed navbar (64px) + scroll-mt (96px)
      const focalPoint = 160;

      // Check sections from bottom to top in actual DOM order
      const sectionsReversed = [
        { id: "contact", href: "/#contact" },
        { id: "about", href: "/#about" },
        { id: "projects", href: "/#projects" },
        { id: "skills", href: "/#skills" },
      ];

      for (const { id, href } of sectionsReversed) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalPoint) {
            setActiveSection(href);
            return;
          }
        }
      }

      // If Skills has not reached focal point yet, user is in Home (Hero/WhatIDo)
      setActiveSection("/");
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname !== "/") return;
      if (isNavigatingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    const clearManualNavigation = () => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        if (navigationTimeoutRef.current) {
          clearTimeout(navigationTimeoutRef.current);
          navigationTimeoutRef.current = null;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", clearManualNavigation, { passive: true });
    window.addEventListener("touchstart", clearManualNavigation, { passive: true });

    // Initial check on mount or when hash changes
    if (window.location.hash) {
      const hashHref = `/${window.location.hash}`;
      const valid = NAV_LINKS.some((l) => l.href === hashHref);
      if (valid) {
        setActiveSection(hashHref);
      } else {
        updateActiveSection();
      }
    } else {
      updateActiveSection();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", clearManualNavigation);
      window.removeEventListener("touchstart", clearManualNavigation);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      if (href === "/") {
        e.preventDefault();
        isNavigatingRef.current = true;
        setActiveSection("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
        if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = setTimeout(() => {
          isNavigatingRef.current = false;
        }, 800);
      } else if (href.startsWith("/#")) {
        const targetId = href.replace("/#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          isNavigatingRef.current = true;
          setActiveSection(href);
          targetEl.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
          if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
          navigationTimeoutRef.current = setTimeout(() => {
            isNavigatingRef.current = false;
          }, 800);
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
          isScrolled
            ? "bg-[#07080b]/85 backdrop-blur-md border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Identity */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1 px-1.5"
                onClick={(e) => handleNavClick(e, "/")}
              >
                <div className="h-7 w-7 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all duration-200">
                  <Terminal className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs tracking-wider text-foreground font-bold">AMAN SHAIKH</span>
                  <span className="text-[10px] text-muted tracking-widest font-mono uppercase">DevOps</span>
                </div>
              </Link>

              {/* Status Beacon */}
              <div className="hidden sm:inline-flex items-center gap-2 pl-3 border-l border-border/60 text-[11px] text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-muted/90">Available for Roles</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const isActive =
                  activeSection === link.href ||
                  (pathname === "/" && link.href === "/" && !activeSection) ||
                  (pathname.startsWith("/projects") && link.href === "/#projects");
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                      isActive
                        ? "text-foreground bg-blue-500/15 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                        : "text-muted hover:text-foreground hover:bg-card/60"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right: Resume (conditional) + GitHub + LinkedIn */}
            <div className="hidden md:flex items-center gap-2.5">
              {HAS_RESUME && (
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-blue-300 py-1.5 px-3 rounded-lg border border-blue-500/40 bg-blue-500/15 hover:bg-blue-500/25 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <FileDown className="mr-1.5 h-3.5 w-3.5" />
                  Resume
                </Link>
              )}

              <Link
                href="https://github.com/Shaikh-aman-47"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-muted hover:text-foreground transition-colors py-1.5 px-3 rounded-lg border border-border/50 bg-card/30 hover:bg-card/80 hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                GitHub <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-muted/70" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shaikh-aman-322216376"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-foreground py-1.5 px-3 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                LinkedIn <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-blue-400" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 text-foreground hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#07080b]/95 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-8"
          >
            <nav className="flex flex-col space-y-3 pt-4">
              <div className="flex items-center gap-2 mb-2 pb-3 border-b border-border/50 text-xs font-mono text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Roles
              </div>

              {NAV_LINKS.map((link) => {
                const isActive =
                  activeSection === link.href ||
                  (pathname === "/" && link.href === "/" && !activeSection) ||
                  (pathname.startsWith("/projects") && link.href === "/#projects");
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-xl font-semibold transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm",
                      isActive ? "text-blue-400" : "text-foreground hover:text-blue-400"
                    )}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-3 pt-6 border-t border-border/60">
              {HAS_RESUME && (
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between p-3 rounded-lg border border-blue-500/40 bg-blue-500/15 text-sm font-medium text-blue-300 hover:bg-blue-500/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="h-4 w-4" /> Download Resume
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}

              <Link
                href="https://github.com/Shaikh-aman-47"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3 rounded-lg border border-border bg-card/40 text-sm font-medium text-foreground hover:bg-card"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shaikh-aman-322216376"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3 rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-300 hover:bg-blue-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
