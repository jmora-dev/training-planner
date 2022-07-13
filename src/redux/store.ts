import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "../features/exercises/reducer/exercisesReducer";
import { loginReducer } from "../features/login/reducer/loginReducer";
import { trainingsReducer } from "../features/trainings/reducer/trainingsReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    exercises: exercisesReducer,
    trainings: trainingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
