import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import ModalSlice from './features/Modal/ModalSlice';
import MenuCityHover from './features/MenuCityHover/MenuCityHover'

export const store = configureStore({
  reducer: {
    modalSlice: ModalSlice,
    menuSlice: MenuCityHover
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
