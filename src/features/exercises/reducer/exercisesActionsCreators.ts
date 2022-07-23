import { createAction } from "@reduxjs/toolkit";
import { IExercise } from "../interfaces/IExercise";
import { ACTION_TYPES } from "./actionTypes";

export const exercisesActionsCreators = {
  load: createAction<Array<IExercise>>(ACTION_TYPES.LOAD),
  add: createAction<IExercise>(ACTION_TYPES.ADD),
  update: createAction<IExercise>(ACTION_TYPES.UPDATE),
  delete: createAction<string>(ACTION_TYPES.DELETE),
};
