import { loginActionsCreators } from "./loginActionsCreators";
import { loginReducer } from "./loginReducer";

describe("Given login reducer function", () => {
  describe("When make login action with token test", () => {
    test("Then state value should be authenticated true and token test", () => {
      const initialState = { authenticated: false, token: "" };
      const result = loginReducer(
        initialState,
        loginActionsCreators.login("test")
      );
      expect(result.authenticated).toBe(true);
      expect(result.token).toBe("test");
    });
  });
  describe("When make logout action", () => {
    test("Then state value should be authenticated false and token ''", () => {
      const initialState = { authenticated: true, token: "test" };
      const result = loginReducer(initialState, loginActionsCreators.logout());
      expect(result.authenticated).toBe(false);
      expect(result.token).toBe("");
    });
  });
});
