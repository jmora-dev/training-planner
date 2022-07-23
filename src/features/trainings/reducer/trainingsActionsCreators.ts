import { createAction } from "@reduxjs/toolkit";
import { Training } from "../interfaces/Training";
import { ACTION_TYPES } from "./actionTypes";

export const trainingsActionsCreators = {
  load: createAction<Array<Training>>(ACTION_TYPES.LOAD),
  add: createAction<Training>(ACTION_TYPES.ADD),
  update: createAction<Training>(ACTION_TYPES.UPDATE),
  delete: createAction<string>(ACTION_TYPES.DELETE),
};
