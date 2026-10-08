import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn("text-3xl md:text-4xl font-bold tracking-tight mb-8", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
