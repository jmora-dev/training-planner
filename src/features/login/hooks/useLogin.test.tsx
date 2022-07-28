import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../redux/renderWithProviders";
import { api } from "../services/loginFirebaseApi";
import { useLogin } from "./useLogin";

jest.mock("../services/loginFirebaseApi");

describe("Given useLogin custom hook", () => {
  let TestComponent: Function;
  beforeEach(() => {
    TestComponent = () => {
      const { authenticated, signIn, signOut } = useLogin();

      return (
        <MemoryRouter>
          <>
            <p>Login {authenticated.toString()}</p>
            <button onClick={() => signIn("user", "password")}>SignIn</button>
            <button onClick={() => signOut()}>SignOut</button>
          </>
        </MemoryRouter>
      );
    };
  });
  describe("When login user and logout", () => {
    test("Then should update authenticated value", async () => {
      (api.login as jest.Mock).mockResolvedValue("tokenRandom");
      renderWithProviders(<TestComponent />);
      const signIn = screen.getByText(/SignIn/i);
      const signOut = screen.getByText(/SignOut/i);
      screen.getByText(/Login false/i);
      fireEvent.click(signIn);
      await screen.findByText(/Login true/i);
      fireEvent.click(signOut);
      await screen.findByText(/Login false/i);
    });
  });
});
