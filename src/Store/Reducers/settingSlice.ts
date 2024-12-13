import { createSlice } from "@reduxjs/toolkit";

interface settingState {
  isVisible: boolean;
  isTopMenuVisible: boolean;
  isSideMenuVisible: boolean;
  isBothMenuVisible: boolean;
}

const initialState: settingState = {
  isVisible: true,
  isTopMenuVisible: true,
  isSideMenuVisible: true,
  isBothMenuVisible: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleTopMenu: (state) => {
      state.isTopMenuVisible = !state.isTopMenuVisible;
    },
    showTopMenu: (state) => {
      state.isTopMenuVisible = true;
    },
    hideTopMenu: (state) => {
      state.isTopMenuVisible = false;
    },
    toggleBothMenu: (state) => {
        state.isTopMenuVisible = true;
        state.isSideMenuVisible= true
    },
  },
});

export const { toggleTopMenu, showTopMenu, hideTopMenu, toggleBothMenu } =
  settingSlice.actions;
export default settingSlice.reducer;
