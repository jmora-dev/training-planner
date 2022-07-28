import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { useLogin } from "../../hooks/useLogin";
import Login from "./Login";

jest.mock("../../hooks/useLogin");

describe("Given Login page component", () => {
  describe("When make login", () => {
    test("Then should call signIn", async () => {
      const signIn = jest.fn().mockResolvedValue({});
      (useLogin as jest.Mock).mockReturnValue({ signIn });

      renderWithProviders(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      const submit = screen.getByText(/Acceder/i);
      fireEvent.click(submit);
      expect(signIn).toBeCalledTimes(1);
    });
  });
});
