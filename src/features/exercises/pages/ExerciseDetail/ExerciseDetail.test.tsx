import { screen } from "@testing-library/react";
import { MemoryRouter, useNavigate, useParams } from "react-router-dom";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { useExercises } from "../../hooks/useExercises";
import ExerciseDetail from "./ExerciseDetail";

jest.mock("../hooks/useExercises");
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

describe("Given ExerciseDetail component", () => {
  describe("When render the component with exerciseId", () => {
    test("Then should find exercise by id", () => {
      (useParams as jest.Mock).mockReturnValue({ exerciseId: "1" });

      const getExerciseById = jest.fn().mockResolvedValue({
        id: "1",
        creationDate: "2022-07-14T15:51:44.850Z",
        description: "Descripción del ejercicio",
        name: "Nombre del ejercicio",
        image: "img/imgTest.png",
        primaryTarget: "Objetivo principal",
        secondaryTarget: "Objetivo secundario",
        sources: "Enlaces fuentes",
      });
      (useExercises as jest.Mock).mockReturnValue({
        getExerciseById,
      });

      renderWithProviders(
        <MemoryRouter>
          <ExerciseDetail />
        </MemoryRouter>
      );

      expect(getExerciseById).toBeCalledTimes(1);
    });
  });

  describe("When render the component with undefined exerciseId", () => {
    test("Then it should show an error", async () => {
      (useParams as jest.Mock).mockReturnValue({ exerciseId: undefined });
      (useExercises as jest.Mock).mockReturnValue({
        getExerciseById: jest.fn(),
      });

      renderWithProviders(
        <MemoryRouter>
          <ExerciseDetail />
        </MemoryRouter>
      );

      await screen.findAllByText("Error");
    });
  });

  describe("When render an exercise", () => {
    test("Then should have the exercise data", async () => {
      const mockedNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockedNavigate);

      (useParams as jest.Mock).mockReturnValue({ exerciseId: "1" });

      const getExerciseById = jest.fn().mockResolvedValue({
        id: "1",
        creationDate: "2022-07-14T15:51:44.850Z",
        description: "Descripción del ejercicio",
        name: "Nombre del ejercicio",
        image: "img/imgTest.png",
        primaryTarget: "Objetivo principal",
        secondaryTarget: "Objetivo secundario",
        sources: "Enlaces fuentes",
      });
      (useExercises as jest.Mock).mockReturnValue({
        getExerciseById,
      });

      renderWithProviders(
        <MemoryRouter>
          <ExerciseDetail />
        </MemoryRouter>
      );

      await screen.findByText(/Nombre del ejercicio/i);
      await screen.findByText(/Descripción del ejercicio/i);
    });
  });
});
