"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, XCircle, CheckCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Job } from "@/data/jobsData";

// Toast component for success message with animation
const SuccessToast = ({ message }: { message: string }) => (
  <div className="flex items-start p-4 rounded-lg bg-white shadow-lg border-l-4 border-green-500 max-w-md w-full">
    <div className="flex-shrink-0">
      <CheckCircle className="h-6 w-6 text-green-500" />
    </div>
    <div className="ml-3 flex-1">
      <p className="text-sm font-medium text-gray-900">{message}</p>
    </div>
  </div>
);

// Toast component for error message with animation
const ErrorToast = ({ message }: { message: string }) => (
  <div className="flex items-start p-4 rounded-lg bg-white shadow-lg border-l-4 border-red-500 max-w-md w-full">
    <div className="flex-shrink-0">
      <XCircle className="h-6 w-6 text-red-500" />
    </div>
    <div className="ml-3 flex-1">
      <p className="text-sm font-medium text-gray-900">{message}</p>
    </div>
  </div>
);

// Custom toast functions
const showSuccessToast = (message: string) => {
  toast.custom(
    () => <SuccessToast message={message} />,
    { position: "top-right", duration: 4000 }
  );
};

const showErrorToast = (message: string) => {
  toast.custom(
    () => <ErrorToast message={message} />,
    { position: "top-right", duration: 4000 }
  );
};

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  job,
}: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: job?.title || "",
    message: job ? `I'm interested in the ${job.title} position at ${job.company}. ${job.description || ""}` : "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // When job changes or modal opens, update the form data
  useEffect(() => {
    if (job && isOpen) {
      setFormData(prevData => ({
        ...prevData,
        subject: job.title,
        message: `I'm interested in the ${job.title} position at ${job.company}. ${job.description || ""}`
      }));
    }
  }, [job, isOpen]);

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
    const { id, value } = e.target;
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

  // Add a handler to ensure form resets when closing
  const handleClose = () => {
    // Reset form state
    setErrors({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
    
    // Call the parent component's onClose function
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Include job ID in the request
      const requestData = {
        ...formData,
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
      };

      const response = await fetch("/api/send-job-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send application");
      }

      showSuccessToast("Your application has been sent successfully!");

      // Reset form and close modal
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.error("Error sending application:", error);
      showErrorToast("Failed to send application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent 
          className="max-w-[550px] p-0 overflow-y-auto h-auto animate-in fade-in-0 zoom-in-95 duration-300"
        >
          <div 
            ref={modalContentRef} 
            className="p-8 flex flex-col items-start gap-8"
          >
            <DialogHeader className="w-full">
              <DialogTitle className="text-[#020617] text-2xl font-normal">
                Apply for {job.title} at {job.company}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="fullName"
                  className="text-[#334155] text-sm font-normal mb-2"
                >
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-full border ${
                    errors.fullName ? "border-red-500" : "border-[#E2E8F0]"
                  } bg-white text-[#94A3B8] text-sm font-normal`}
                  required
                />
                {errors.fullName && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>{errors.fullName}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-[#334155] text-sm font-normal mb-2"
                >
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-full border ${
                    errors.email ? "border-red-500" : "border-[#E2E8F0]"
                  } bg-white text-[#94A3B8] text-sm font-normal`}
                  required
                />
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="phone"
                  className="text-[#334155] text-sm font-normal mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 rounded-full border ${
                    errors.phone ? "border-red-500" : "border-[#E2E8F0]"
                  } bg-white text-[#94A3B8] text-sm font-normal`}
                />
                {errors.phone && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="subject"
                  className="text-[#334155] text-sm font-normal mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                />
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="message"
                  className="text-[#334155] text-sm font-normal mb-2"
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? "border-red-500" : "border-[#E2E8F0]"
                  } bg-white text-[#94A3B8] text-sm font-normal`}
                  required
                ></textarea>
                {errors.message && (
                  <div className="flex items-center mt-1 text-red-500 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                variant="withArrow"
                className="h-14 w-[180px] mt-4 pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
                withAnimatedArrow
                arrowSize={28}
                disabled={isSubmitting}
                StyleBg="#0091e6"
              >
                <span>{isSubmitting ? "Sending..." : "Apply Now"}</span>
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}