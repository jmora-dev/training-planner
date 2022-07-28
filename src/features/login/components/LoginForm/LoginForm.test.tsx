import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given LoginForm component", () => {
  describe("When fill inputs and make submit", () => {
    test("Then should be return the form data", () => {
      const onSignIn = jest.fn();
      render(<LoginForm onSignIn={onSignIn} />);
      const email = screen.getByLabelText(/Email:/i);
      const password = screen.getByLabelText(/Contraseña:/i);
      const submit = screen.getByText(/Acceder/i);
      fireEvent.change(email, { target: { value: "a@a.com" } });
      fireEvent.change(password, { target: { value: "123456" } });
      fireEvent.click(submit);
      expect(onSignIn).toBeCalledWith({ email: "a@a.com", password: "123456" });
    });
  });
});
