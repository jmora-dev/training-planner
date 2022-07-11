import { createAction } from "@reduxjs/toolkit";
import { ACTION_TYPES } from "./actionTypes";

export const loginActionsCreators = {
  login: createAction<string>(ACTION_TYPES.LOGIN),
  logout: createAction<void>(ACTION_TYPES.LOGOUT),
};
