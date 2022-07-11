import { createReducer } from "@reduxjs/toolkit";
import { iLoginState } from "./iLoginState";
import { loginActionsCreators } from "./loginActionsCreators";

const INITIAL_STATE: iLoginState = {
  authenticated: false,
  token: "",
};

export const loginReducer = createReducer<iLoginState>(
  INITIAL_STATE,
  (builder) => {
    return builder
      .addCase(loginActionsCreators.login, (state, action) => {
        return {
          ...state,
          authenticated: true,
          token: action.payload,
        };
      })
      .addCase(loginActionsCreators.logout, (state) => {
        return { ...state, authenticated: false, token: "" };
      })
      .addDefaultCase((state) => {
        return state;
      });
  }
);
