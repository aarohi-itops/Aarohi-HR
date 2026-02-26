import { useState, useCallback, useEffect } from "react";
import { Testimonial } from "../data/testimonials";

interface UseTestimonialProps {
  testimonials: Testimonial[];
  isForCompanies: boolean;
}

export function useTestimonial({ testimonials, isForCompanies }: UseTestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Reset index when switching between companies and employees
  useEffect(() => {
    setCurrentIndex(0);
  }, [isForCompanies]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const handleDotClick = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  return {
    currentIndex,
    direction,
    currentTestimonial: testimonials[currentIndex],
    handlePrevious,
    handleNext,
    handleDotClick,
  };
} 