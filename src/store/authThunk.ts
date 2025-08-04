import { createAsyncThunk } from "@reduxjs/toolkit";
import { RepositoryFactory } from "../repository/repositoryFactory";
import { WhatsAppPayload } from "../repository/types";

const user = RepositoryFactory.get("user");

export const sendWhatsAppMessage = createAsyncThunk(
  "/send-whatsapp",
  async (payload: WhatsAppPayload, thunkAPI) => {
    try {
      const response = await user.sendWhatsAppMessage(payload);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
