import { renderWithProviders } from "../../../../redux/renderWithProviders";
import ExerciseCard from "./ExerciseCard";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { Exercise } from "../../interfaces/Exercise";

describe("Given ExerciseCard component", () => {
  let exercise: Exercise;
  beforeEach(() => {
    exercise = {
      id: "1",
      creationDate: "2022-07-14T15:51:44.850Z",
      description: "Descripción del ejercicio",
      name: "Nombre del ejercicio",
      image: "img/imgTest.png",
      primaryTarget: "Objetivo principal",
      secondaryTarget: "Objetivo secundario",
      sources: "Enlaces fuentes",
    };
  });

  describe("When exercise name is 'Nombre del ejercicio'", () => {
    test("Then name should be in the document", () => {
      renderWithProviders(
        <MemoryRouter>
          <ExerciseCard exercise={exercise} />
        </MemoryRouter>
      );
      screen.getByText(/Nombre del ejercicio/i);
    });
  });
});
