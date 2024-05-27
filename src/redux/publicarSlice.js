import { createSlice } from "@reduxjs/toolkit";

const PublishSlice = createSlice({
  name: "Publicar1",
  initialState: {
    progressPublish1: {
      title: "",
      description: "",
      imageUrls: [],
      countChar: 0,
      SizeId: "",
      ColorId: "",
      ProductTypeId:"",
      brand: "",
      conditionOfClothing: "",
      measureBusto: "",
      measureCintura: "",
      measureQuadril: "",
      measureComprimento: "",
      value:"",
      price_day: "",
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
        imageUrls: [],
        countChar: 0,
        SizeId: "",
        ColorId: "",
        ProductTypeId: "",
        brand: "",
        conditionOfClothing: "",
        measureBusto: "",
        measureCintura: "",
        measureQuadril: "",
        measureComprimento: "",
        value: "",
        price_day: "",
      };
    },
  },
});

export const { updateProgressPublish1, resetProgressPublish1} = PublishSlice.actions;
export default PublishSlice.reducer;