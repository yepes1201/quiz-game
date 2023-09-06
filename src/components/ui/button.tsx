import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "px-4 py-2 rounded hover:bg-white/30 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white/20",
        primary: "bg-primary hover:bg-primary/80 active:bg-primary/60",
        outline: " border border-white/20",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
