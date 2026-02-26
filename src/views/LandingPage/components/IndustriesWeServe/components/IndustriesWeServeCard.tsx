"use client";
import React, {useState} from "react";
import Icon from "@/assets/LandingPage/IndustriesWeServe/Icon.svg";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {AlertCircle, XCircle, CheckCircle} from "lucide-react";
import {toast} from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IndustriesWeServeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  jobs: Array<string>;
}

// Toast components
const SuccessToast = ({message}: {message: string}) => (
  <div className="flex items-start p-4 rounded-lg bg-white shadow-lg border-l-4 border-green-500 max-w-md w-full">
    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
    <p className="ml-3 text-sm font-medium text-gray-900">{message}</p>
  </div>
);

const ErrorToast = ({message}: {message: string}) => (
  <div className="flex items-start p-4 rounded-lg bg-white shadow-lg border-l-4 border-red-500 max-w-md w-full">
    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
    <p className="ml-3 text-sm font-medium text-gray-900">{message}</p>
  </div>
);

// Custom toast functions
const showSuccessToast = (message: string) =>
  toast.custom(() => <SuccessToast message={message} />, {
    position: "top-right",
    duration: 4000,
  });

const showErrorToast = (message: string) =>
  toast.custom(() => <ErrorToast message={message} />, {
    position: "top-right",
    duration: 4000,
  });

// Custom Button component for industry cards
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({children, className, onClick}: CustomButtonProps) => (
  <Button
    className={cn(
      "group bg-gray-100 text-primary-gray rounded-[999px] h-12 w-[150px] md:w-[160px] pl-[14px] pr-[4px] py-2 hover:bg-gray-100 hover:cursor-pointer",
      className
    )}
    withAnimatedArrow
    arrowSize={24}
    arrowColor="#64748B"
    arrowContainerClassName="-ml-3.5 flex p-5 items-center justify-center rounded-[999px] bg-gray-200 relative overflow-hidden"
    StyleBg="#E2E8F0"
    onClick={onClick}
  >
    <span className="w-full text-[12px] md:text-sm md:min-w-[95px]">
      {children}
    </span>
  </Button>
);

// Contact Form Component
const ContactForm = ({
  title,
  description,
  formType,
}: {
  title: string;
  description: string;
  formType: "apply" | "request";
}) => {
  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject:
      formType === "apply"
        ? `Application for ${title}`
        : `Staff Request for ${title}`,
    message:
      formType === "apply"
        ? `I'm interested in job opportunities in ${title}. ${description}`
        : `I'm looking to hire staff for ${title}. ${description}`,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) =>
    !phone || /^[0-9+\-\s()]{7,20}$/.test(phone);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {id, value} = e.target;
    setFormData((prev) => ({...prev, [id]: value}));

    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({...prev, [id]: ""}));
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

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
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const endpoint =
        formType === "apply" ? "/api/apply-for-job" : "/api/request-staff";

      const requestData = {
        ...formData,
        formType,
        category: title,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `Error: ${response.status} ${response.statusText}`;

        try {
          const errorJson = JSON.parse(errorText);
          if (errorJson.error) errorMessage = errorJson.error;
        } catch (parseError) {
          console.error("Could not parse error response:", parseError);
        }

        throw new Error(errorMessage);
      }

      showSuccessToast(
        `Your ${formType === "apply" ? "application" : "staff request"} has been sent successfully!`
      );
      setFormData(initialFormData);
    } catch (error) {
      console.error(`Error sending ${formType}:`, error);
      showErrorToast(
        `Failed to send your ${formType === "apply" ? "application" : "request"}. ${error instanceof Error ? error.message : "Please try again later."}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormField = (
    id: string,
    label: string,
    type: string,
    placeholder: string,
    required: boolean = false,
    errorKey?: keyof typeof errors
  ) => (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-[#334155] text-sm font-normal mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={4}
          value={formData[id as keyof typeof formData] as string}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl border ${
            errorKey && errors[errorKey] ? "border-red-500" : "border-[#E2E8F0]"
          } bg-white text-[#94A3B8] text-sm font-normal`}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={formData[id as keyof typeof formData] as string}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-full border ${
            errorKey && errors[errorKey] ? "border-red-500" : "border-[#E2E8F0]"
          } bg-white text-[#94A3B8] text-sm font-normal`}
          required={required}
        />
      )}
      {errorKey && errors[errorKey] && (
        <div className="flex items-center mt-1 text-red-500 text-xs">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>{errors[errorKey]}</span>
        </div>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderFormField(
          "fullName",
          "Full Name",
          "text",
          "Enter your full name",
          true,
          "fullName"
        )}
        {renderFormField(
          "email",
          "Email Address",
          "email",
          "Enter your email address",
          true,
          "email"
        )}
        {renderFormField(
          "phone",
          "Phone Number",
          "tel",
          "Enter your phone number",
          false,
          "phone"
        )}
        {renderFormField(
          "company",
          formType === "apply" ? "Current Company" : "Your Company",
          "text",
          formType === "apply"
            ? "Current or previous employer"
            : "Company name",
          formType === "request"
        )}
      </div>

      {renderFormField("subject", "Subject", "text", "Enter message subject")}
      {renderFormField(
        "message",
        "Message",
        "textarea",
        "Write your message here",
        true,
        "message"
      )}

      <Button
        type="submit"
        variant="withArrow"
        className="h-14 w-[180px] mt-4 pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
        withAnimatedArrow
        arrowSize={28}
        disabled={isSubmitting}
        StyleBg="#0091e6"
      >
        <span>
          {isSubmitting
            ? "Sending..."
            : formType === "apply"
              ? "Apply for Job"
              : "Request Staff"}
        </span>
      </Button>
    </form>
  );
};

