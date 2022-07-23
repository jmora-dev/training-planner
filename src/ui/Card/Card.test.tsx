import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given Card component", () => {
  describe("When use its component and sub-components", () => {
    test("Then should render all given data", () => {
      render(
        <Card>
          <Card.Image src="img/img.png" alt="not found" />
          <Card.Content>
            <Card.Title text="Title" />
            <Card.Description text="Description" />
            <Card.Tags tags={["tag1", "tag2"]} />
          </Card.Content>
        </Card>
      );
      screen.getByText(/Title/i);
      screen.getByText(/Description/i);
      screen.getByText(/tag1/i);
      screen.getByText(/tag2/i);
      const image = screen.getByAltText(/not found/i);
      expect(image).toHaveAttribute("src", "img/img.png");
    });
  });
});
