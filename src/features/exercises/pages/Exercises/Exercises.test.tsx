import { waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { useExercises } from "../../hooks/useExercises";
import Exercises from "./Exercises";

jest.mock("../../hooks/useExercises");

describe("Given Exercises component", () => {
  describe("When render the component", () => {
    test("Then should reload data", async () => {
      const reloadAllExercises = jest.fn();
      (useExercises as jest.Mock).mockReturnValue({
        reloadAllExercises,
        exercises: [],
      });

      renderWithProviders(
        <MemoryRouter>
          <Exercises />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(reloadAllExercises).toBeCalledTimes(1);
      });
    });
  });
});
