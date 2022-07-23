import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Button, { BUTTON_TYPE } from "./Button";

describe("Given Button component", () => {
  describe("When is button type", () => {
    test("Then onClick props should be called", () => {
      const onClick = jest.fn();
      render(
        <Button type={BUTTON_TYPE.BUTTON} onClick={onClick}>
          Click
        </Button>
      );
      const button = screen.getByText("Click");
      fireEvent.click(button);
      expect(onClick).toBeCalledTimes(1);
    });
  });
  describe("When is submit type", () => {
    test("Then onSubmit form event should be called", () => {
      const onSubmit = jest.fn();
      render(
        <form onSubmit={onSubmit}>
          <Button type={BUTTON_TYPE.SUBMIT}>Click</Button>
        </form>
      );
      const button = screen.getByText("Click");
      fireEvent.click(button);
      expect(onSubmit).toBeCalledTimes(1);
    });
  });
  describe("When is link type", () => {
    test("Then should navigate to prop value", async () => {
      render(
        <MemoryRouter initialEntries={["Test page", "/claro"]}>
          <Button type={BUTTON_TYPE.LINK} to="/test">
            Click
          </Button>
          <Routes>
            <Route path="/test" element={<p>Target</p>} />
          </Routes>
        </MemoryRouter>
      );
      expect(screen.queryByText(/Target/i)).not.toBeInTheDocument();
      const button = screen.getByText("Click");
      fireEvent.click(button);
      await screen.findByText(/Target/i);
    });
  });
});
