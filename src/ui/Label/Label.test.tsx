import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Given Label component", () => {
  describe("When have children content", () => {
    test("Then render should have the children content", () => {
      render(
        <Label htmlFor="">
          <p>Children</p>
        </Label>
      );
      screen.getByText(/Children/i);
    });
  });
  describe("When have htmlFor", () => {
    test("Then render should have 'for' attribute", () => {
      render(<Label htmlFor="test">Label</Label>);
      const label = screen.getByText(/Label/i);
      expect(label).toHaveAttribute("for", "test");
    });
  });
});
