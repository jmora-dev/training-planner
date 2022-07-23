import { createReducer } from "@reduxjs/toolkit";
import { LoginState } from "./LoginState";
import { loginActionsCreators } from "./loginActionsCreators";

const INITIAL_STATE: LoginState = {
  authenticated: false,
  token: "",
};

export const loginReducer = createReducer<LoginState>(
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
