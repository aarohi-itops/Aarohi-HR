import bottomImage from "@/assets/Services-assets/bottomImage.svg";
import HighlightText from "@/services/HighlightText";
import Image from "next/image";

interface HeroProps {
  beforehighlight: string;
  highlightText: string;
  subtitle: string;
  description: string;
  smallHeading: string;
}

export default function Hero({
  beforehighlight,
  highlightText,
  subtitle,
  description,
  smallHeading,
}: HeroProps) {
  return (
    <div
      className="h-auto w-full relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(17, 159, 188, 0) 13.38%, rgba(17, 157, 188, 0.15) 95.29%)",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 mb-24">
        <header className="w-full flex flex-col items-center text-center mb-8 md:mb-16">
          <h2 className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
            {smallHeading}
          </h2>
          <div className="text-primary text-center space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
            <h1 className="relative group flex  items-center w-full font-semibold overflow-hidden">
              <span className=" font-normal text-primary-gray">
                {beforehighlight}
              </span>
              <HighlightText
                className="font-semibold px-2 md:px-4 text-center mx-auto"
                highlightColor="bg-tertiary-green"
                duration={700}
                delayAnimation={700}
              >
                {highlightText}
              </HighlightText>{" "}
            </h1>{" "}
            <p className="mt-1 text-center">
              <span
                className={`whitespace-normal sm:whitespace-nowrap text-xl md:text-4xl lg:text-5xl transition-opacity duration-500 ease-in-out max-w-[300px] sm:max-w-[300px]`}
              >
                {subtitle}
              </span>
            </p>
          </div>
          <div className="flex flex-col mt-3 items-center justify-center text-center w-full">
            {" "}
            <p
              className={`text-primary-gray max-w-4xl font-primary text-base font-normal leading-normal text-center`}
            >
              {description}
            </p>
          </div>
        </header>
        <Image
          src={bottomImage}
          alt="Bottom decoration"
          className="w-full absolute bottom-0 left-0"
          width={1280}
          height={160}
          quality={85}
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}
