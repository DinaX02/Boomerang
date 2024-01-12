import { configureStore } from "@reduxjs/toolkit";
import PublishSlice from "./publicarSlice";

const store = configureStore({
  reducer: {
    Publicar1: PublishSlice,
  },
});

export default store;