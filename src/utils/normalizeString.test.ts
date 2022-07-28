import { normalizeStringForCompare } from "./normalizeString";

describe("Given normalizeString function", () => {
  describe("When give a not normalize string", () => {
    test("Then should get normalize string", () => {
      const value = "Camión";
      const result = "CAMION";
      expect(normalizeStringForCompare(value)).toBe(result);
    });
  });
});
