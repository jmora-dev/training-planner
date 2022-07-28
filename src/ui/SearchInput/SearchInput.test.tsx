import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("Given SearchInput component", () => {
  describe("When give props", () => {
    test("Then should fill the component with the props", () => {
      const onChange = jest.fn();
      render(<SearchInput value="initialValue" onChange={onChange} />);
      const input = screen.getByRole("textbox");
      expect((input as HTMLInputElement).value).toBe("initialValue");
      fireEvent.change(input, { target: { value: "search" } });
      expect(onChange).toBeCalledWith("search");
    });
  });
});
