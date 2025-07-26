import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from "~/hooks/use-toast";

const sendContactUs = async (formData: any) => {
  try {
    await addDoc(collection(db, "contactus"), {
      ...formData,
      createdAt: new Date().toISOString(),
      status: "pending",
    });
    toast({
      title: "Request submitted successfully!",
      description: "We'll get back to you soon.",
    });
    return true; // Indicate success
  } catch (error) {
    console.error("Error sending contact us form:", error);
    throw error;
  }
};

export default sendContactUs;
