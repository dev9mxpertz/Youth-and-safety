import { configureStore } from "@reduxjs/toolkit";
import settingSlice from './Reducers/settingSlice';
import sidebarSlice from './Reducers/sidebarSlice';

export const store = configureStore({
  reducer: {
    setting: settingSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
