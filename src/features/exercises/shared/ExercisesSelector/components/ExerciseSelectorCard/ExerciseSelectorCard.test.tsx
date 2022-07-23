import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../../../redux/renderWithProviders";
import { IExercise } from "../../../../interfaces/IExercise";
import ExerciseSelectorCard from "./ExerciseSelectorCard";

describe("Given", () => {
  let exercise: IExercise;
  beforeEach(() => {
    exercise = {
      id: "1",
      creationDate: "2022-07-14T15:51:44.850Z",
      name: "Nombre del ejercicio",
      description: "Descripción del ejercicio",
      image: "img/imgTest.png",
      primaryTarget: "Objetivo principal",
      secondaryTarget: "Objetivo secundario",
      sources: "Enlaces fuentes",
    };
  });

  describe("When pass exercise to component", () => {
    test("Then should have exercise data", () => {
      const selectExerciseMock = jest.fn();
      renderWithProviders(
        <ExerciseSelectorCard
          exercise={exercise}
          isSelected={true}
          selectExercise={selectExerciseMock}
        />
      );
      screen.getByText(/Nombre del ejercicio/i);
    });
  });

  describe("When exercise is selected", () => {
    test("Then selected icon should be visible", () => {
      const selectExerciseMock = jest.fn();
      renderWithProviders(
        <ExerciseSelectorCard
          exercise={exercise}
          isSelected={true}
          selectExercise={selectExerciseMock}
        />
      );
      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
      screen.getByLabelText(/selected/i);
    });
  });

  describe("When exercise is not selected", () => {
    test("Then selected icon should be hidden", () => {
      const selectExerciseMock = jest.fn();
      renderWithProviders(
        <ExerciseSelectorCard
          exercise={exercise}
          isSelected={false}
          selectExercise={selectExerciseMock}
        />
      );
      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
      expect(screen.queryByLabelText(/selected/i)).not.toBeInTheDocument();
    });
  });

  describe("When click on exercise", () => {
    test("Then select exercise function should be called", () => {
      const selectExerciseMock = jest.fn();
      renderWithProviders(
        <ExerciseSelectorCard
          exercise={exercise}
          isSelected={false}
          selectExercise={selectExerciseMock}
        />
      );
      const article = screen.getByRole("article");
      fireEvent.click(article);
      expect(selectExerciseMock).toBeCalledTimes(1);
    });
  });
});
