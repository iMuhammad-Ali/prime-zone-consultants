import { useCallback } from "react";
import { useAppDispatch } from "./redux";
import { openConsultantModal } from "~/store/consultant/consultantSlice";

export function useOpenConsultantModal() {
  const dispatch = useAppDispatch();

  const openModal = useCallback(() => {
    dispatch(openConsultantModal());
  }, [dispatch]);

  return openModal;
}
