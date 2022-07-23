import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { Exercise } from "../../interfaces/Exercise";
import ExercisesList from "./ExercisesList";

describe("Given ExercisesList component", () => {
  describe("When receive 2 items", () => {
    test("Then should render 2 items card", () => {
      const exercises: Array<Exercise> = [
        {
          id: "1",
          creationDate: "2022-07-14T15:51:44.850Z",
          name: "Ejercicio 1",
          description: "Descripción del ejercicio",
          image: "img/imgTest.png",
          primaryTarget: "Objetivo principal",
          secondaryTarget: "Objetivo secundario",
          sources: "Enlaces fuentes",
        },
        {
          id: "2",
          creationDate: "2022-07-14T15:51:44.850Z",
          name: "Ejercicio 2",
          description: "Descripción del ejercicio",
          image: "img/imgTest.png",
          primaryTarget: "Objetivo principal",
          secondaryTarget: "Objetivo secundario",
          sources: "Enlaces fuentes",
        },
      ];
      renderWithProviders(
        <MemoryRouter>
          <ExercisesList exercises={exercises} />
        </MemoryRouter>
      );

      expect(screen.getAllByRole("article").length).toBe(2);
      screen.getByText(/Ejercicio 1/i);
      screen.getByText(/Ejercicio 2/i);
    });
  });
});
