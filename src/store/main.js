import { createSlice } from "@reduxjs/toolkit";

const mainReducer = createSlice({
  name: 'main',
  initialState: {
    isFixed: true,
    isSelected: -1,
    isAlpha: true
  },
  reducers: {
    changeFixed(state, action) {
      state.isFixed = action.payload;
    },
    changeChoice(state, action) {
      state.isSelected = action.payload;
    },
    changeAlpha(state, action) {
      state.isAlpha = action.payload
    }
  }
})

export const { changeFixed, changeChoice, changeAlpha } = mainReducer.actions;
export default mainReducer.reducer;