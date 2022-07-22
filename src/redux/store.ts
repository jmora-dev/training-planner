import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { exercisesReducer } from "../features/exercises/reducer/exercisesReducer";
import { loginReducer } from "../features/login/reducer/loginReducer";
import { trainingsReducer } from "../features/trainings/reducer/trainingsReducer";

const appReducers = combineReducers({
  login: loginReducer,
  exercises: exercisesReducer,
  trainings: trainingsReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: appReducers,
    preloadedState,
  });
}

// export const store = configureStore({
//   reducer: {
//     login: loginReducer,
//     exercises: exercisesReducer,
//     trainings: trainingsReducer,
//   },
//   preloadedState,
// });

export type RootState = ReturnType<typeof appReducers>;
export type AppStore = ReturnType<typeof setupStore>;
