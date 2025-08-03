import Repository from "./repositoryOne";
import { AxiosResponse } from "axios";
import { WhatsAppPayload, UserRepositoryInterface } from "./types";

const SEND_WHATSAPP_MESSAGE = "/send-whatsapp";

const userRepository: UserRepositoryInterface = {
  sendWhatsAppMessage(payload: WhatsAppPayload): Promise<AxiosResponse<any>> {
    return Repository.post(`${SEND_WHATSAPP_MESSAGE}`, payload);
  },
};

export default userRepository;
