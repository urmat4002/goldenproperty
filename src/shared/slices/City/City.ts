import { createSlice } from "@reduxjs/toolkit";

interface CitySlice {
  isOpen: boolean;
}

const initialState: CitySlice = {
  isOpen: false,
};

const citySlice = createSlice({
  name: "citySlice",
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

export const { setClose, setOpen } = citySlice.actions;
export default citySlice.reducer;
