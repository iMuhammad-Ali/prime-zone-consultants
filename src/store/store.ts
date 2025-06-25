import { combineReducers, configureStore } from "@reduxjs/toolkit";
import consultantSlice from "./consultant/consultantSlice";
import universitiesSlice from "./universities/universitiesSlice";
import coursesSlice from "./universities/coursesSlice";

const rootReducer = combineReducers({
  consultant: consultantSlice,
  university: universitiesSlice,
  course: coursesSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
