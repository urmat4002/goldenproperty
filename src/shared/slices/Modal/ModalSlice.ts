import { createSlice } from "@reduxjs/toolkit";

interface ModalSlice {
  isOpen: boolean;
}

const initialState: ModalSlice = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isOpen = true;
    },
    setCloseModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setCloseModal, setOpenModal } = modalSlice.actions;
export default modalSlice.reducer;
