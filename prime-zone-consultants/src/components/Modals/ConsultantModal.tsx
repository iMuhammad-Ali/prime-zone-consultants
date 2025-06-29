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
      <DialogContent className="w-[95vw] sm:max-w-xl rounded-md sm:rounded-md hide-scrollbar">
        <DialogHeader className="mb-4">
          <DialogTitle>Free Consultation</DialogTitle>
          <p className="text-xs text-muted-foreground">
            Fill in all the fields to submit your request
          </p>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Name"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Phone Number"
                required
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            <div className="w-full sm:flex-1">
              <Select
                required
                value={formData.lastEducation}
                onValueChange={(value) => handleChange("lastEducation", value)}
              >
                <SelectTrigger>
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

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your Country"
                required
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </div>
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your State"
                required
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1">
              <Input
                placeholder="Enter your City"
                required
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div className="w-full sm:flex-1">
              <Select
                value={formData.interestedCountry}
                onValueChange={(value) =>
                  handleChange("interestedCountry", value)
                }
              >
                <SelectTrigger>
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
            />
          </div>

          <DialogFooter className="pt-4">
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                type="button"
                onClick={() => dispatch(closeConsultantModal())}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={!isFormValid || isLoading}>
                {isLoading && <LoaderCircle className="animate-spin mr-2" />}
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
