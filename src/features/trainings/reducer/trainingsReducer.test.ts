import { trainingsActionsCreators } from "./trainingsActionsCreators";
import { trainingsReducer } from "./trainingsReducer";
import { TrainingsState } from "./TrainingsState";

describe("Given exercises reducer function", () => {
  let state: TrainingsState;

  beforeEach(() => {
    state = {
      data: [
        {
          id: "1",
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Nombre del entrenamiento",
          description: "Descripcción del entrenamiento",
          equipment: "Balón",
          exercises: [],
          observation: "Observaciones",
          players: "3",
          target: "Resistencia",
          team: "Celtics",
        },
      ],
    };
  });

  describe("When make load action with 1 data item", () => {
    test("Then state value should be data equal to Array of 1 data item", () => {
      const initialState = { data: [] };
      const result = trainingsReducer(
        initialState,
        trainingsActionsCreators.load(state.data)
      );
      expect(result.data).toEqual(state.data);
    });
  });

  describe("When make delete 1 item action", () => {
    test("Then state value should be data equal to []", () => {
      const deleteId = "1";
      const result = trainingsReducer(
        state,
        trainingsActionsCreators.delete(deleteId)
      );
      expect(result.data).toEqual([]);
    });
  });

  describe("When make add new item action", () => {
    test("Then state value data should have the new item", () => {
      const newItem = {
        id: "2",
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Nombre del entrenamiento 2",
        description: "Descripcción del entrenamiento 2",
        equipment: "Balón",
        exercises: [],
        observation: "Observaciones 2",
        players: "5",
        target: "Velocidad",
        team: "Celtics",
      };
      const result = trainingsReducer(
        state,
        trainingsActionsCreators.add(newItem)
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
        equipment: "Balón",
        exercises: [],
        observation: "Observaciones 2",
        players: "5",
        target: "Velocidad",
        team: "Raptors",
      };
      const result = trainingsReducer(
        state,
        trainingsActionsCreators.update(updateData)
      );
      const exercise = result.data.find((item) => item.id === "1");
      expect(exercise?.name).toBe("UpdateItem");
      expect(exercise?.description).toBe("UpdateDescription");
      expect(exercise?.team).toBe("Raptors");
    });
  });
});
