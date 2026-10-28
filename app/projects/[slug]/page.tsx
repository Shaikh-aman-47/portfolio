import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  GitBranch, 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  AlertCircle,
  Server
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { buttonBaseStyles, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { PROJECTS, getProjectBySlug } from "@/lib/projects-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Aman Shaikh",
    };
  }

  return {
    title: `${project.title} — Aman Shaikh`,
    description: project.description,
    openGraph: {
      title: `${project.title} — DevOps Project`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find index for next project link
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 bg-background relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/[0.04] blur-[150px] pointer-events-none rounded-full" />

        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs and Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-border/50 text-xs font-mono text-muted">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted hover:text-blue-400 transition-colors py-1 px-2 -ml-2 rounded-md hover:bg-card/50"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all projects</span>
            </Link>

            <div className="flex items-center gap-2 text-muted/60">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-foreground transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-blue-400">{project.id}</span>
            </div>
          </div>

          {/* Project Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded">
                PROJECT {project.id}
              </span>
              <span className="text-xs font-mono text-muted/80 tracking-wide">
                {project.label}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl mb-8">
              {project.description}
            </p>

            {/* CTAs & GitHub Repository */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonBaseStyles, buttonVariants.accent, "gap-2 text-xs font-mono")}
              >
                <GitBranch className="h-4 w-4" />
                <span>View Repository on GitHub</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/#projects"
                className={cn(buttonBaseStyles, buttonVariants.outline, "text-xs font-mono")}
              >
                Back to Projects
              </Link>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="p-6 rounded-xl border border-border/80 bg-[#0c0e14]/80 mb-14">
            <div className="text-xs font-mono uppercase tracking-wider text-muted/60 mb-3">
              Technologies & Infrastructure Components
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-muted/90 bg-background/80 border border-border/70 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            {/* 1. Problem Statement */}
            <section>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                <AlertCircle className="h-4 w-4" />
                <span>Problem Statement</span>
              </div>
              <Card className="p-6 md:p-8 bg-[#0c0e14]/70 border-border/80 rounded-xl">
                <p className="text-base text-muted/90 leading-relaxed">
                  {project.problemStatement}
                </p>
              </Card>
            </section>

            {/* 2. Architecture & Overview */}
            <section>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                <Workflow className="h-4 w-4" />
                <span>Architecture & System Overview</span>
              </div>
              <Card className="p-6 md:p-8 bg-[#0c0e14]/70 border-border/80 rounded-xl space-y-6">
                <p className="text-base text-muted/90 leading-relaxed">
                  {project.architectureOverview}
                </p>
                <div className="p-4 rounded-lg border border-border/60 bg-[#080a0f] text-xs font-mono text-muted/80">
                  <span className="text-blue-400 font-semibold">Deployment Pattern:</span> Clean separation of declarative Infrastructure as Code and container workload execution.
                </div>
              </Card>
            </section>

            {/* 3. Implementation Breakdown Steps */}
            <section>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 mb-4 uppercase tracking-wider">
                <Layers className="h-4 w-4" />
                <span>Implementation Steps</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {project.implementationSteps.map((step) => (
                  <Card key={step.step} className="p-5 md:p-6 bg-[#0c0e14]/70 border-border/80 hover:border-blue-500/40 transition-colors rounded-xl">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30 px-2.5 py-1 rounded flex-shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* 4. Key Highlights / Capabilities */}
            <section>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Key Capabilities & Highlights</span>
              </div>
              <Card className="p-6 md:p-8 bg-[#0c0e14]/70 border-border/80 rounded-xl">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start text-sm text-muted/90">
                      <CheckCircle2 className="h-4 w-4 mr-2.5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* 5. Technical Challenges & Practical Solutions */}
            <section>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-4 uppercase tracking-wider">
                <Server className="h-4 w-4" />
                <span>Technical Challenges & Solutions</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.challengesAndSolutions.map((item, idx) => (
                  <Card key={idx} className="p-6 bg-[#0c0e14]/70 border-border/80 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-amber-400/90 font-semibold mb-2">
                        CHALLENGE {idx + 1}
                      </div>
                      <p className="text-sm text-foreground/90 font-medium mb-4 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-xs font-mono text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" /> SOLUTION
                      </div>
                      <p className="text-xs text-muted/80 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-20 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="text-xs font-mono text-muted hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all projects</span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
            >
              <span>Next Project: {nextProject.title}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
