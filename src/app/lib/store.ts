import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ModalSlice from "../../shared/slices/Modal/ModalSlice";
import MenuCityHover from "../../shared/slices/MenuCityHover/MenuCityHover";

export const store = configureStore({
  reducer: {
    modalSlice: ModalSlice,
    menuSlice: MenuCityHover,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
