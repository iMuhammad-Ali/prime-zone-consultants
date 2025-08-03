import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import Logo from "../../assets/images/logo-white.png";
import { useDispatch } from "react-redux";
import { sendWhatsAppMessage } from "~/store/authThunk";
import type { AppDispatch } from "~/store/store";

import {
  ArrowLeft,
  X,
  CheckCircle,
  Phone,
  MapPin,
  User,
  Check,
} from "lucide-react";
import { toast } from "~/hooks/use-toast";

interface FormData {
  country: string;
  whatsapp: string;
  qualification: string;
  fullName: string;
  phoneNumber: string;
  city: string;
}

const EligibilityCheck = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormData>({
    country: "",
    whatsapp: "",
    qualification: "",
    fullName: "",
    phoneNumber: "",
    city: "",
  });
  const [warnings, setWarnings] = useState({
    whatsapp: "",
    phoneNumber: "",
  });

  const totalSteps = 5;

  // Optimized numeric input handler with warning
  const handleNumericInput =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const numericValue = inputValue.replace(/\D/g, "");

      // Check if user tried to input non-numeric characters
      if (inputValue !== numericValue && inputValue.length > 0) {
        setWarnings((prev) => ({
          ...prev,
          [field]: "Only numbers are allowed. Please enter digits only.",
        }));
        // Clear warning after 3 seconds
        setTimeout(() => {
          setWarnings((prev) => ({ ...prev, [field]: "" }));
        }, 4000);
      } else {
        // Clear warning if input is valid
        setWarnings((prev) => ({ ...prev, [field]: "" }));
      }

      setFormData((prev) => ({ ...prev, [field]: numericValue }));
    };

  // Optimized key press handler for numeric inputs with warning
  const handleNumericKeyPress =
    (field: keyof FormData) => (e: React.KeyboardEvent) => {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
      ];

      if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
        setWarnings((prev) => ({
          ...prev,
          [field]: "Only numeric characters (0-9) are allowed.",
        }));
        // Clear warning after 2 seconds
        setTimeout(() => {
          setWarnings((prev) => ({ ...prev, [field]: "" }));
        }, 2000);
      }
    };

  // Optimized validation helpers
  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.country.trim();
      case 2:
        return !!formData.whatsapp.trim();
      case 3:
        return !!formData.qualification.trim();
      case 4:
        return !!(
          formData.fullName.trim() &&
          formData.phoneNumber.trim() &&
          formData.city.trim()
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!isStepValid(currentStep)) return;
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      country: "",
      whatsapp: "",
      qualification: "",
      fullName: "",
      phoneNumber: "",
      city: "",
    });
    setWarnings({
      whatsapp: "",
      phoneNumber: "",
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (!isStepValid(4)) return;

      const payload = {
        message: `Hello, I am interested in studying abroad. Here are my details:\n\nCountry: ${formData.country}\nWhatsApp: ${formData.whatsapp}\nQualification: ${formData.qualification}\nFull Name: ${formData.fullName}\nPhone Number: ${formData.phoneNumber}\nCity: ${formData.city}`,
        recipient: formData.whatsapp,
      };

      await dispatch(sendWhatsAppMessage(payload)).unwrap();

      // Show success toast

      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
      });

      setIsLoading(false);
      setCurrentStep(totalSteps);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again later.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    }
  };

  const renderProgressBar = () => (
    <div className="flex gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw] xl:gap-2 mb-[6vw] sm:mb-[4vw] md:mb-[3vw] lg:mb-[2vw] xl:mb-8">
      {Array.from({ length: totalSteps - 1 }).map((_, index) => (
        <div
          key={index}
          className={`h-[2vw] sm:h-[1.5vw] md:h-[1vw] lg:h-[0.5vw] xl:h-2 flex-1 rounded-full transition-all duration-500 ease-in-out ${
            index < currentStep - 1
              ? "bg-primary shadow-lg"
              : index === currentStep - 1
              ? "bg-primary/70 shadow-md"
              : "bg-muted"
          }`}
        />
      ))}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-[6vw] sm:space-y-[4vw] md:space-y-[3vw] lg:space-y-[2vw] xl:space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-[3vw] sm:space-y-[2vw] md:space-y-[1.5vw] lg:space-y-[1vw] xl:space-y-4">
              <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-2xl font-bold text-foreground leading-tight">
                Which country would you like to study in?
              </h2>
              <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm">
                Tell us about your dream destination
              </p>
            </div>
            <div className="space-y-[3vw] sm:space-y-[2vw] md:space-y-[1.5vw] lg:space-y-[1vw] xl:space-y-4">
              <div className="relative group">
                <Input
                  required={true}
                  type="text"
                  placeholder="e.g., Canada, Australia, UK..."
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="flex h-[12vw] sm:h-[8vw] md:h-[6vw] lg:h-[4vw] xl:h-9 w-full rounded-[1vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-md 2xl:rounded-[0.3vw] border border-input bg-transparent px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] xl:px-3 py-[2vw] sm:py-[1.5vw] md:py-[1vw] lg:py-[0.5vw] xl:py-1 2xl:px-[1vw] 2xl:py-[1.2vw] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-[6vw] sm:space-y-[4vw] md:space-y-[3vw] lg:space-y-[2vw] xl:space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-[3vw] sm:space-y-[2vw] md:space-y-[1.5vw] lg:space-y-[1vw] xl:space-y-4">
              <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-2xl font-bold text-foreground leading-tight">
                Please share your active WhatsApp number?
              </h2>
              <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm">
                We'll contact you for personalized guidance
              </p>
            </div>
            <div className="space-y-[3vw] sm:space-y-[2vw] md:space-y-[1.5vw] lg:space-y-[1vw] xl:space-y-4">
              <div className="relative group">
                <Input
                  type="tel"
                  placeholder="share your active whatsapp number"
                  required={true}
                  value={formData.whatsapp}
                  onChange={handleNumericInput("whatsapp")}
                  onKeyDown={handleNumericKeyPress("whatsapp")}
                  className="flex h-[12vw] sm:h-[8vw] md:h-[6vw] lg:h-[4vw] xl:h-9 w-full rounded-[1vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-md 2xl:rounded-[0.3vw] border border-input bg-transparent px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] xl:px-3 py-[2vw] sm:py-[1.5vw] md:py-[1vw] lg:py-[0.5vw] xl:py-1 2xl:px-[1vw] 2xl:py-[1.2vw] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                {warnings.whatsapp && (
                  <div className="mt-2 text-red-500 text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-xs 2xl:text-sm flex items-center gap-2 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <span className="text-red-500">⚠️</span>
                    {warnings.whatsapp}
                  </div>
                )}
                {formData.whatsapp && (
                  <button
                    onClick={() => setFormData({ ...formData, whatsapp: "" })}
                    className="absolute right-[3vw] sm:right-[2vw] md:right-[1.5vw] lg:right-[1vw] xl:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                  >
                    <X className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-5 xl:h-5 2xl:w-[1vw] 2xl:h-[1vw]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-[6vw] sm:space-y-[4vw] md:space-y-[3vw] lg:space-y-[2vw] xl:space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-[4vw] sm:space-y-[3vw] md:space-y-[2vw] lg:space-y-[1.5vw] xl:space-y-6">
              <div className="space-y-[2vw] sm:space-y-[1.5vw] md:space-y-[1vw] lg:space-y-[0.5vw] xl:space-y-2">
                <h2 className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw] xl:text-xl font-bold text-foreground">
                  Your Current Qualification?
                </h2>
                <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm">
                  Select your educational background
                </p>
              </div>
              <div className="space-y-[3vw] sm:space-y-[2vw] md:space-y-[1.5vw] lg:space-y-[1vw] xl:space-y-3 2xl:space-y-[0.5vw]">
                {[
                  "Matric",
                  "Intermediate",
                  "O Level",
                  "A Level",
                  "Bachelors",
                  "Masters",
                  "Other",
                ].map((qual) => (
                  <button
                    key={qual}
                    onClick={() =>
                      setFormData({ ...formData, qualification: qual })
                    }
                    className={`w-full flex items-center space-x-[3vw] sm:space-x-[2vw] md:space-x-[1.5vw] lg:space-x-[1vw] xl:space-x-4 p-[3vw] sm:p-[2vw] md:p-[1.5vw] lg:p-[1vw] xl:p-4 rounded-[1vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-lg 2xl:rounded-[0.3vw] transition-all duration-300 hover:scale-[1] ${
                      formData.qualification === qual
                        ? "bg-primary text-primary-foreground border border-ring"
                        : "bg-transparent border border-input text-foreground hover:bg-input/50"
                    }`}
                  >
                    <div
                      className={`w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-6 xl:h-6 2xl:w-[1vw] 2xl:h-[1vw] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        formData.qualification === qual
                          ? "border-primary-foreground bg-primary-foreground/20"
                          : "border-border hover:border-ring"
                      }`}
                    >
                      {formData.qualification === qual && (
                        <Check className="w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1vw] lg:h-[1vw] xl:w-4 xl:h-4 2xl:w-[1vw] 2xl:h-[1vw] text-primary-foreground animate-in zoom-in-50 duration-200" />
                      )}
                    </div>
                    <span
                      className={`flex-1 text-left text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm 2xl:text-sm font-medium transition-colors duration-300`}
                    >
                      {qual}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-[6vw] sm:space-y-[4vw] md:space-y-[3vw] lg:space-y-[2vw] xl:space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-[3vw] sm:space-y-[2vw] md:space-y-[1.5vw] lg:space-y-[1vw] xl:space-y-4">
              <div className="flex items-center justify-center gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw] xl:gap-3 mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[0.5vw] xl:mb-2">
                <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
              </div>
              <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm">
                Complete your profile to register for the study abroad expo
              </p>
            </div>
            <div className="space-y-[4vw] sm:space-y-[3vw] md:space-y-[2vw] lg:space-y-[1.5vw] xl:space-y-6">
              <div className="space-y-[2vw] sm:space-y-[1.5vw] md:space-y-[1vw] lg:space-y-[0.5vw] xl:space-y-3">
                <Label
                  htmlFor="fullName"
                  className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm font-medium text-foreground flex items-center gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw] xl:gap-2 2xl:gap-[0.5vw] 2xl:mb-[0.5vw]"
                >
                  <User className="w-[4vw] h-[4vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1vw] lg:h-[1vw] xl:w-4 xl:h-4 2xl:w-[1vw] 2xl:h-[1vw]" />
                  Full Name
                </Label>
                <div className="relative group">
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required={true}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="flex h-[12vw] sm:h-[8vw] md:h-[6vw] lg:h-[4vw] xl:h-9 w-full rounded-[1vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-md 2xl:rounded-[0.3vw] border border-input bg-transparent px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] xl:px-3 py-[2vw] sm:py-[1.5vw] md:py-[1vw] lg:py-[0.5vw] xl:py-1 2xl:px-[1vw] 2xl:py-[1.2vw] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />

                  {formData.fullName && (
                    <button
                      onClick={() => setFormData({ ...formData, fullName: "" })}
                      className="absolute right-[3vw] sm:right-[2vw] md:right-[1.5vw] lg:right-[1vw] xl:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                    >
                      <X className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-5 xl:h-5 2xl:w-[1vw] 2xl:h-[1vw]" />
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-[2vw] sm:space-y-[1.5vw] md:space-y-[1vw] lg:space-y-[0.5vw] xl:space-y-3">
                <Label
                  htmlFor="phoneNumber"
                  className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm font-medium text-foreground flex items-center gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw] xl:gap-3 2xl:gap-[0.5vw] 2xl:mb-[0.5vw]"
                >
                  <Phone className="w-[4vw] h-[4vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1vw] lg:h-[1vw] xl:w-4 xl:h-4 2xl:w-[1vw] 2xl:h-[1vw]" />
                  Phone Number
                </Label>
                <div className="flex gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw] xl:gap-3">
                  {/* <Select defaultValue="PK +92">
                    <SelectTrigger className="w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[6vw] h-[12vw] sm:h-[8vw] md:h-[6vw] lg:h-[4vw] xl:h-[2vw] 2xl:pl-[1vw] 2xl:py-[1.2vw] rounded-[3vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-md 2xl:rounded-[0.3vw] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PK +92">PK +92</SelectItem>
                      <SelectItem value="US +1">US +1</SelectItem>
                      <SelectItem value="UK +44">UK +44</SelectItem>
                    </SelectContent>
                  </Select> */}
                  <div className="relative group flex-1">
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter phone number"
                      required={true}
                      value={formData.phoneNumber}
                      onChange={handleNumericInput("phoneNumber")}
                      onKeyDown={handleNumericKeyPress("phoneNumber")}
                      className="flex h-[12vw] sm:h-[8vw] md:h-[6vw] lg:h-[4vw] xl:h-9 w-full rounded-[1vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-md 2xl:rounded-[0.3vw] border border-input bg-transparent px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] xl:px-3 py-[2vw] sm:py-[1.5vw] md:py-[1vw] lg:py-[0.5vw] xl:py-1 2xl:px-[1vw] 2xl:py-[1.2vw] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                    {warnings.phoneNumber && (
                      <div className="mt-2 text-red-500 text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-xs 2xl:text-sm flex items-center gap-2 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                        <span className="text-red-500">⚠️</span>
                        {warnings.phoneNumber}
                      </div>
                    )}
                    {formData.phoneNumber && (
                      <button
                        onClick={() =>
                          setFormData({ ...formData, phoneNumber: "" })
                        }
                        className="absolute right-[3vw] sm:right-[2vw] md:right-[1.5vw] lg:right-[1vw] xl:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                      >
                        <X className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-5 xl:h-5 2xl:w-[1vw] 2xl:h-[1vw]" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-[2vw] sm:space-y-[1.5vw] md:space-y-[1vw] lg:space-y-[0.5vw] xl:space-y-3">
                <Label
                  htmlFor="city"
                  className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm font-medium text-foreground flex items-center gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw] xl:gap-2 2xl:gap-[0.5vw] 2xl:mb-[0.5vw]"
                >
                  <MapPin className="w-[4vw] h-[4vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1vw] lg:h-[1vw] xl:w-4 xl:h-4 2xl:w-[1vw] 2xl:h-[1vw]" />
                  City
                </Label>
                <div className="relative group">
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    required={true}
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="flex h-[12vw] sm:h-[8vw] md:h-[6vw] lg:h-[4vw] xl:h-9 w-full rounded-[1vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-md 2xl:rounded-[0.3vw] border border-input bg-transparent px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] xl:px-3 py-[2vw] sm:py-[1.5vw] md:py-[1vw] lg:py-[0.5vw] xl:py-1 2xl:px-[1vw] 2xl:py-[1.2vw] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />

                  {formData.city && (
                    <button
                      onClick={() => setFormData({ ...formData, city: "" })}
                      className="absolute right-[3vw] sm:right-[2vw] md:right-[1.5vw] lg:right-[1vw] xl:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                    >
                      <X className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-5 xl:h-5 2xl:w-[1vw] 2xl:h-[1vw]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-[6vw] sm:space-y-[4vw] md:space-y-[3vw] lg:space-y-[2vw] xl:space-y-8 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-center mb-[6vw] sm:mb-[4vw] md:mb-[3vw] lg:mb-[2vw] xl:mb-8">
              <div className="relative">
                <div className="absolute -inset-[3vw] sm:-inset-[2vw] md:-inset-[1.5vw] lg:-inset-[1vw] xl:-inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img
                  src={Logo}
                  alt="Prime Zone Consultants"
                  className="w-[16vw] h-[16vw] sm:w-[12vw] sm:h-[12vw] md:w-[10vw] md:h-[10vw] lg:w-[8vw] lg:h-[8vw] xl:w-20 xl:h-20 2xl:w-[5vw] 2xl:h-[5vw] relative z-10 rounded-full shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-[4vw] sm:space-y-[3vw] md:space-y-[2vw] lg:space-y-[1.5vw] xl:space-y-6">
              <div className="space-y-[2vw] sm:space-y-[1.5vw] md:space-y-[1vw] lg:space-y-[0.5vw] xl:space-y-2">
                <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm text-muted-foreground tracking-widest uppercase">
                  PRIME ZONE CONSULTANTS
                </p>
                <h2 className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-3xl 2xl:text-2xl font-bold text-foreground leading-tight">
                  See you at the Expo!
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm mx-auto">
                You are now one step closer to achieving your study abroad
                dreams. Our spokesperson will contact you shortly with more
                details.
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-[2vw] sm:rounded-[1vw] md:rounded-[0.8vw] lg:rounded-[0.5vw] xl:rounded-[0.5vw] p-[4vw] sm:p-[3vw] md:p-[2vw] lg:p-[1.5vw] xl:p-6 border border-green-400/30 shadow-xl">
                <div className="flex items-center justify-center lg:gap-[1vw] xl:gap-3">
                  <div className="w-[6vw] h-[6vw] sm:w-[5vw] sm:h-[4.5vw] md:w-[4vw] md:h-[3.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-8 xl:h-8 bg-green-500 md:rounded-full rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-5 xl:h-5 2xl:w-[1.8vw] 2xl:h-[1.5vw] text-white" />
                  </div>
                  <span className="text-green-100 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-sm font-medium">
                    You successfully submitted your responses
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="pt-[20vw] sm:pt-[15vw] md:pt-[12vw] lg:pt-[10vw] xl:pt-[6vw] pb-[8vw] sm:pb-[6vw] md:pb-[5vw] lg:pb-[4vw] xl:pb-[5vw] bg-background flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
          Eligibility Checker
        </h2>
        <p className="mb-[6vw] sm:mb-[4vw] lg:mb-[2vw] max-w-[90vw] sm:max-w-[70vw] lg:max-w-[50vw] text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-sm leading-relaxed">
          Check your eligibility for the best country to study abroad in under
          60 seconds. Get personalized recommendations based on your
          qualifications and preferences to start your journey toward
          international education.
        </p>
      </div>
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[6vw] sm:mb-[4vw] md:mb-[3vw] lg:mb-[2vw] xl:mb-8">
          {currentStep > 1 && currentStep < totalSteps && (
            <button
              onClick={handleBack}
              className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] xl:w-12 xl:h-12 2xl:w-[3vw] 2xl:h-[3vw] bg-card hover:bg-secondary backdrop-blur-sm rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 border border-border"
            >
              <ArrowLeft className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] xl:w-6 xl:h-6 2xl:w-[1.8vw] 2xl:h-[1.8vw]" />
            </button>
          )}
          <div className="flex-1"></div>
          {currentStep > 1 && (
            <button
              onClick={handleClose}
              className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] xl:w-12 xl:h-12 2xl:w-[3vw] 2xl:h-[3vw] bg-card hover:bg-destructive/20 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 border border-border"
            >
              <X className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] xl:w-6 xl:h-6 2xl:w-[1.8vw] 2xl:h-[1.8vw]" />
            </button>
          )}
        </div>

        {/* Main Content */}
        <Card className="bg-card backdrop-blur-xl border-border shadow-2xl rounded-[2vw] sm:rounded-[1vw] md:rounded-[1vw] lg:rounded-[0.5vw] xl:rounded-[0.5vw] overflow-hidden">
          <div className="p-[6vw] sm:p-[4vw] md:p-[3vw] lg:p-[2vw] xl:p-8 2xl:p-[2vw]">
            {renderStep()}
          </div>
        </Card>

        {/* Progress Bar */}
        {currentStep < totalSteps && (
          <div className="mt-[6vw] sm:mt-[4vw] md:mt-[3vw] lg:mt-[2vw] xl:mt-8">
            {renderProgressBar()}
          </div>
        )}

        {/* Footer Button */}
        <div className="mt-[6vw] sm:mt-[4vw] md:mt-[3vw] lg:mt-[2vw] xl:mt-8">
          {currentStep === totalSteps ? null : currentStep === 4 ? ( // No button on step 5 (success page)
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid(4) || isLoading}
              className="w-full py-[3vw] sm:py-[2vw] md:py-[1.5vw] lg:py-[1vw] xl:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-[2vw] sm:rounded-[1vw] md:rounded-[1vw] lg:rounded-[0.5vw] xl:rounded-[0.5vw] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-0 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
              className="w-full py-[3vw] sm:py-[2vw] md:py-[1.5vw] lg:py-[1vw] xl:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-[1vw] sm:rounded-[1vw] md:rounded-[0.5vw] lg:rounded-[0.3vw] xl:rounded-[0.3vw] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-0 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] xl:text-base 2xl:text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCheck;
