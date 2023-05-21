import { createSlice } from "@reduxjs/toolkit";

const LeftBarSlice = createSlice({
  name: "LeftBar",
  initialState: {
    status: false,
    showing: 0,
  },
  reducers: {
    toggleLeftBar: (state, action) => {
      state.status = action.payload;
    },
    showingColmun: (state, action) => {
      state.showing = action.payload;
    },
  },
});
export const { toggleLeftBar, showingColmun } = LeftBarSlice.actions;
export default LeftBarSlice.reducer;
