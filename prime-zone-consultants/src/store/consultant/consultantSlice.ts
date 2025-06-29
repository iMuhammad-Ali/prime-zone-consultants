import { createSlice } from "@reduxjs/toolkit";

interface ItemState {
  showConsultantModal: boolean;
}

const initialState: ItemState = {
  showConsultantModal: false,
};

const consultantSlice = createSlice({
  name: "consultant",
  initialState,
  reducers: {
    openConsultantModal(state) {
      state.showConsultantModal = true;
    },
    closeConsultantModal(state) {
      state.showConsultantModal = false;
    },
    toggleConsultantModal(state) {
      state.showConsultantModal = !state.showConsultantModal;
    },
  },
});

export const {
  openConsultantModal,
  closeConsultantModal,
  toggleConsultantModal,
} = consultantSlice.actions;

export default consultantSlice.reducer;
