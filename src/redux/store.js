import { configureStore } from "@reduxjs/toolkit";
import launchesReducer from "../features/launchesSlice";
import rocketsReducer from "../features/rocketsSlice";
export const store = configureStore({
    reducer: {
        launches: launchesReducer,
        rockets: rocketsReducer
    }
});