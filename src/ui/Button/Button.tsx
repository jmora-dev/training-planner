import { Link } from "react-router-dom";
import button from "./button.module.css";

export enum BUTTON_TYPE {
  BUTTON = "button",
  SUBMIT = "submit",
  LINK = "link",
}

export enum BUTTON_STYLE {
  TEXT,
  SOLID_PRIMARY,
  SOLID_SECONDARY,
  OUTLINED,
}

export enum BUTTON_SIZE {
  BIG = "big",
  NORMAL = "normal",
  SMALL = "small",
}

interface iButtonProps {
  type?: BUTTON_TYPE;
  style?: BUTTON_STYLE;
  size?: BUTTON_SIZE;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  type = BUTTON_TYPE.BUTTON,
  style = BUTTON_STYLE.SOLID_SECONDARY,
  size = BUTTON_SIZE.NORMAL,
  to = "",
  onClick,
  children,
}: iButtonProps) {
  const cssButtonSize = () => {
    switch (size) {
      case BUTTON_SIZE.BIG:
        return button.big;
      case BUTTON_SIZE.SMALL:
        return button.small;
      default:
        return button.normal;
    }
  };

  const cssButtonStyle = () => {
    switch (style) {
      case BUTTON_STYLE.SOLID_PRIMARY:
        return button.solid__primary;
      case BUTTON_STYLE.SOLID_SECONDARY:
      default:
        return button.solid__secondary;
    }
  };

  const getClassName = () => {
    return [button.button, cssButtonSize(), cssButtonStyle()].join(" ");
  };

  switch (type) {
    case BUTTON_TYPE.LINK:
      return (
        <Link to={to} className={getClassName()}>
          {children}
        </Link>
      );
    case BUTTON_TYPE.SUBMIT:
      return (
        <button type="submit" className={getClassName()}>
          {children}
        </button>
      );
    default:
    case BUTTON_TYPE.BUTTON:
      return (
        <button onClick={onClick} className={getClassName()}>
          {children}
        </button>
      );
  }
}
