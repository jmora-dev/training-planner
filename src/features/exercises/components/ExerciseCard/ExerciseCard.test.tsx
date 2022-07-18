import { iExercise } from "../../interfaces/iExercise";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import ExerciseCard from "./ExerciseCard";
import { fireEvent, screen } from "@testing-library/react";

describe("Given ExerciseCard component", () => {
  let exercise: iExercise;
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
      renderWithProviders(<ExerciseCard exercise={exercise} />);
      screen.getByText(/Nombre del ejercicio/i);
    });
  });

  describe("When card is selectable", () => {
    describe("When is selected", () => {
      test("Then selected icon should be in the document", () => {
        renderWithProviders(
          <ExerciseCard
            exercise={exercise}
            isSelectable={true}
            isSelected={true}
          />
        );
        screen.getByLabelText(/exercise selected/i);
      });

      test("When click on card select function should be called", () => {
        const onSelect = jest.fn();
        renderWithProviders(
          <ExerciseCard
            exercise={exercise}
            isSelectable={true}
            isSelected={true}
            onSelect={onSelect}
          />
        );
        const article = screen.getByRole("article");
        fireEvent.click(article);
        expect(onSelect).toBeCalledTimes(1);
      });
    });
  });
});
