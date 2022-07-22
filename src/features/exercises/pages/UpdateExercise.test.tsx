import { fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, useNavigate, useParams } from "react-router-dom";
import { renderWithProviders } from "../../../redux/renderWithProviders";
import { useExercises } from "../hooks/useExercises";
import UpdateExercise from "./UpdateExercise";

jest.mock("../hooks/useExercises");
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

describe("Given UpdateExercise component", () => {
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
          <UpdateExercise />
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
          <UpdateExercise />
        </MemoryRouter>
      );

      await screen.findAllByText("Error");
    });
  });

  describe("When click on save", () => {
    test("Then should call to save function in hook", async () => {
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
      const updateExercise = jest.fn().mockResolvedValue({});
      (useExercises as jest.Mock).mockReturnValue({
        getExerciseById,
        updateExercise,
      });

      renderWithProviders(
        <MemoryRouter>
          <UpdateExercise />
        </MemoryRouter>
      );

      const submitButton = await screen.findByText(/Guardar/i);
      expect(submitButton).toBeInTheDocument();
      fireEvent.click(submitButton);
      expect(updateExercise).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(mockedNavigate).toHaveBeenCalledTimes(1);
      });
    });
  });
});
