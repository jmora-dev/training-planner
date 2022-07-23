import { api } from "./exercisesFirebaseApi";

describe("Given firebase api for exercises", () => {
  describe("When get all exercises and fetch return an object with two keys", () => {
    test("Then should return an array with two items with id", async () => {
      const responseData = {
        "1": {
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Exercise 1",
          description: "Descripcción del ejercicio",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "urlPage",
        },
        "2": {
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Exercise 2",
          description: "Descripcción del ejercicio",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "urlPage",
        },
      };
      const expectedResult = [
        {
          id: "1",
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Exercise 1",
          description: "Descripcción del ejercicio",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "urlPage",
        },
        {
          id: "2",
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Exercise 2",
          description: "Descripcción del ejercicio",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "urlPage",
        },
      ];
      global.fetch = jest.fn().mockResolvedValue({ json: () => responseData });
      const res = await api.getExercises("token");
      expect(res).toEqual(expectedResult);
    });
  });

  describe("When get exercise by id fetch return the data of an object", () => {
    test("Then should return an object with id", async () => {
      const responseData = {
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Exercise 1",
        description: "Descripcción del ejercicio",
        image: "img/img.png",
        primaryTarget: "Pases",
        secondaryTarget: "Velocidad",
        sources: "urlPage",
      };
      const expectedResult = {
        id: "1",
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Exercise 1",
        description: "Descripcción del ejercicio",
        image: "img/img.png",
        primaryTarget: "Pases",
        secondaryTarget: "Velocidad",
        sources: "urlPage",
      };
      global.fetch = jest.fn().mockResolvedValue({ json: () => responseData });
      const res = await api.getExerciseById("1", "token");
      expect(res).toEqual(expectedResult);
    });
  });

  describe("When insert a valid exercise", () => {
    test("Then should be the created exercise id", async () => {
      const propExercise = {
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Exercise 1",
        description: "Descripcción del ejercicio",
        image: "img/img.png",
        primaryTarget: "Pases",
        secondaryTarget: "Velocidad",
        sources: "urlPage",
      };
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: () => ({ name: "1" }) });
      const res = await api.insertExercise(propExercise, "token");
      expect(res).toBe("1");
    });
  });

  describe("When update a valid exercise", () => {
    test("Then should return the exercise with updates and id", async () => {
      const propExercise = {
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Exercise 1",
        description: "Descripcción del ejercicio",
        image: "img/img.png",
        primaryTarget: "Pases",
        secondaryTarget: "Velocidad",
        sources: "urlPage",
      };
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: () => ({ ...propExercise, id: "1" }) });
      const res = await api.updateExercise("1", propExercise, "token");
      expect(res).toEqual({ ...propExercise, id: "1" });
    });
  });

  describe("When delete a valid exercise", () => {
    test("Then should return response with ok = true property", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const res = await api.deleteExercise("1", "token");
      expect(res).toEqual({ ok: true });
    });
  });
});
