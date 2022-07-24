import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("Given Sidebar component", () => {
  describe("When", () => {
    test("Then", () => {
      render(
        <MemoryRouter>
          <Sidebar>
            <Sidebar.Menu>
              <Sidebar.MenuLinkItem text="link1" icon="" to="#" />
              <Sidebar.MenuLinkItem text="link2" icon="" to="#" />
              <Sidebar.MenuDividersItem />
            </Sidebar.Menu>
          </Sidebar>
        </MemoryRouter>
      );

      const links = screen.getAllByRole("link");
      expect(links.length).toBe(2);
      screen.getByText(/link1/i);
      screen.getByText(/link2/i);
      screen.getByRole("separator");
    });
  });
});
