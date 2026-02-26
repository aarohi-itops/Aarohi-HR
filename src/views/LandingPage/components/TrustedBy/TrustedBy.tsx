"use client";

import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
// import BackgroundSvg from "@/assets/LandingPage/TrustedBy/Background.svg";

import Image from "next/image";

// Import all slider SVGs
import slider1 from "@/assets/LandingPage/TrustedBy/slider1.png";
import slider2 from "@/assets/LandingPage/TrustedBy/slider2.png";
import slider3 from "@/assets/LandingPage/TrustedBy/slider3.png";
import slider4 from "@/assets/LandingPage/TrustedBy/slider4.png";
import slider5 from "@/assets/LandingPage/TrustedBy/slider5.png";
import slider6 from "@/assets/LandingPage/TrustedBy/slider6.png";
import slider7 from "@/assets/LandingPage/TrustedBy/slider7.png";
import slider8 from "@/assets/LandingPage/TrustedBy/slider8.png";
import slider9 from "@/assets/LandingPage/TrustedBy/slider9.png";
import slider10 from "@/assets/LandingPage/TrustedBy/slider10.png";
import slider11 from "@/assets/LandingPage/TrustedBy/slider11.png";
import slider12 from "@/assets/LandingPage/TrustedBy/slider12.png";
import slider13 from "@/assets/LandingPage/TrustedBy/slider13.png";
import slider14 from "@/assets/LandingPage/TrustedBy/slider14.png";
import slider15 from "@/assets/LandingPage/TrustedBy/slider15.png";
import slider16 from "@/assets/LandingPage/TrustedBy/slider16.png";
import slider17 from "@/assets/LandingPage/TrustedBy/slider17.png";
import slider18 from "@/assets/LandingPage/TrustedBy/slider18.png";
import slider19 from "@/assets/LandingPage/TrustedBy/slider19.png";
import slider20 from "@/assets/LandingPage/TrustedBy/slider20.png";
import slider21 from "@/assets/LandingPage/TrustedBy/slider21.png";
import slider22 from "@/assets/LandingPage/TrustedBy/slider22.png";
import slider23 from "@/assets/LandingPage/TrustedBy/slider23.png";
import slider24 from "@/assets/LandingPage/TrustedBy/slider24.png";
import slider25 from "@/assets/LandingPage/TrustedBy/slider25.png";
import slider26 from "@/assets/LandingPage/TrustedBy/slider26.png";
import slider27 from "@/assets/LandingPage/TrustedBy/slider27.png";
import slider28 from "@/assets/LandingPage/TrustedBy/slider28.png";
import slider29 from "@/assets/LandingPage/TrustedBy/slider29.png";
import slider30 from "@/assets/LandingPage/TrustedBy/slider30.png";
import slider31 from "@/assets/LandingPage/TrustedBy/slider31.png";
import slider32 from "@/assets/LandingPage/TrustedBy/slider32.png";
import slider33 from "@/assets/LandingPage/TrustedBy/slider33.png";
import slider34 from "@/assets/LandingPage/TrustedBy/slider34.png";
import slider35 from "@/assets/LandingPage/TrustedBy/slider35.png";
import slider36 from "@/assets/LandingPage/TrustedBy/slider36.png";
import slider37 from "@/assets/LandingPage/TrustedBy/slider37.png";
import slider38 from "@/assets/LandingPage/TrustedBy/slider38.png";
import slider39 from "@/assets/LandingPage/TrustedBy/slider39.png";
import slider40 from "@/assets/LandingPage/TrustedBy/slider40.png";
import slider41 from "@/assets/LandingPage/TrustedBy/slider41.png";
import slider42 from "@/assets/LandingPage/TrustedBy/slider42.png";
import slider43 from "@/assets/LandingPage/TrustedBy/slider43.png";
import slider44 from "@/assets/LandingPage/TrustedBy/slider44.png";
import slider45 from "@/assets/LandingPage/TrustedBy/slider45.png";
import slider46 from "@/assets/LandingPage/TrustedBy/slider46.png";
import slider47 from "@/assets/LandingPage/TrustedBy/slider47.png";
import slider48 from "@/assets/LandingPage/TrustedBy/slider48.png";
import slider49 from "@/assets/LandingPage/TrustedBy/slider49.png";
import slider50 from "@/assets/LandingPage/TrustedBy/slider50.png";
import slider51 from "@/assets/LandingPage/TrustedBy/slider51.png";
import slider52 from "@/assets/LandingPage/TrustedBy/slider52.png";
import slider53 from "@/assets/LandingPage/TrustedBy/slider53.png";
import slider54 from "@/assets/LandingPage/TrustedBy/slider54.png";
import slider55 from "@/assets/LandingPage/TrustedBy/slider55.png";
import slider56 from "@/assets/LandingPage/TrustedBy/slider56.png";
import slider57 from "@/assets/LandingPage/TrustedBy/slider57.png";

import Link from "next/link";
import HighlightText from "@/services/HighlightText";

