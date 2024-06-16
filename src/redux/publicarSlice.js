import { createSlice } from "@reduxjs/toolkit";

const PublishSlice = createSlice({
  name: "Publicar1",
  initialState: {
    progressPublish1: {
      title: "",
      description: "",
      measurements: "",
      value: 0,
      price_day: 0,
      brand: "",
      SizeId: 0,
      ProductTypeId:0,
      ColorId: 0,
      GradeId: 0,
      imageUrls: [],
      countChar: 0,
      // measureBusto: "",
      // measureCintura: "",
      // measureQuadril: "",
      // measureComprimento: "",
    },
    
  },
  reducers: {
    updateProgressPublish1: (state, action) => {
      state.progressPublish1 = { ...state.progressPublish1, ...action.payload };
    },
    resetProgressPublish1: (state) => {
      // limpar os dados do pulicar
      state.progressPublish1 = {
      title: "",
      description: "",
      measurements: "",
      value: 0,
      price_day: 0,
      brand: "",
      SizeId: 0,
      ProductTypeId:0,
      ColorId: 0,
      GradeId: 0,
      imageUrls: [],
      countChar: 0,
      // measureBusto: "",
      // measureCintura: "",
      // measureQuadril: "",
      // measureComprimento: "",
      };
    },
  },
});

export const { updateProgressPublish1, resetProgressPublish1} = PublishSlice.actions;
export default PublishSlice.reducer;