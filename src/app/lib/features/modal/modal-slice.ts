import { createSlice } from '@reduxjs/toolkit';

interface ModalSlice {
  isOpen: boolean;
}

const initialState: ModalSlice = {
  isOpen: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setClose, setOpen } = modalSlice.actions;
export default modalSlice.reducer;
