import { createAction } from "@reduxjs/toolkit";
import { iTraining } from "../interfaces/iTraining";
import { ACTION_TYPES } from "./actionTypes";

export const trainingsActionsCreators = {
  load: createAction<Array<iTraining>>(ACTION_TYPES.LOAD),
  add: createAction<iTraining>(ACTION_TYPES.ADD),
  update: createAction<iTraining>(ACTION_TYPES.UPDATE),
  delete: createAction<string>(ACTION_TYPES.DELETE),
};
