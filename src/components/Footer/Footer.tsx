"use client";
import {
  Check,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {PiTiktokLogo} from "react-icons/pi";

// import FindStaff from "../../assets/Footer/Find-staff.svg";
import Iaf from "@/assets/Footer/Iaf.png";
import Logo2 from "@/assets/Footer/logo2.png"; // Updated import for the logo
import Certificate from "../../assets/Footer/certification.jpg";

// Social media links data
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/aarohi-h-r-solutions-pvt-ltd-nepal/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/aarohihrsolutions?igsh=bDVqYWF6NWsyMHY3",
    ariaLabel: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/aarohihrsolution",
    ariaLabel: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@aarohihrsolutions",
    ariaLabel: "Youtube",
  },
  {
    icon: PiTiktokLogo,
    href: "https://www.tiktok.com/@aarohi_hr_solutions?_t=ZS-8wLKMJvdIoh&_r=1",
    ariaLabel: "Tiktok",
  },
];

// Company links data
const companyLinks = [
  {href: "/", label: "Home"},
  {href: "/aboutus", label: "About us"},
  {href: "/ourservices/companies", label: "Our Services"},
  {href: "/clients", label: "Our Clients"},
];

// Sectors links data
const sectorLinks = [
  {href: "", label: "Construction & Engineering"},
  {href: "", label: "Hospitality"},
  {href: "", label: "Tourism"},
  {href: "", label: "Domestic & Care Services"},
  {href: "", label: "Logistics & Warehousing"},
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setShowToast(true);
      setEmail("");
      setIsLoading(false);

      // Hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 500);
  };

  return (
    <footer className="relative bg-[#006199]/85 min-h-[400px] font-primary md:min-h-[300px] p-4 sm:p-6 md:p-10 overflow-hidden mx-6 rounded-2xl mb-6">
      {/* Wave Background SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          id="wave"
          style={{transform: "rotate(180deg)", transition: "0.3s"}}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(0, 97, 153, 1)" offset="0%"></stop>
              <stop stopColor="rgba(0, 97, 153, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{transform: "translate(0, 0px)", opacity: 1}}
            fill="url(#sw-gradient-0)"
            d="M0,294L60,302.2C120,310,240,327,360,285.8C480,245,600,147,720,155.2C840,163,960,278,1080,343C1200,408,1320,425,1440,375.7C1560,327,1680,212,1800,196C1920,180,2040,261,2160,302.2C2280,343,2400,343,2520,294C2640,245,2760,147,2880,138.8C3000,131,3120,212,3240,228.7C3360,245,3480,196,3600,220.5C3720,245,3840,343,3960,318.5C4080,294,4200,147,4320,98C4440,49,4560,98,4680,130.7C4800,163,4920,180,5040,204.2C5160,229,5280,261,5400,294C5520,327,5640,359,5760,359.3C5880,359,6000,327,6120,277.7C6240,229,6360,163,6480,147C6600,131,6720,163,6840,212.3C6960,261,7080,327,7200,294C7320,261,7440,131,7560,138.8C7680,147,7800,294,7920,318.5C8040,343,8160,245,8280,245C8400,245,8520,343,8580,392L8640,441L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
          ></path>
        </svg>
      </div>

      <div className="w-full relative z-10 max-w-none px-4 sm:px-6 md:px-10">
        {/* Main Content - Restructured */}
        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-16 lg:gap-20 max-w-7xl mx-auto">
          {/* Logo and description section - Now at top */}
          <div className="w-full md:w-1/3  flex flex-col items-start">
            <div className="flex flex-col items-start">
              <Link href="/">
                <Image
                  src={Logo2}
                  alt="Aarohi HR Solutions Logo"
                  width={194}
                  height={90}
                  className="w-[120px] md:w-[194px] h-auto"
                />
              </Link>

              <div className="mt-4 flex items-center gap-2">
                <MapPin className="text-white mt-0.5" size={20} />

                <Link href="/contactus">
                  <p className="text-xs md:text-sm text-white hover:underline">
                    Basundhara-3, Kathmandu
                  </p>
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-white mt-4 md:mt-6 leading-relaxed max-w-xs">
                ISO 9001:2015 <br /> Certificate No.:124104/A/0001/UK/En
              </p>
              <div className="flex  gap-4 mt-4">
                <Image
                  src={Certificate}
                  width={100}
                  height={80}
                  alt="Certificate"
                />
                <Image src={Iaf} width={80} height={80} alt="Iaf" />
              </div>

              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white hover:text-gray-200 transition-colors hover:scale-110"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon size={20} className="md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white mt-4  leading-tight min-w-max ">
                Govt. Lic. No: 1244/074/075 | Reg. No: 165209/073/074
              </p>
            </div>
          </div>

          {/* Links grid section - Now at bottom with increased gap */}
          <div className="w-full ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Company */}
              <div>
                <h3 className="text-sm md:text-base text-white font-bold mb-3">
                  Company
                </h3>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm text-white hover:text-gray-200 transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sectors */}
              <div>
                <h3 className="text-sm md:text-base text-white font-bold mb-3">
                  Sectors
                </h3>
                <ul className="space-y-2">
                  {sectorLinks.map((link, index) => (
                    <li key={index}>
                      <div
                        // href={link.href}
                        className="text-xs md:text-sm text-white hover:text-gray-200 transition-colors block"
                      >
                        {link.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Subscription */}
              <div className="col-span-2 md:col-span-1 flex flex-col items-start w-full">
                <h3 className="text-sm md:text-base text-white font-bold mb-3">
                  Stay Updated
                </h3>
                <p className="text-xs md:text-sm text-white/90 mb-4 leading-relaxed">
                  Get the latest job opportunities and HR insights delivered to
                  your inbox.
                </p>
                <div className="w-full md:max-w-sm">
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={handleSubscribe}
                  >
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white text-[#006199] px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe Now"}
                    </button>
                  </form>
                  <p className="text-xs text-white/70 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12">
          <div className="w-full mx-auto "></div>
          <div className="flex flex-col md:flex-row justify-between items-center font-semibold gap-3 md:gap-0 text-[10px] md:text-xs text-white">
            <p>All rights reserved © {currentYear} Aarohi HR Solutions</p>
            <span className="order-3 md:order-2">Crafted by Dobaato</span>
            <div className="flex gap-2 order-2 md:order-3">
              <Link
                href="/licenses"
                className="hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/licenses"
                className="hover:text-gray-200 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Vector SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          width="1920"
          height="142"
          viewBox="0 0 1920 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 md:h-24 lg:h-28"
        >
          <path
            d="M-6 138.325L463.617 1.00003M1927 139.57L1447.82 1.00003M1664.07 140.762L1322.24 1.00003M1431.87 140.762L1186.19 1.00002M1246.12 139.808L1050.15 1.00005M1057.75 141L963.566 2.00612M733.336 139.808L896.606 1.00003M512.262 140.285L754.021 1M271.567 139.093L600.97 1.00003M91.7001 110.245L1826.27 110.245M229.053 69.715L1687.61 69.715M349.401 34.4301L1576.42 34.43"
            stroke="url(#paint0_linear_75_2304)"
            strokeOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_75_2304"
              x1="960.5"
              y1="1"
              x2="960.5"
              y2="141"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.867009" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right-full duration-300">
          <div className="bg-white/20 rounded-full p-1">
            <Check size={16} />
          </div>
          <div>
            <p className="font-semibold">Successfully Subscribed!</p>
            <p className="text-sm opacity-90">
              Thank you for joining our newsletter.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
