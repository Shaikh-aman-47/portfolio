import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors hover:bg-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