export default function IndustriesWeServeCard({
  title,
  description,
  imageUrl,
  jobs,
}: IndustriesWeServeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [openApplyJob, setOpenApplyJob] = useState(false);
  const [openRequestStaff, setOpenRequestStaff] = useState(false);

  return (
    <>
      <div
        className={`relative w-full h-auto rounded-[24px] p-[2px] transition-all duration-300 ease-in-out ${
          isHovered
            ? "bg-gradient-to-b from-[#E9EEF3] to-[#0091e6]"
            : "bg-transparent border border-gray-200"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{backgroundClip: "padding-box"}}
      >
        <div className="flex flex-col h-full bg-white rounded-[23px] overflow-hidden relative border border-transparent">
          <div
            className="w-full h-[160px] bg-center bg-no-repeat bg-cover rounded-t-[22px]"
            style={{backgroundImage: `url(${imageUrl})`}}
          />
          <div
            className={`p-6 flex flex-col transition-all duration-300 ease-in-out ${
              isHovered ? "h-[280px]" : "h-[230px]"
            }`}
          >
            <div className="flex flex-grow flex-col">
              <h3
                className={`font-primary text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out ${
                  isHovered ? "text-[#0091e6]" : ""
                }`}
              >
                {title}
              </h3>
              <p className="text-[#334155] font-primary text-sm mb-4 font-normal">
                {description}
              </p>
              <div
                className="flex flex-wrap gap-2 h-[100px] overflow-y-auto custom-scrollbar"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {jobs.map((job) => (
                  <span
                    key={job}
                    className="bg-quaternary-green inline-flex items-center gap-2 rounded-full px-3 py-1 text-primary-gray font-primary text-sm whitespace-nowrap"
                  >
                    <Image src={Icon} alt="" width={16} height={16} />
                    {job}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`flex gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isHovered ? "opacity-100 h-[48px]" : "opacity-0 h-0"
              }`}
            >
              <Dialog open={openApplyJob} onOpenChange={setOpenApplyJob}>
                <DialogTrigger asChild>
                  <div>
                    <CustomButton onClick={() => setOpenApplyJob(true)}>
                      Apply for Job
                    </CustomButton>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[650px] p-0 overflow-y-auto h-auto animate-in fade-in-0 zoom-in-95 duration-300">
                  <div className="p-8 flex flex-col items-start gap-8">
                    <DialogHeader className="w-full">
                      <DialogTitle className="text-[#020617] text-2xl font-normal">
                        Apply for Job in {title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 pt-2">
                        Submit your application for a position in {title}.
                        Please fill out the form below and we&apos;ll get back
                        to you soon.
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm
                      title={title}
                      description={description}
                      formType="apply"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog
                open={openRequestStaff}
                onOpenChange={setOpenRequestStaff}
              >
                <DialogTrigger asChild>
                  <div>
                    <CustomButton onClick={() => setOpenRequestStaff(true)}>
                      Request Staff
                    </CustomButton>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[650px] p-0 overflow-y-auto h-auto animate-in fade-in-0 zoom-in-95 duration-300">
                  <div className="p-8 flex flex-col items-start gap-8">
                    <DialogHeader className="w-full">
                      <DialogTitle className="text-[#020617] text-2xl font-normal">
                        Request Staff for {title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 pt-2">
                        Looking to hire staff for {title}? Fill out this form
                        with your requirements and we&apos;ll help you find the
                        perfect candidate.
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm
                      title={title}
                      description={description}
                      formType="request"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
