import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/*
 * DESIGN.md §4: buttons speak IBM Plex Mono uppercase, sit at 4px radius,
 * never move or cast shadows on hover.
 * - default  = Primary Button (Messing fill, Tinte text, brightens ~8%)
 * - outline  = Ghost Button (Haarlinie border -> Messing on hover, bg stays)
 * - link     = Text Link (Papier with Messing underline)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-utility text-sm uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-messing text-tinte hover:brightness-[1.08]",
        outline:
          "border border-haarlinie bg-transparent text-papier hover:border-messing",
        ghost: "text-papier-gedaempft hover:text-papier",
        link: "text-papier underline decoration-messing decoration-1 underline-offset-2 hover:text-messing",
      },
      size: {
        default: "h-11 px-7 py-3.5",
        sm: "h-9 px-4",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
