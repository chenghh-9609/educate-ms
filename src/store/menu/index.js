import { createSlice } from "@reduxjs/toolkit";

const menuSlicer = createSlice({
  name: "curMenu",
  initialState: {
    value: ["首页"],
  },
  reducers: {
    setCurMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurMenu } = menuSlicer.actions;
export default menuSlicer.reducer;
