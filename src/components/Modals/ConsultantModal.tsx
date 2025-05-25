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
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { closeConsultantModal } from "~/store/consultant/consultantSlice";

const ConsultantModal = () => {
  const dispatch = useAppDispatch();
  const { showConsultantModal } = useAppSelector((state) => state.consultant);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <Dialog
      open={showConsultantModal}
      onOpenChange={() => dispatch(closeConsultantModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Free Consultation</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Input
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => dispatch(closeConsultantModal())}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ConsultantModal };
