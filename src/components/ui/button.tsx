import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[1vw] sm:gap-[0.75vw] lg:gap-[0.5vw] whitespace-nowrap rounded-md 2xl:rounded-[0.3vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[4vw] [&_svg]:sm:size-[3vw] [&_svg]:lg:size-[1vw] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-[10vw] sm:h-[6vw] lg:h-[2.5vw] px-[4vw] sm:px-[3vw] lg:px-[1vw] py-[2vw] sm:py-[1.5vw] lg:py-[0.5vw]",
        sm: "h-[8vw] sm:h-[5vw] lg:h-[2vw] rounded-[0.3vw] px-[3vw] sm:px-[2vw] lg:px-[0.75vw] text-[3vw] sm:text-[2vw] lg:text-[0.75vw]",
        lg: "h-[12vw] sm:h-[8vw] lg:h-[3vw] rounded-[0.3vw] px-[6vw] sm:px-[4vw] lg:px-[2vw]",
        icon: "h-[10vw] w-[10vw] sm:h-[6vw] sm:w-[6vw] lg:h-[2.5vw] lg:w-[2.5vw]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
