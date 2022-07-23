import { createAction } from "@reduxjs/toolkit";
import { Exercise } from "../interfaces/Exercise";
import { ACTION_TYPES } from "./actionTypes";

export const exercisesActionsCreators = {
  load: createAction<Array<Exercise>>(ACTION_TYPES.LOAD),
  add: createAction<Exercise>(ACTION_TYPES.ADD),
  update: createAction<Exercise>(ACTION_TYPES.UPDATE),
  delete: createAction<string>(ACTION_TYPES.DELETE),
};
