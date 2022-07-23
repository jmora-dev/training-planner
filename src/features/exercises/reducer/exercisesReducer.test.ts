import { exercisesActionsCreators } from "./exercisesActionsCreators";
import { exercisesReducer } from "./exercisesReducer";
import { IExercisesState } from "./IExercisesState";

describe("Given exercises reducer function", () => {
  let state: IExercisesState;

  beforeEach(() => {
    state = {
      data: [
        {
          id: "1",
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Nombre del ejercicio",
          description: "Descripcción del ejercicio",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "http://pagina.com/recursos",
        },
      ],
    };
  });

  describe("When make load action with 1 data item", () => {
    test("Then state value should be data equal to Array of 1 data item", () => {
      const initialState = { data: [] };
      const result = exercisesReducer(
        initialState,
        exercisesActionsCreators.load(state.data)
      );
      expect(result.data).toEqual(state.data);
    });
  });

  describe("When make delete 1 item action", () => {
    test("Then state value should be data equal to []", () => {
      const deleteId = "1";
      const result = exercisesReducer(
        state,
        exercisesActionsCreators.delete(deleteId)
      );
      expect(result.data).toEqual([]);
    });
  });

  describe("When make add new item action", () => {
    test("Then state value data should have the new item", () => {
      const newItem = {
        id: "2",
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Nombre del ejercicio 2",
        description: "Descripcción del ejercicio 2",
        image: "img/img2.png",
        primaryTarget: "Pases 2",
        secondaryTarget: "Velocidad 2",
        sources: "http://pagina.com/recursos2",
      };
      const result = exercisesReducer(
        state,
        exercisesActionsCreators.add(newItem)
      );
      expect(result.data.length).toBe(2);
      expect(result.data.find((item) => item.id === "2")).not.toBe(undefined);
    });
  });

  describe("When make update 1 item action", () => {
    test("Then state value data item should be the update data", () => {
      const updateData = {
        id: "1",
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "UpdateItem",
        description: "UpdateDescription",
        image: "img/img2.png",
        primaryTarget: "Pases 2",
        secondaryTarget: "Velocidad 2",
        sources: "http://pagina.com/recursos2",
      };
      const result = exercisesReducer(
        state,
        exercisesActionsCreators.update(updateData)
      );
      const exercise = result.data.find((item) => item.id === "1");
      expect(exercise?.name).toBe("UpdateItem");
      expect(exercise?.description).toBe("UpdateDescription");
    });
  });
});
