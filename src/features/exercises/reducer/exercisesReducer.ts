import { createReducer } from "@reduxjs/toolkit";
import { exercisesActionsCreators } from "./exercisesActionsCreators";
import { ExercisesState } from "./ExercisesState";

const INITIAL_STATE: ExercisesState = {
  data: [],
};

export const exercisesReducer = createReducer<ExercisesState>(
  INITIAL_STATE,
  (builder) => {
    return builder
      .addCase(exercisesActionsCreators.load, (state, action) => {
        return {
          ...state,
          data: action.payload,
        };
      })
      .addCase(exercisesActionsCreators.add, (state, action) => {
        return { ...state, data: [...state.data, action.payload] };
      })
      .addCase(exercisesActionsCreators.update, (state, action) => {
        const data = state.data.map((exercise) =>
          exercise.id === action.payload.id ? action.payload : exercise
        );
        return { ...state, data };
      })
      .addCase(exercisesActionsCreators.delete, (state, action) => {
        const data = state.data.filter(
          (exercise) => exercise.id !== action.payload
        );
        return { ...state, data };
      })
      .addDefaultCase((state) => {
        return state;
      });
  }
);
