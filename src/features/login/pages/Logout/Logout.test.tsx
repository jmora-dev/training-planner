import { renderWithProviders } from "../../../../redux/renderWithProviders";
import { useLogin } from "../../hooks/useLogin";
import Logout from "./Logout";

jest.mock("../../hooks/useLogin");

describe("Given Logout page component", () => {
  describe("When load component", () => {
    test("Then should call to signOut", () => {
      const signOut = jest.fn().mockResolvedValue({});
      (useLogin as jest.Mock).mockReturnValue({ signOut });
      renderWithProviders(<Logout />);
      expect(signOut).toBeCalled();
    });
  });
});
