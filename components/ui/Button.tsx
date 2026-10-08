import { cn } from "@/lib/utils";
import React from "react";

export const buttonVariants = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  secondary: "bg-card text-foreground hover:bg-card/80",
  outline: "border border-border bg-transparent hover:bg-card text-foreground",
};

export const buttonBaseStyles = "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonBaseStyles,
          buttonVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
