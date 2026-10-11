import { cn } from "@/lib/utils";
import React from "react";

export const buttonVariants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-sm transition-all duration-200",
  secondary:
    "bg-card text-foreground hover:bg-card/80 border border-border/60 transition-all duration-200",
  outline:
    "border border-border bg-card/30 hover:bg-card/80 hover:border-border/80 text-foreground backdrop-blur-sm transition-all duration-200",
  accent:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.25)] border border-blue-500/40 transition-all duration-200",
  glow:
    "border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 hover:border-accent/60 shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all duration-200",
};

export const buttonBaseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonBaseStyles, buttonVariants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