interface TrustedByProps {
  heading: string;
  headerStyle: string;
  // showBackground?: boolean;
  className: string;
}

export default function TrustedBy({
  heading,
  // headerStyle,
  // showBackground = true,
  className,
}: TrustedByProps) {
  const sliderImages = useMemo(
    () => [
      slider1,
      slider2,
      slider3,
      slider4,
      slider5,
      slider6,
      slider7,
      slider8,
      slider9,
      slider10,
      slider11,
      slider12,
      slider13,
      slider14,
      slider15,
      slider16,
      slider17,
      slider18,
      slider19,
      slider20,
      slider21,
      slider22,
      slider23,
      slider24,
      slider25,
      slider26,
      slider27,
      slider28,
      slider29,
      slider30,
      slider31,
      slider32,
      slider33,
      slider34,
      slider35,
      slider36,
      slider37,
      slider38,
      slider39,
      slider40,
      slider41,
      slider42,
      slider43,
      slider44,
      slider45,
      slider46,
      slider47,
      slider48,
      slider49,
      slider50,
      slider51,
      slider52,
      slider53,
      slider54,
      slider55,
      slider56,
      slider57,
    ],
    []
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  // @ts-expect-error - known issue with requestAnimationFrame ID typing
  const animationRef = useRef<number>();
  const [itemWidth, setItemWidth] = useState(0);

  const updateSliderPosition = useCallback((): void => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Speed of animation (pixels per frame) - slightly faster for better visibility
    const speed = 0.8;

    // Move continuously to the left (negative direction)
    let newTranslateX = translateX - speed;

    // If we've moved one full set of images to the left, reset position to create infinite loop effect
    const singleSetWidth = itemWidth * sliderImages.length;
    if (singleSetWidth > 0 && Math.abs(newTranslateX) >= singleSetWidth) {
      // Reset by the width of one full set to create seamless loop
      newTranslateX += singleSetWidth;
    }

    setTranslateX(newTranslateX);
    slider.style.transform = `translateX(${newTranslateX}px)`;

    animationRef.current = requestAnimationFrame(updateSliderPosition);
  }, [translateX, itemWidth, sliderImages]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Calculate the width of a single item (including gap)
      const firstItem = slider.querySelector(".slider-item");
      if (firstItem) {
        // Get the width of the item plus the gap (10px from the gap-10 class)
        const calculatedItemWidth =
          firstItem.getBoundingClientRect().width + 40; // 40px for the gap
        setItemWidth(calculatedItemWidth);
      }
    }

    // Start animation
    animationRef.current = requestAnimationFrame(updateSliderPosition);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateSliderPosition]);

  // Add a resize observer to recalculate dimensions if window size changes
  useEffect(() => {
    const handleResize = () => {
      const slider = sliderRef.current;
      if (slider) {
        const firstItem = slider.querySelector(".slider-item");
        if (firstItem) {
          const calculatedItemWidth =
            firstItem.getBoundingClientRect().width + 40;
          setItemWidth(calculatedItemWidth);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const backgroundStyles = showBackground
  //   ? {
  //       backgroundImage: `url(${BackgroundSvg.src})`,
  //       backgroundRepeat: "no-repeat",
  //       backgroundPosition: "top",
  //       backgroundSize: "auto",
  //       minHeight: "246px",

  //     }
  //   : {
  //       minHeight: "180px", // Smaller height when no background
  //     };

  return (
    <Link href="/clients">
      <div
        className={`flex flex-col relative w-full -mt-10 ${className} py-24 `}
        // style={backgroundStyles}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center md:mt-12 mt-16 w-full">
          <div className="w-full">
            <p
              // className={`text-[#020617] font-primary ${headerStyle}  text-2xl tracking-wide leading-tight font-normal mb-10`}
              className="text-primary  text-start tracking-wider leading-[1.15] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-5xl mb-16 "
            >
              {/* {heading} */}
              <HighlightText
                className="font-semibold px-1 sm:px-2 md:px-4"
                highlightColor="bg-tertiary-green"
                duration={700}
                delayAnimation={700}
              >
                {heading}
              </HighlightText>
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
            <div
              className="trusted-slider w-full overflow-hidden relative"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)",
              }}
            >
              <div
                ref={sliderRef}
                className="slider-track flex items-center gap-20 transition-none"
              >
                {/* Triple the images to create a more seamless continuous loop */}
                {[...sliderImages, ...sliderImages, ...sliderImages].map(
                  (image, index) => (
                    <div key={index} className="slider-item flex-shrink-0">
                      <div className="flex items-center justify-center h-full">
                        <Image
                          src={image.src}
                          alt={`Trusted partner ${
                            (index % sliderImages.length) + 1
                          }`}
                          className="object-contain h-auto w-auto "
                          width={500}
                          height={2500}
                          quality={100}
                          priority={index < 5 ? true : false}
                          loading={index < 5 ? "eager" : "lazy"}
                          sizes="500px"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
