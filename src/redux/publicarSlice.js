import { createSlice } from "@reduxjs/toolkit";

const PublishSlice = createSlice({
  name: "Publicar1",
  initialState: {
    progressPublish1: {
      title: "",
      description: "",
      images: [],
      countChar: 0,
      paragraphAddFoto: true,
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