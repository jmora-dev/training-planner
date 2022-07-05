import { createAction } from "@reduxjs/toolkit";
import { iExercise } from "../interfaces/iExercise";
import { ACTION_TYPES } from "./actionTypes";

export const exercisesActionsCreators = {
  load: createAction<Array<iExercise>>(ACTION_TYPES.LOAD),
  add: createAction<iExercise>(ACTION_TYPES.ADD),
  update: createAction<iExercise>(ACTION_TYPES.UPDATE),
  delete: createAction<number>(ACTION_TYPES.DELETE),
};
