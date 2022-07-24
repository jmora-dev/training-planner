import { ROUTES } from "../../config/routes";
import { Sidebar } from "../../ui";
import "./privateLayout.css";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  console.log(children);
  return (
    <div className="private-layout">
      <div className="private-layout__sidebar">
        <Sidebar>
          <Sidebar.Menu>
            <Sidebar.MenuDividersItem />
            <Sidebar.MenuLinkItem
              text="Entrenamientos"
              icon="fa-solid fa-clipboard"
              to={ROUTES.TRAININGS}
            />
            <Sidebar.MenuLinkItem
              text="Ejercicios"
              icon="fa-solid fa-dumbbell"
              to={ROUTES.EXERCISES}
            />
            <Sidebar.MenuDividersItem />
            <Sidebar.MenuLinkItem
              text="Salir"
              icon="fa-solid fa-power-off"
              to={ROUTES.LOGOUT}
            />
          </Sidebar.Menu>
        </Sidebar>
      </div>
      <main className="private-layout__main">{children}</main>
    </div>
  );
}
