import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../redux/renderWithProviders";
import PrivateLayout from "./PrivateLayout";

describe("Given PrivateLayout component", () => {
  describe("When have children data", () => {
    test("Then should render children and links", () => {
      renderWithProviders(
        <MemoryRouter>
          <PrivateLayout>
            <p>Main component</p>
          </PrivateLayout>
        </MemoryRouter>
      );
      screen.getByText(/Main component/i);
      screen.getByText(/Entrenamientos/i);
      screen.getByText(/Ejercicios/i);
      screen.getByText(/Salir/i);
    });
  });
});
