import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "~/config/firebase";
import { toast } from "~/hooks/use-toast";
import { ConsultationData } from "~/types/consultation";

export const addConsultation = createAsyncThunk(
  "consultant/addConsultation",
  async (payload: ConsultationData, { rejectWithValue }) => {
    try {
      const consultation = {
        ...payload,
        createdAt: serverTimestamp(),
        status: "NOT REPLIED",
      };
      const docRef = await addDoc(
        collection(db, "consultations"),
        consultation
      );
      toast({
        title: "Request submitted successfully!",
        description: "We'll get back to you soon.",
      });
      return { id: docRef.id, ...consultation };
    } catch (error) {
      return rejectWithValue("Failed to add consultation");
    }
  }
);
