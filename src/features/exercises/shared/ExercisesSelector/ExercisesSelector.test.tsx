import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { useExercises } from "../../hooks/useExercises";
import ExercisesSelector from "./ExercisesSelector";

jest.mock("../../hooks/useExercises");

const exercises = [
  {
    id: "1",
    creationDate: "2022-07-17T15:59:59.532Z",
    name: "Exercise 1",
    description: "Descripcción del ejercicio",
    image: "img/img.png",
    primaryTarget: "Pases",
    secondaryTarget: "Velocidad",
    sources: "http://pagina.com/recursos",
  },
  {
    id: "2",
    creationDate: "2022-07-17T15:59:59.532Z",
    name: "Exercise 2",
    description: "Descripcción del ejercicio",
    image: "img/img.png",
    primaryTarget: "Pases",
    secondaryTarget: "Velocidad",
    sources: "http://pagina.com/recursos",
  },
];

describe("Given ExerciseSelector component", () => {
  describe("When have array with two exercises, one selected", () => {
    test("Then should show the two exercises names and one selected", () => {
      const reloadAllExercises = jest.fn();
      (useExercises as jest.Mock).mockReturnValue({
        reloadAllExercises,
        exercises: [...exercises],
      });
      renderWithProviders(<ExercisesSelector idsExercisesSelected={["1"]} />);
      screen.getByText(/Exercise 1/i);
      screen.getByText(/Exercise 2/i);
      expect(screen.getAllByLabelText(/selected/i).length).toBe(1);
      expect(reloadAllExercises).toBeCalledTimes(1);
    });
  });

  describe("When click in exercise", () => {
    test("Then should toggle selected state of exercise", () => {
      (useExercises as jest.Mock).mockReturnValue({
        reloadAllExercises: jest.fn(),
        exercises: [...exercises],
      });
      renderWithProviders(<ExercisesSelector idsExercisesSelected={["1"]} />);
      const articles = screen.getAllByRole("article");
      expect(articles.length).toBe(2);
      expect(screen.getAllByLabelText(/selected/i).length).toBe(1);
      fireEvent.click(articles[1]);
      expect(screen.getAllByLabelText(/selected/i).length).toBe(2);
      fireEvent.click(articles[1]);
      expect(screen.getAllByLabelText(/selected/i).length).toBe(1);
    });
  });
});
