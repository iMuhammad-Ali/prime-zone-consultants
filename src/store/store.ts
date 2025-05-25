import { combineReducers, configureStore } from "@reduxjs/toolkit";
import consultantSlice from "./consultant/consultantSlice";

const rootReducer = combineReducers({
  consultant: consultantSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
