import React from "react";
import { Link } from "react-router-dom";
import sidebar from "./sidebar.module.css";

function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className={sidebar.sidebar}>{children}</div>;
}

function Menu({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <ul className={sidebar["menu-list"]}>{children}</ul>
    </nav>
  );
}
Sidebar.Menu = Menu;

function MenuLinkItem({
  text,
  icon,
  to,
}: {
  text: string;
  icon: string;
  to: string;
}) {
  return (
    <li>
      <Link to={to} className={sidebar["menu-item"]}>
        {icon && <i className={icon + " " + sidebar["menu-item-icon"]} />}
        <span className={sidebar["menu-item-text"]}>{text}</span>
      </Link>
    </li>
  );
}
Sidebar.MenuLinkItem = MenuLinkItem;

function MenuDividersItem() {
  return (
    <li>
      <hr className={sidebar["menu-divider"]} />
    </li>
  );
}
Sidebar.MenuDividersItem = MenuDividersItem;

export default Sidebar;
