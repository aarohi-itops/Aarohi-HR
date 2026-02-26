"use client";

import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import {ArrowUpRight} from "lucide-react";
import gsap from "gsap";

import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        withArrow:
          "bg-tertiary-green flex items-center justify-center text-primary-foreground rounded-[999px] shadow-xs hover:cursor-pointer",
        withoutArrow:
          "bg-quaternary-green flex items-center justify-center text-primary-green rounded-[999px] shadow-xs hover:cursor-pointer",
        withArrowPurple:
          "bg-primary-purple flex items-center justify-center text-primary-foreground rounded-[999px] shadow-xs hover:cursor-pointer",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    withAnimatedArrow?: boolean;
    arrowSize?: number;
    arrowColor?: string;
    arrowContainerClassName?: string;
    onAnimationComplete?: () => void;
    StyleBg?: string;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  withAnimatedArrow = false,
  arrowSize = 42,
  arrowColor = "#ffffff",
  arrowContainerClassName = "ml-3.5 flex p-6 items-center justify-center rounded-[999px] bg-white/25 relative overflow-hidden",
  children,
  onAnimationComplete,
  StyleBg,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const isAnimatingRef = React.useRef(false);
  
  const handleButtonClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    // Don't prevent default anymore, let the button behave normally
    
    if (!buttonRef.current || isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    
    const button = buttonRef.current;
    const buttonRect = button.getBoundingClientRect();
    
    // Get the button center coordinates
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    
    // Create a ripple effect with reduced area
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = `${buttonCenterX}px`;
    ripple.style.top = `${buttonCenterY}px`;
    ripple.style.width = '5px';
    ripple.style.height = '5px';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = StyleBg || 'rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1000';
    
    // Add ripple to document body 
    document.body.appendChild(ripple);
    
    // Animate the ripple
    gsap.to(ripple, {
      duration: 0.4,
      scale: 70,
      opacity: 0,
      onComplete: () => {
        // Remove ripple when animation completes
        if (document.body.contains(ripple)) {
          document.body.removeChild(ripple);
        }
        
        // Call animation complete callback
        if (onAnimationComplete) {
          onAnimationComplete();
        }
        
        // Call original onClick after animation completes
        if (props.onClick) {
          props.onClick(e);
        }
      }
    });
    
    // Animate the button
    gsap.to(button, {
      duration: 0.1,
      scale: 0.5,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        isAnimatingRef.current = false;
      }
    });
  }, [props,  onAnimationComplete, StyleBg]);
  
  return (
    <Comp
      ref={buttonRef}
      data-slot="button"
      className={cn(buttonVariants({variant, size, className}), "relative")}
      {...props}
      onClick={handleButtonClick}
    >
      {children}
      {withAnimatedArrow && (
        <div className={arrowContainerClassName}>
          <ArrowUpRight
            className={`size-[${arrowSize}px] text-white absolute transition-all duration-500 delay-[10ms] translate-x-0 translate-y-0 opacity-100 group-hover:translate-x-full group-hover:-translate-y-full group-hover:opacity-0`}
            size={arrowSize}
            color={arrowColor}
            strokeWidth={2.5}
          />
          <ArrowUpRight
            className={`size-[${arrowSize}px] text-white absolute transition-all duration-500 delay-[10ms] -translate-x-full translate-y-full opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100`}
            size={arrowSize}
            color={arrowColor}
            strokeWidth={2.5}
          />
        </div>
      )}
    </Comp>
  );
}

export {Button, buttonVariants, type ButtonProps};
