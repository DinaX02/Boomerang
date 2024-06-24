import { configureStore } from "@reduxjs/toolkit";
import PublishSlice from "./publicarSlice";
import RentSlice from "./rentSlice";
import { myAPI } from "./productAPI";
import myUserAPI from "./usersAPI";
import myFavoriteAPI from "./favoriteAPI";
import myLocationAPI from "./locationAPI";
import myPopularAPI from "./popularAPI";
import myTransactionAPI from "./transactionAPI";
import myExtraAPI from "./extraAPI";
import myNotificationsnAPI from "./notificationAPI";
import RentSecondSlice from "./rentSecondSlice";

const store = configureStore({
  reducer: {
    Publicar1: PublishSlice,
    Rent: RentSlice,
    RentSecond: RentSecondSlice,
    [myAPI.reducerPath]: myAPI.reducer,
    [myUserAPI.reducerPath]: myUserAPI.reducer,
    [myFavoriteAPI.reducerPath]: myFavoriteAPI.reducer,
    [myLocationAPI.reducerPath]: myLocationAPI.reducer,
    [myPopularAPI.reducerPath]: myPopularAPI.reducer,
    [myTransactionAPI.reducerPath]: myTransactionAPI.reducer,
    [myExtraAPI.reducerPath]: myExtraAPI.reducer,
    [myNotificationsnAPI.reducerPath]: myNotificationsnAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myAPI.middleware, myUserAPI.middleware, myFavoriteAPI.middleware, myLocationAPI.middleware, myPopularAPI.middleware, myTransactionAPI.middleware, myExtraAPI.middleware, myNotificationsnAPI.middleware),
});

export default store;