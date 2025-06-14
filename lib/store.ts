import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./features/authModalSlice";
import userReducer from "./features/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authModal: authModalReducer,
      user: userReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
