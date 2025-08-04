import { AxiosResponse } from "axios";

// Define interfaces for repository payloads
export interface WhatsAppPayload {
  message: string;
}

// Define the repository interface
export interface UserRepositoryInterface {
  sendWhatsAppMessage(payload: WhatsAppPayload): Promise<AxiosResponse<any>>;
}
