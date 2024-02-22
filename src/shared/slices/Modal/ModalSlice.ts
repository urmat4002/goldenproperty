import { createSlice } from "@reduxjs/toolkit";

interface ModalSlice {
  isOpen: boolean;
  isForm: boolean;
}

const initialState: ModalSlice = {
  isOpen: false,
  isForm: true,
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
    showForm: (state) => {
      state.isForm = true;
    },
    showFormMessage: (state) => {
      state.isForm = false;
    },
  },
});

export const { setCloseModal, setOpenModal, showForm, showFormMessage } =
  modalSlice.actions;
export default modalSlice.reducer;
