"use client";
import {Button} from "@/components/ui/button";
import {AlertCircle, CheckCircle2, X, XCircle} from "lucide-react";
import React, {useState} from "react";
import toast, {Toaster} from "react-hot-toast";

// Custom toast function for success messages
const successToast = (message: string) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <CheckCircle2 className="h-6 w-6 text-[#0091e6]" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#475569] hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    ),
    {duration: 4000, position: "top-right"}
  );
};

// Custom toast function for copy success messages
const copyToast = (message: string) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#475569] hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    ),
    {duration: 2000, position: "top-right"}
  );
};
const errorToast = (message: string) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <XCircle className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#475569] hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    ),
    {duration: 4000, position: "top-right"}
  );
};

export default function ContactHeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add custom styles for contact cards animation
  React.useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      .contact-card-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .contact-card-float:nth-child(2) {
        animation-delay: -2s;
      }
      
      .contact-card-float:nth-child(3) {
        animation-delay: -4s;
      }
      
      .contact-card-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: .8;
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Phone is optional
    const regex = /^[0-9+\-\s()]{7,20}$/;
    return regex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {id, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate phone (optional field)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      successToast("Your message has been sent successfully!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      errorToast("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-transparent to-secondary-green/10 min-h-screen w-full">
      {/* Toast container with custom animations */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            borderRadius: "8px",
            background: "#fff",
            color: "#0F172A",
            boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.10)",
          },
        }}
      />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-12 flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 min-h-[calc(100vh-2rem)]">
        <section className="flex flex-col items-start justify-start w-full lg:w-1/2 text-left">
          <header className="flex flex-col items-start justify-items-start w-full">
            <h2 className="text-base text-secondary-green font-medium">
              Contact us
            </h2>
            <h1 className="text-3xl md:text-[42px] font-semibold text-left leading-tight">
              Reach Out to Our Team
            </h1>
            <p className="mt-2 md:mt-4 text-sm md:text-base">
              We&apos;re here to help—whether you&apos;re hiring or job hunting
              abroad. Reach us through the details below.
            </p>
            {/* Contact Information Grid - Uniform Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-16 w-full">
              {/* Business Hours Card */}
              <div className="contact-card-float flex flex-col justify-between h-full min-h-[180px] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#475569] text-base font-bold">
                      Business Hours
                    </h3>
                  </div>
                  <p className="text-[#0F172A] text-sm font-medium">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full contact-card-pulse"></span>
                      Open Now
                    </span>
                  </p>
                  <p className="text-[#0F172A] text-sm mt-1">
                    Sunday – Friday
                    <br />
                    <span className="text-blue-600 font-semibold">
                      9:00 AM - 6:00 PM
                    </span>
                    <br />
                    <span className="text-xs text-gray-500">
                      (Nepal Standard Time)
                    </span>
                  </p>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="contact-card-float flex flex-col justify-between h-full min-h-[180px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#475569] text-base font-bold">
                      Office Address
                    </h3>
                  </div>
                  <p className="text-[#0F172A] font-bold text-sm">
                    Aarohi HR Solutions (P) Ltd
                  </p>
                  <p className="text-[#0F172A] text-sm">
                    Kathmandu Metropolitan Ward No. 3, Basundhara Kathmandu,
                    Nepal.
                  </p>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="contact-card-float flex flex-col justify-between h-full min-h-[180px] bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#475569] text-base  font-bold">
                      Phone
                    </h3>
                  </div>
                  <div className="space-y-2 mt-1">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("+977 1 4961807");
                        copyToast("Phone number copied to clipboard!");
                      }}
                      className="group/phone flex items-center gap-2 text-[#0F172A] text-sm font-medium hover:text-purple-600 transition-colors duration-200 w-full text-left"
                    >
                      <span>+977 14961807</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("+974-70075850");
                        copyToast("Qatar phone number copied to clipboard!");
                      }}
                      className="group/phone flex items-center gap-2 text-[#0F172A] text-sm font-medium hover:text-purple-600 transition-colors duration-200 w-full text-left"
                    >
                      <span>+977 14962925</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("+977-1-4962925");
                        copyToast("Fax number copied to clipboard!");
                      }}
                      className="group/phone flex items-center gap-2 text-[#0F172A] text-sm hover:text-purple-600 transition-colors duration-200 w-full text-left"
                    >
                      <span>+977 14962925</span>
                      <span className="text-xs text-gray-500">(Fax)</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card-float flex flex-col justify-between h-full min-h-[180px] bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#475569] text-base font-bold">
                      Email Address
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "info@aarohihrsolutions.com"
                        );
                        copyToast("Email address copied to clipboard!");
                      }}
                      className="group/email flex items-center gap-3 text-[#0F172A] text-sm font-medium hover:text-orange-600 transition-colors duration-200"
                    >
                      <span>info@aarohihrsolutions.com</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/email:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <a
                      href="mailto:info@aarohihrsolutions.com"
                      className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full hover:bg-orange-200 transition-colors duration-300 group-hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section className="flex flex-col items-center justify-start w-full lg:w-1/2">
          <div className="w-full max-w-[520px] p-4 md:p-6 flex flex-col items-start gap-4 md:gap-6 rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)]">
            <div className="w-full">
              <h2 className="text-[#020617] text-xl md:text-2xl font-semibold">
                Send Message
              </h2>
              <p className="text-[#64748B] text-sm mt-1">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-3 md:gap-4"
            >
              <div className="flex flex-col w-full">
                <label
                  htmlFor="fullName"
                  className="text-[#334155] text-sm font-medium mb-1"
                >
                  Full Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-3 py-2.5 rounded-lg border ${errors.fullName ? "border-red-500 bg-red-50" : "border-[#E2E8F0] hover:border-[#CBD5E1]"} bg-white text-[#0F172A] text-sm font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-[#0091e6]/20 focus:border-[#0091e6]`}
                  required
                />
                {errors.fullName && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span>{errors.fullName}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-[#334155] text-sm font-medium mb-1"
                >
                  Email Address<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full px-3 py-2.5 rounded-lg border ${errors.email ? "border-red-500 bg-red-50" : "border-[#E2E8F0] hover:border-[#CBD5E1]"} bg-white text-[#0F172A] text-sm font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-[#0091e6]/20 focus:border-[#0091e6]`}
                  required
                />
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="phone"
                  className="text-[#334155] text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className={`w-full px-3 py-2.5 rounded-lg border ${errors.phone ? "border-red-500 bg-red-50" : "border-[#E2E8F0] hover:border-[#CBD5E1]"} bg-white text-[#0F172A] text-sm font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-[#0091e6]/20 focus:border-[#0091e6]`}
                />
                {errors.phone && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="subject"
                  className="text-[#334155] text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] bg-white text-[#0F172A] text-sm font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-[#0091e6]/20 focus:border-[#0091e6]"
                />
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="message"
                  className="text-[#334155] text-sm font-medium mb-1"
                >
                  Message<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full px-3 py-2.5 rounded-lg border ${errors.message ? "border-red-500 bg-red-50" : "border-[#E2E8F0] hover:border-[#CBD5E1]"} bg-white text-[#0F172A] text-sm font-normal resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#0091e6]/20 focus:border-[#0091e6]`}
                  required
                ></textarea>
                {errors.message && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                variant="withArrow"
                className="h-11 md:h-12 w-full md:w-auto md:min-w-[160px] mt-2 pl-4 pr-2 py-2 relative overflow-hidden font-primary text-sm font-medium group self-start"
                withAnimatedArrow
                arrowSize={24}
                disabled={isSubmitting}
                StyleBg="#0091e6"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
