import { api } from "./loginFirebaseApi";

describe("Given loginFirebaseApi service", () => {
  describe("When make valid login", () => {
    test("Then should return a token", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => ({
          error: undefined,
          idToken: "token",
        }),
      });
      const token = await api.login("email", "password");
      expect(token).toBe("token");
    });
  });

  describe("When make invalid login", () => {
    test("Then should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => ({
          error: { code: 400 },
          idToken: "",
        }),
      });
      const error = await api
        .login("email", "password")
        .catch((e) => new Error("error"));
      expect(error).toEqual(new Error("error"));
    });
  });
});
