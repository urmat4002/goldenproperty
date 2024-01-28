import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { navbarApi } from '../../../features/Navbar/api/Navbar.query';
import languageSlice from '../features/language/LanguageSlice';
import modalSlice from '../features/modal/ModalSlice';

export const store = configureStore({
  reducer: {
    // slice
    modalSlice: modalSlice,
    languageSlice: languageSlice,

    // query
    [navbarApi.reducerPath]: navbarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(navbarApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
