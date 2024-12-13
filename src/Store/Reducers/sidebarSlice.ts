import { createSlice } from "@reduxjs/toolkit";

type SidebarState = "full" | "icons" | "hidden";

interface SidebarSliceState {
  sidebarState: SidebarState;
}

const initialState: SidebarSliceState = {
  sidebarState: "full",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarState: (state, action) => {
      state.sidebarState = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarState =
        state.sidebarState === "full"
          ? "icons"
          : state.sidebarState === "icons"
          ? "hidden"
          : "full";
    },
  },
});

export const { setSidebarState, toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
