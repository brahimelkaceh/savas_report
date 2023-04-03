import { createSlice } from "@reduxjs/toolkit";

const LeftBarSlice = createSlice({
  name: "LeftBar",
  initialState: {
    status: false,
  },
  reducers: {
    toggleLeftBar: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { toggleLeftBar } = LeftBarSlice.actions;
export default LeftBarSlice.reducer;
