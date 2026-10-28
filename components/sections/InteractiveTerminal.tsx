"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, Trash2, HelpCircle, CornerDownLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects-data";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

const AVAILABLE_COMMANDS = ["help", "about", "skills", "projects", "contact", "clear"];

export function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "help",
      timestamp: "init",
      output: (
        <div className="space-y-1 text-muted/90">
          <p className="text-blue-300 font-semibold mb-2">
            Welcome to Aman Shaikh&apos;s interactive DevOps terminal!
          </p>
          <p className="text-xs text-muted/80 mb-2">
            Available commands:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div><span className="text-emerald-400 font-bold">help</span> — list commands</div>
            <div><span className="text-emerald-400 font-bold">about</span> — background & role</div>
            <div><span className="text-emerald-400 font-bold">skills</span> — technical toolset</div>
            <div><span className="text-emerald-400 font-bold">projects</span> — featured projects</div>
            <div><span className="text-emerald-400 font-bold">contact</span> — email & profiles</div>
            <div><span className="text-emerald-400 font-bold">clear</span> — reset terminal</div>
          </div>
        </div>
      ),
    },
  ]);

  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const now = new Date().toLocaleTimeString();

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 text-xs text-muted/90 font-mono">
            <p className="text-blue-300 font-bold">Supported Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2">
              <div><span className="text-emerald-400 font-semibold">about</span> : Summary, role, and focus areas</div>
              <div><span className="text-emerald-400 font-semibold">skills</span> : Categorized DevOps skills</div>
              <div><span className="text-emerald-400 font-semibold">projects</span> : List of hands-on cloud projects</div>
              <div><span className="text-emerald-400 font-semibold">contact</span> : Email, LinkedIn, GitHub details</div>
              <div><span className="text-emerald-400 font-semibold">clear</span> : Clear current terminal log</div>
            </div>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="space-y-2 text-xs text-muted/90 font-mono">
            <p className="text-foreground font-semibold">Aman Shaikh — DevOps Engineer</p>
            <p>Location: Pune, India</p>
            <p>Education: BCA — Bachelor of Computer Applications (2025)</p>
            <p className="text-muted/80">
              Focused on cloud infrastructure, containerization, Kubernetes orchestration, and declarative Infrastructure as Code with Terraform.
            </p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-muted/90">
            <p className="text-blue-300 font-bold">Categorized Skills:</p>
            <div className="space-y-1 pl-2">
              <p><span className="text-foreground font-semibold">Cloud:</span> AWS (EC2, S3, IAM, VPC, EKS)</p>
              <p><span className="text-foreground font-semibold">IaC:</span> Terraform</p>
              <p><span className="text-foreground font-semibold">Containers:</span> Docker, Kubernetes, Helm</p>
              <p><span className="text-foreground font-semibold">CI/CD:</span> Jenkins, GitHub Actions</p>
              <p><span className="text-foreground font-semibold">Config Management:</span> Ansible</p>
              <p><span className="text-foreground font-semibold">Monitoring:</span> Prometheus, Grafana, CloudWatch</p>
              <p><span className="text-foreground font-semibold">VCS & OS:</span> Git, GitHub, Linux</p>
            </div>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-muted/90">
            <p className="text-blue-300 font-bold">Featured Projects:</p>
            <div className="space-y-2 pl-2">
              {PROJECTS.map((p) => (
                <div key={p.id} className="border-l-2 border-blue-500/50 pl-2">
                  <div className="text-foreground font-bold">
                    {p.id}. {p.title}
                  </div>
                  <div className="text-muted/70 text-[11px]">{p.label}</div>
                  <div className="text-cyan-400 text-[11px]">Route: /projects/{p.slug}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-muted/90">
            <p className="text-blue-300 font-bold">Get In Touch:</p>
            <div className="space-y-1 pl-2">
              <p>Email: <a href="mailto:shaikhaman2654@gmail.com" className="text-emerald-400 underline">shaikhaman2654@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/shaikh-aman-322216376" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">linkedin.com/in/shaikh-aman-322216376</a></p>
              <p>GitHub: <a href="https://github.com/Shaikh-aman-47" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">github.com/Shaikh-aman-47</a></p>
            </div>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-red-400 font-mono">
            command not found: &apos;{cmd}&apos;. Type <span className="text-emerald-400 font-bold">help</span> to view available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: rawCmd,
        output: outputNode,
        timestamp: now,
      },
    ]);

    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        }
      }
    }
  };

  return (
    <Section id="terminal" className="bg-background relative overflow-hidden py-16 md:py-20">
      <Container className="max-w-4xl">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-300">
            <Terminal className="h-3.5 w-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
            Try the Terminal Simulator
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Explore the portfolio via a sandbox terminal. Commands run strictly in your browser.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl border border-border/80 bg-[#090b10] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/70 bg-[#07080b]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="text-[11px] text-muted/70 pl-2">aman@portfolio:~$</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="text-[10px] text-muted/60 hover:text-foreground flex items-center gap-1 transition-colors py-0.5 px-2 rounded hover:bg-card"
                title="Clear screen"
              >
                <Trash2 className="h-3 w-3" />
                <span>clear</span>
              </button>
            </div>
          </div>

          {/* Clickable Quick Command Badges */}
          <div className="px-4 py-2 border-b border-border/50 bg-[#0a0d14] flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="text-muted/50 text-[10px] uppercase tracking-wider mr-1">Quick run:</span>
            {AVAILABLE_COMMANDS.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-0.5 rounded border border-border/70 bg-card/40 hover:bg-blue-500/15 hover:border-blue-500/40 hover:text-blue-300 transition-colors text-muted"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal History Display */}
          <div 
            ref={terminalScrollRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 space-y-4 max-h-[380px] min-h-[220px] overflow-y-auto cursor-text bg-[#090b10]/95"
          >
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <span className="text-emerald-400">aman@portfolio:~$</span>
                  <span className="text-blue-300">{entry.command}</span>
                  {entry.timestamp !== "init" && (
                    <span className="text-[10px] text-muted/40 ml-auto font-normal">{entry.timestamp}</span>
                  )}
                </div>
                <div className="pl-4 border-l border-border/40 py-1">
                  {entry.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-1 text-foreground">
              <span className="text-emerald-400 flex-shrink-0">aman@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'skills', 'projects'..."
                className="flex-grow bg-transparent border-none outline-none text-blue-300 font-mono text-xs placeholder:text-muted/30 focus:ring-0 p-0"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>

          {/* Status footer */}
          <div className="px-4 py-2 border-t border-border/60 bg-[#06080c] flex items-center justify-between text-[10px] text-muted/50">
            <span>Client-side sandbox (No OS commands executed)</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ready
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
