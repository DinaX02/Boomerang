import { createSlice } from "@reduxjs/toolkit";

const PublishSlice = createSlice({
  name: "Publicar1",
  initialState: {
    progressPublish1: {
      title: "",
      description: "",
      imageUrls: [],
      countChar: 0,
      size: "",
      colour: "",
      categories:"",
      marcas: "",
      conditionOfClothing: "",
      measureBusto: "",
      measureCintura: "",
      measureQuadril: "",
      measureComprimento: "",
      estimatedValue:"",
      rentalPricePerDay: "",
    },
    
  },
  reducers: {
    updateProgressPublish1: (state, action) => {
      state.progressPublish1 = { ...state.progressPublish1, ...action.payload };
    },

  },
});

export const { updateProgressPublish1 } = PublishSlice.actions;
export default PublishSlice.reducer;