import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../features/modal/modal-slice';
import languageSlice from '../features/language/language-slice'

export const store = configureStore({
  reducer: {
    modalSlice: modalSlice,
    languageSlice: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
