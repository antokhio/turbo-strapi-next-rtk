import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import api from './api';

export const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });

export type MakeStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<MakeStore['getState']>;
export type AppDispatch = MakeStore['dispatch'];

export const wrapper = createWrapper<MakeStore>(makeStore);
