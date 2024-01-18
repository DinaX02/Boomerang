import { createSlice } from "@reduxjs/toolkit";

const RentSlice = createSlice({
  name: "Rent",
  initialState: {
    progressRentList: [], // Array to store all published items
  },
  reducers: {
    addProgressRent: (state, action) => {
      state.progressRentList.push(action.payload);
    },
    updateProgressRent: (state, action) => {
      const { index, updatedData } = action.payload;
      state.progressRentList[index] = {
        ...state.progressRentList[index],
        ...updatedData,
      };
    },
    removeProgressRent: (state, action) => {
      const indexToRemove = action.payload;
      state.progressRentList = state.progressRentList.filter((_, index) => index !== indexToRemove);
    },
  },
});

export const { addProgressRent, updateProgressRent } = RentSlice.actions;

export default RentSlice.reducer;
