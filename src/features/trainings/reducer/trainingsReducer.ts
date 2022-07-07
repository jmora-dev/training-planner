import { createReducer } from "@reduxjs/toolkit";
import { trainingsActionsCreators } from "./trainingsActionsCreators";
import { iTrainingsState } from "./iTrainingsState";

const INITIAL_STATE: iTrainingsState = {
  data: [],
};

export const trainingsReducer = createReducer<iTrainingsState>(
  INITIAL_STATE,
  (builder) => {
    return builder
      .addCase(trainingsActionsCreators.load, (state, action) => {
        return {
          ...state,
          data: action.payload,
        };
      })
      .addCase(trainingsActionsCreators.add, (state, action) => {
        return { ...state, data: [...state.data, action.payload] };
      })
      .addCase(trainingsActionsCreators.update, (state, action) => {
        const data = state.data.map((exercise) =>
          exercise.id === action.payload.id ? action.payload : exercise
        );
        return { ...state, data };
      })
      .addCase(trainingsActionsCreators.delete, (state, action) => {
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
