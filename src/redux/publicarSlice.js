import { createSlice } from "@reduxjs/toolkit";

const PublishSlice = createSlice({
  name: "Publicar1",
  initialState: {
    progressPublish1: {
      title: "",
      description: "",
      measurements: {}, // Inicializado como objeto
      value: 0,
      price_day: 0,
      brand: "",
      SizeId: 0,
      ProductTypeId: 0,
      ColorId: 0,
      GradeId: 0,
      productImage: [],
      productImageURL: [],
      countChar: 0,
    },
  },
  reducers: {
    updateProgressPublish1: (state, action) => {
      state.progressPublish1 = { ...state.progressPublish1, ...action.payload };
    },
    updateMeasurements: (state, action) => {
      state.progressPublish1.measurements = { ...state.progressPublish1.measurements, ...action.payload };
    },
    resetProgressPublish1: (state) => {
      state.progressPublish1 = {
        title: "",
        description: "",
        measurements: {}, // Reiniciar measurements como um objeto vazio
        value: 0,
        price_day: 0,
        brand: "",
        SizeId: 0,
        ProductTypeId: 0,
        ColorId: 0,
        GradeId: 0,
        productImage: [],
        productImageURL: [],
        countChar: 0,
      };
    },
  },
});

export const { updateProgressPublish1, updateMeasurements, resetProgressPublish1 } = PublishSlice.actions;
export default PublishSlice.reducer;
