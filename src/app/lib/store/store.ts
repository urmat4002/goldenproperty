import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../features/modal/modal-slice';
import languageSlice from '../features/language/language-slice'
import { navbarApi } from '../../../features/navbar/api/navbar.query'
import { setupListeners } from '@reduxjs/toolkit/query'

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
