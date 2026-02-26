"use client";
import MainLogo from "@/assets/Navbar/Aarohi_logo.png";
import {ArrowUpRight, ChevronDown, Menu, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "../ui/button";

// Define the navigation items to avoid repetition
const navItems = [
  {title: "Home", href: "/"},
  {
    title: "Our Services",
    href: "",
    dropdown: [
      {title: "For Companies", href: "/ourservices/companies"},
      {title: "For Employees", href: "/ourservices/employees"},
    ],
  },
  {title: "Licenses", href: "/licenses"},
  {title: "About Us", href: "/aboutus"},
  {title: "Jobs", href: "/jobs"},
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

  // Improved active link detection
  const isActive = (href: string) => {
    // Check exact match
    if (pathname === href) return true;

    // Check if it's a parent path (for subpages)
    if (href !== "/" && pathname?.startsWith(href + "/")) return true;

    // Special case for dropdown items in parent sections
    if (href.includes("/ourservices/") && pathname?.startsWith("/ourservices"))
      return true;

    return false;
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Function to handle dropdown navigation without closing dropdown
  const handleDropdownLinkClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      // If already on the page, prevent default to avoid page reload
      e.preventDefault();
    }
    // Keep dropdown open for a short time even after clicking
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (title: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === title ? null : title);
  };

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between w-full py-6 relative">
          <Link
            href="/"
            className="relative z-30 max-w-[150px] md:max-w-[240px] md:max-h-[220px] block"
          >
            <Image
              src={MainLogo}
              alt="logo"
              width={240}
              height={220}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center font-primary text-sm font-normal gap-[10px]">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                      timeoutRef.current = null;
                    }
                    setActiveDropdown(item.title);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 300);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-primary font-medium"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.title} <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <div
                    className={`absolute z-50 top-full left-0 w-[180px] pt-2 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === item.title
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-1"
                    }`}
                    onMouseEnter={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                      }
                      setActiveDropdown(item.title);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 300);
                    }}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className={`block w-full px-4 py-2 hover:bg-gray-50 transition-colors ${
                            isActive(dropdownItem.href)
                              ? "text-primary font-medium"
                              : ""
                          }`}
                          onClick={(e) =>
                            handleDropdownLinkClick(e, dropdownItem.href)
                          }
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          <Link href={"/contactus"} className="hidden md:block ">
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
              withAnimatedArrow
              arrowSize={28}
              StyleBg="#0091e6"
            >
              <span>Contact Us </span>
            </Button>
          </Link>

          {/* Mobile Navigation - Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
            type="button"
          >
            <Menu size={24} className="text-gray-700" />
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Mobile Menu Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src={MainLogo}
                  alt="logo"
                  width={120}
                  height={110}
                  className="w-auto h-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Close mobile menu"
                type="button"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Mobile Menu Navigation */}
            <nav className="flex flex-col p-6 overflow-y-auto h-[calc(100%-200px)]">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.title} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleMobileDropdown(item.title)}
                      className="w-full flex items-center justify-between py-4 text-left font-primary text-base transition-colors text-gray-700 hover:text-secondary-green"
                      type="button"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileDropdownOpen === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mobile Dropdown Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdownOpen === item.title
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 pb-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className={`block py-3 text-sm font-primary transition-colors ${
                              isActive(dropdownItem.href)
                                ? "text-secondary-green font-semibold"
                                : "text-gray-600 hover:text-secondary-green"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`py-4 border-b border-gray-100 text-base font-primary transition-colors ${
                      isActive(item.href)
                        ? "text-secondary-green font-semibold"
                        : "text-gray-700 hover:text-secondary-green"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Footer - Contact Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
              <Link
                href="/contactus"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block"
              >
                <div className="flex items-center justify-center gap-2 w-full h-14 bg-secondary-green text-white rounded-full font-primary text-sm font-medium hover:bg-tertiary-green transition-colors">
                  <span>Contact Us</span>
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
