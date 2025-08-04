"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { closeConsultantModal } from "~/store/consultant/consultantSlice";
import { LoaderCircle } from "lucide-react";
import { ConsultationData } from "~/types/consultation";
import { addConsultation } from "~/store/consultant/consultantThunk";

const ConsultantModal = () => {
  const dispatch = useAppDispatch();
  const { showConsultantModal } = useAppSelector((state) => state.consultant);

  const [formData, setFormData] = useState<ConsultationData>({
    name: "",
    email: "",
    phoneNumber: "",
    lastEducation: "",
    country: "",
    state: "",
    city: "",
    interestedCountry: "",
    applyFor: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    if (key === "phoneNumber") {
      value = value.replace(/[^\d]/g, "");
    }

    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      } else if (key === "phoneNumber" && !/^\d+$/.test(value)) {
        newErrors[key] = "Only numbers are allowed";
      }
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsLoading(true);
    dispatch(addConsultation(formData))
      .unwrap()
      .then(() => dispatch(closeConsultantModal()))
      .finally(() => setIsLoading(false));
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  useEffect(() => {
    if (!showConsultantModal) {
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        lastEducation: "",
        country: "",
        state: "",
        city: "",
        interestedCountry: "",
        applyFor: "",
      });
    }
  }, [showConsultantModal]);

  return (
    <Dialog
      open={showConsultantModal}
      onOpenChange={() => dispatch(closeConsultantModal())}
    >
      <DialogContent className="w-[95vw] sm:max-w-[50vw] lg:max-w-[40vw] rounded-lg 2xl:rounded-[0.3vw] hide-scrollbar max-h-[85vh] overflow-y-auto 2xl:p-[2vw]">
        <DialogHeader className="mb-[4vw] sm:mb-[2vw] lg:mb-[1.5vw]">
          <DialogTitle className="text-[4.5vw] sm:text-[3vw] lg:text-[2vw] font-semibold">
            Free Consultation
          </DialogTitle>
          <p className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] text-muted-foreground mt-[2vw] sm:mt-[1vw] lg:mt-[0.5vw]">
            Fill in all the fields to submit your request
          </p>
        </DialogHeader>

        <form
          className="space-y-[4vw] sm:space-y-[2vw] lg:space-y-[1.5vw]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw]">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Name"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
              />
            </div>
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw]">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Phone Number"
                required
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
              />
            </div>
            <div className="w-full sm:flex-1">
              <Select
                required
                value={formData.lastEducation}
                onValueChange={(value) => handleChange("lastEducation", value)}
              >
                <SelectTrigger className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]">
                  <SelectValue placeholder="Last Education" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matric">Matric</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="bachelor">Bachelor</SelectItem>
                  <SelectItem value="master">Master</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw]">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Country"
                required
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
              />
            </div>
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your State"
                required
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw]">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your City"
                required
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
              />
            </div>
            <div className="w-full sm:flex-1">
              <Select
                value={formData.interestedCountry}
                onValueChange={(value) =>
                  handleChange("interestedCountry", value)
                }
              >
                <SelectTrigger className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]">
                  <SelectValue placeholder="Interested Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="turkey">Turkey</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Input
              placeholder="Applying for (e.g. Study Visa, Work Visa)"
              required
              value={formData.applyFor}
              onChange={(e) => handleChange("applyFor", e.target.value)}
              className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3vw] sm:text-[2vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
            />
          </div>

          <DialogFooter className="pt-[4vw] sm:pt-[2vw] lg:pt-[1.5vw]">
            <div className="flex flex-col sm:flex-row justify-end gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw] w-full">
              <Button
                variant="outline"
                type="button"
                onClick={() => dispatch(closeConsultantModal())}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[4vw] sm:text-[2vw] lg:text-[1vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[4vw] sm:text-[2vw] lg:text-[1vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] w-full sm:w-auto"
              >
                {isLoading && (
                  <LoaderCircle className="animate-spin mr-[2vw] sm:mr-[1vw] lg:mr-[0.5vw] w-[4vw] sm:w-[2vw] lg:w-[1vw] h-[4vw] sm:h-[2vw] lg:h-[1vw]" />
                )}
                Submit
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { ConsultantModal };
