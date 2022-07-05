import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "../features/exercises/reducer/exercisesReducer";

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
