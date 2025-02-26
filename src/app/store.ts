import { configureStore } from "@reduxjs/toolkit";
import  userReducer   from "../features/User/userSlice";
import movieReducer from "../features/movie/MovieSlice"

export const store = configureStore({
    reducer: {
      user: userReducer,
      movie:movieReducer
    }
  });


export type RootState = ReturnType<typeof store.getState>;

export default store;



