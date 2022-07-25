import AddExercise from "./AddExercise";
import { useExercises } from "../../hooks/useExercises";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

jest.mock("../hooks/useExercises");
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: jest.fn(),
}));

describe("Given AddExercise component", () => {
  describe("When click on submit", () => {
    test("Then insertExercise should be called", async () => {
      const insertExercise = jest.fn().mockResolvedValue({});
      (useExercises as jest.Mock).mockReturnValue({ insertExercise });

      const mockedNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockedNavigate);

      renderWithProviders(
        <MemoryRouter>
          <AddExercise />
        </MemoryRouter>
      );

      const submitButton = screen.getByText(/Guardar/i);
      expect(submitButton).toBeInTheDocument();
      fireEvent.click(submitButton);
      expect(insertExercise).toBeCalledTimes(1);
      await waitFor(() => {
        expect(mockedNavigate).toHaveBeenCalledTimes(1);
      });
    });
  });
});
