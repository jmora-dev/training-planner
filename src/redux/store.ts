import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "../features/exercises/reducer/exercisesReducer";
import { trainingsReducer } from "../features/trainings/reducer/trainingsReducer";

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    trainings: trainingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
