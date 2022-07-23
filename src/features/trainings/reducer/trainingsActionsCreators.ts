import { createAction } from "@reduxjs/toolkit";
import { ITraining } from "../interfaces/ITraining";
import { ACTION_TYPES } from "./actionTypes";

export const trainingsActionsCreators = {
  load: createAction<Array<ITraining>>(ACTION_TYPES.LOAD),
  add: createAction<ITraining>(ACTION_TYPES.ADD),
  update: createAction<ITraining>(ACTION_TYPES.UPDATE),
  delete: createAction<string>(ACTION_TYPES.DELETE),
};
