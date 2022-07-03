import { createReducer } from "@reduxjs/toolkit";
import { exercisesActionsCreators } from "./exercisesActionsCreators";
import { iExercisesState } from "./iExercisesState";

const INITIAL_STATE: iExercisesState = {
  exercises: [],
};

export const notesReducer = createReducer<iExercisesState>(
  INITIAL_STATE,
  (builder) => {
    return builder
      .addCase(exercisesActionsCreators.load, (state, action) => {
        return {
          ...state,
          exercises: action.payload,
        };
      })
      .addCase(exercisesActionsCreators.add, (state, action) => {
        return { ...state, exercises: [...state.exercises, action.payload] };
      })
      .addCase(exercisesActionsCreators.update, (state, action) => {
        const exercises = state.exercises.map((exercise) =>
          exercise.id === action.payload.id ? action.payload : exercise
        );
        return { ...state, exercises };
      })
      .addCase(exercisesActionsCreators.delete, (state, action) => {
        const exercises = state.exercises.filter(
          (exercise) => exercise.id !== action.payload
        );
        return { ...state, exercises };
      })
      .addDefaultCase((state) => {
        return state;
      });
  }
);
