import { createSlice } from "@reduxjs/toolkit";

const RentSlice = createSlice({
  name: "Rent",
  initialState: {
    progressRentList: [],
  },
  reducers: {
    addProgressRent: (state, action) => {
      state.progressRentList.push(action.payload);
    },
    updateProgressRent: (state, action) => {
      const { index, updatedData } = action.payload;
      state.progressRentList = state.progressRentList.map((item, i) =>
        i === index ? { ...item, ...updatedData } : item
      );
    },    
    removeProgressRent: (state, action) => {
      const indexToRemove = action.payload;
      state.progressRentList = state.progressRentList.filter((_, index) => index !== indexToRemove);
    },
  },
});

export const { addProgressRent, updateProgressRent } = RentSlice.actions;

export default RentSlice.reducer;
