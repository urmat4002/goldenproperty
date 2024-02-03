import { createSlice } from '@reduxjs/toolkit';

interface MenuSlice {
  isOpen: boolean;
}

const initialState: MenuSlice = {
	isOpen: false
}

const menuSlice = createSlice({
  name: 'menuSlice',
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

export const { setClose, setOpen } = menuSlice.actions;
export default menuSlice.reducer;
