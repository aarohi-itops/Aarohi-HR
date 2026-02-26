"use client";

import {cn} from "@/lib/utils";
import {useEffect, useRef, useState, ReactNode} from "react";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
  highlightColor?: string;
  delayAnimation?: number; // Delay in milliseconds
  duration?: number; // Animation duration in ms
}

/**
 * HighlightText component that animates text highlighting when it enters the viewport
 *
 * @example
 * <HighlightText>Important text</HighlightText>
 *
 * @example with custom colors
 * <HighlightText
 *   highlightColor="bg-primary-purple"
 * >
 *   Purple highlight
 * </HighlightText>
 */
export function HighlightText({
  children,
  className,
  textClassName,
  highlightColor = "bg-tertiary-green",
  delayAnimation = 700, // Default delay
  duration = 700, // Default duration
}: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Use the first entry (our element)
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null, // Use the viewport as root
        rootMargin: "0px", // No margin
        threshold: 0.1, // Trigger when 10% is visible (more responsive than higher values)
      }
    );

    // Store the current value of the ref
    const currentRef = ref.current;

    // Start observing the element
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve when component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Set animation variables
  const animationCSS = {
    "--highlight-delay": `${delayAnimation}ms`,
    "--highlight-duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <span
      ref={ref}
      className={cn("relative inline-block overflow-hidden", className)}
      style={animationCSS}
    >
      {/* Background element with animation */}
      <span
        className={cn(
          "absolute inset-0 w-0 origin-left z-0",
          highlightColor,
          isVisible ? "animate-highlight-bg" : "w-0"
        )}
        style={{
          animation: isVisible ? `highlight-bg ${duration}ms cubic-bezier(0.33, 1, 0.68, 1) ${delayAnimation}ms forwards` : 'none'
        }}
      />

      {/* Text element that changes color simultaneously with background */}
      <span
        className={cn(
          "relative z-10",
          textClassName
        )}
        style={{
          animation: isVisible ? `highlight-text ${duration}ms cubic-bezier(0.33, 1, 0.68, 1) ${delayAnimation}ms forwards` : 'none'
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default HighlightText;
