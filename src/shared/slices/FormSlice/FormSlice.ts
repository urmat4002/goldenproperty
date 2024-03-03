import { createSlice } from "@reduxjs/toolkit";

interface CitySlice {
  isCatalog?: boolean;
}

const initialState: CitySlice = {
  isCatalog: false,
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    showCatalog: (state) => {
      state.isCatalog = true;
    },
    showDate: (state) => {
      state.isCatalog = false;
    },
  },
});

export const { showCatalog, showDate } = formSlice.actions;
export default formSlice.reducer;
