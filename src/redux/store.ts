import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "../features/exercices/reducer/exercisesReducer";

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
