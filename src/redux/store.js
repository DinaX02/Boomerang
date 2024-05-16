import { configureStore } from "@reduxjs/toolkit";
import PublishSlice from "./publicarSlice";
import RentSlice from "./rentSlice";
import { myAPI } from "./productAPI";
import myUserAPI from "./usersAPI";

const store = configureStore({
  reducer: {
    Publicar1: PublishSlice,
    Rent: RentSlice,
    [myAPI.reducerPath]: myAPI.reducer,
    [myUserAPI.reducerPath]: myUserAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myAPI.middleware, myUserAPI.middleware),
});

export default store;