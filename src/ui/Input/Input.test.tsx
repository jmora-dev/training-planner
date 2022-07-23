import { fireEvent, render, screen } from "@testing-library/react";
import Input, { INPUT_TYPE } from "./Input";

describe("Given Input component", () => {
  describe("When give props", () => {
    test("Then should fill the component with the props", () => {
      const onChange = jest.fn();
      render(
        <Input
          name="inputName"
          value="initialValue"
          onChange={onChange}
          inputType={INPUT_TYPE.EMAIL}
        />
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("name", "inputName");
      expect(input).toHaveAttribute("type", "email");
      expect((input as HTMLInputElement).value).toBe("initialValue");
      fireEvent.change(input, { target: { value: "email" } });
      expect(onChange).toBeCalled();
    });
  });
});
