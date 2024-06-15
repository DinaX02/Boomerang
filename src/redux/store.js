import { configureStore } from "@reduxjs/toolkit";
import PublishSlice from "./publicarSlice";
import RentSlice from "./rentSlice";
import { myAPI } from "./productAPI";
import myUserAPI from "./usersAPI";
import myFavoriteAPI from "./favoriteAPI";

const store = configureStore({
  reducer: {
    Publicar1: PublishSlice,
    Rent: RentSlice,
    [myAPI.reducerPath]: myAPI.reducer,
    [myUserAPI.reducerPath]: myUserAPI.reducer,
    [myFavoriteAPI.reducerPath]: myFavoriteAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myAPI.middleware, myUserAPI.middleware, myFavoriteAPI.middleware),
});

export default store;