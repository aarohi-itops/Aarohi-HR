import Image from "next/image";
import {memo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowLeft, ArrowRight} from "lucide-react";
import quote from "@/assets/LandingPage/Testomonials/quote.svg";
import {
  companyTestimonials,
  employeeTestimonials,
  Testimonial,
} from "../../../../../data/testimonials";
import {useTestimonial} from "../../../../../hooks/useTestimonial";

interface TestomonialSlideProps {
  isForCompanies: boolean;
}

// Updated animation variants for a more engaging text effect
const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.9,
  }),
};

const scaleVariants = {
  initial: {scale: 0.9, opacity: 0},
  animate: {scale: 1, opacity: 1},
  exit: {scale: 0.9, opacity: 0},
};

export default function TestomonialSlide({
  isForCompanies,
}: TestomonialSlideProps) {
  // Get the active testimonials based on isForCompanies
  const activeTestimonials = isForCompanies
    ? companyTestimonials
    : employeeTestimonials;

  // Use custom hook for state management
  const {
    currentIndex,
    direction,
    currentTestimonial,
    handlePrevious,
    handleNext,
    handleDotClick,
  } = useTestimonial({
    testimonials: activeTestimonials,
    isForCompanies,
  });

  // Early return with loading state if currentTestimonial is undefined
  if (!currentTestimonial) {
    return (
      <div className="w-full flex items-center justify-center">
        Loading testimonials...
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[920px] bg-white rounded-lg p-3 md:p-6 shadow-2xl flex flex-col md:flex-row items-stretch gap-4 md:gap-6 relative h-auto min-h-[350px] md:h-[320px]">
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          className="absolute -top-4 -left-4 md:-top-10 md:-left-10"
        >
          <Image
            src={quote}
            alt="quote"
            width={75}
            height={75}
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
          />
        </motion.div>

        <div className="w-full md:w-3/5 flex flex-col justify-center gap-4 md:gap-10 p-2 md:p-4 overflow-y-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-container-${currentIndex}`}
              className="overflow-hidden"
            >
              <motion.p
                key={`text-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                  velocity: 10,
                }}
                className="text-base md:text-lg lg:text-xl font-primary text-primary-gray leading-normal"
              >
                {currentTestimonial?.text || ""}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2 md:gap-3">
            <motion.div
              initial={{scaleX: 0}}
              animate={{scaleX: 1}}
              transition={{duration: 0.5}}
              className="w-6 md:w-10 h-[2px] bg-secondary-green rounded-full"
              style={{originX: 0}}
            ></motion.div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`position-${currentIndex}`}
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -10, opacity: 0}}
                transition={{duration: 0.3}}
                className="text-xs md:text-sm lg:text-base font-primary text-secondary-green font-normal leading-normal"
              >
                {currentTestimonial?.position || ""}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full md:w-2/5 bg-quaternary-green rounded-lg p-3 md:p-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`logo-${currentIndex}`}
              variants={scaleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{type: "spring", stiffness: 300, damping: 30}}
              className="flex items-center justify-center w-[100px] h-[100px] md:w-[344px] md:h-[344px] relative overflow-hidden"
            >
              {currentTestimonial?.logo && (
                <Image
                  src={currentTestimonial.logo}
                  alt={currentTestimonial?.logoAlt || "Testimonial logo"}
                  width={!isForCompanies ? 144 : 344}
                  height={!isForCompanies ? 144 : 344}
                  className={`object-cover ${
                    !isForCompanies ? "rounded-full" : ""
                  }`}
                  sizes="(max-width: 768px) 100px, 144px"
                  priority
                  unoptimized={currentIndex === 3 && !isForCompanies}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <NavigationControls
        activeTestimonials={activeTestimonials}
        currentIndex={currentIndex}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleDotClick={handleDotClick}
        isForCompanies={isForCompanies}
      />
    </div>
  );
}

// Extracted Navigation Controls component for better code organization
interface NavigationControlsProps {
  activeTestimonials: Testimonial[];
  currentIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDotClick: (index: number) => void;
  isForCompanies: boolean;
}

const NavigationControls = memo(function NavigationControls({
  activeTestimonials,
  currentIndex,
  handlePrevious,
  handleNext,
  handleDotClick,
  isForCompanies,
}: NavigationControlsProps) {
  return (
    <div className="flex items-center justify-center mt-4 md:mt-8">
      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex-shrink-0 focus:outline-none"
        onClick={handlePrevious}
        aria-label="Previous testimonial"
      >
        <ArrowLeft
          size={16}
          className="text-black md:w-6 md:h-6 cursor-pointer"
        />
      </motion.button>

      <div className="flex items-center justify-center gap-1 md:gap-4 mx-1 md:mx-4 overflow-x-auto scrollbar-hide">
        {activeTestimonials.map((testimonial, index) => (
          <TestimonialDot
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            currentIndex={currentIndex}
            handleDotClick={handleDotClick}
            isForCompanies={isForCompanies}
          />
        ))}
      </div>

      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex-shrink-0 focus:outline-none"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ArrowRight
          size={16}
          className="text-black md:w-6 md:h-6 cursor-pointer"
        />
      </motion.button>
    </div>
  );
});

// Testimonial dot component with improved image handling
interface TestimonialDotProps {
  testimonial: Testimonial;
  index: number;
  currentIndex: number;
  handleDotClick: (index: number) => void;
  isForCompanies: boolean;
}

const TestimonialDot = memo(function TestimonialDot({
  testimonial,
  index,
  currentIndex,
  handleDotClick,
  isForCompanies,
}: TestimonialDotProps) {
  // Determine sizes based on screen size and active state
  const getSize = () => {
    // Small screens: 30px/36px, Medium+ screens: 45px/60px (original sizes)
    const smallActive = "36px";
    const smallInactive = "30px";
    const largeActive = "60px";
    const largeInactive = "45px";

    return {
      small: currentIndex === index ? smallActive : smallInactive,
      large: currentIndex === index ? largeActive : largeInactive,
    };
  };

  const sizes = getSize();

  return (
    <motion.button
      onClick={() => handleDotClick(index)}
      whileHover={{scale: 0.8}}
      whileTap={{scale: 0.9}}
      aria-label={`Go to testimonial ${index + 1}`}
      className="focus:outline-none transition-transform duration-300 flex-shrink-0"
    >
      <motion.div
        animate={{
          width: sizes.small,
          height: sizes.small,
          border:
            currentIndex === index ? "2px solid rgb(71, 149, 185)" : "none",
        }}
        className="relative rounded-full flex items-center justify-center md:hidden"
        style={{
          width: sizes.small,
          height: sizes.small,
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden p-[2px]">
          <Image
            src={testimonial.logo}
            alt={`${testimonial.logoAlt} index`}
            width={40}
            height={40}
            className="object-cover transition-all duration-300 ease-in-out rounded-full"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            unoptimized={index === 3 && !isForCompanies}
          />
        </div>
      </motion.div>

      {/* Medium and larger screens */}
      <motion.div
        animate={{
          width: currentIndex === index ? 60 : 45,
          height: currentIndex === index ? 60 : 45,
          border:
            currentIndex === index ? "3px solid rgb(71, 149, 185)" : "none",
        }}
        className="relative rounded-full items-center justify-center hidden md:flex"
      >
        <div className="w-full h-full rounded-full overflow-hidden p-[4px]">
          <Image
            src={testimonial.logo}
            alt={`${testimonial.logoAlt} index`}
            width={currentIndex === index ? 80 : 65}
            height={currentIndex === index ? 80 : 65}
            className="object-cover transition-all duration-300 ease-in-out rounded-full"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            unoptimized={index === 3 && !isForCompanies}
          />
        </div>
      </motion.div>
    </motion.button>
  );
});
