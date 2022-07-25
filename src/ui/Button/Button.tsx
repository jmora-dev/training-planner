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
  SOLID_DANGER,
  OUTLINED,
}

export enum BUTTON_SIZE {
  BIG = "big",
  NORMAL = "normal",
  SMALL = "small",
}

interface ButtonProps {
  type?: BUTTON_TYPE;
  style?: BUTTON_STYLE;
  size?: BUTTON_SIZE;
  to?: string;
  text: string;
  icon?: string;
  onClick?: () => void;
}

export default function Button({
  type = BUTTON_TYPE.BUTTON,
  style = BUTTON_STYLE.SOLID_SECONDARY,
  size = BUTTON_SIZE.NORMAL,
  text,
  icon,
  to = "",
  onClick,
}: ButtonProps) {
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
      case BUTTON_STYLE.SOLID_DANGER:
        return button.solid__danger;
      case BUTTON_STYLE.TEXT:
        return button.text;
      case BUTTON_STYLE.SOLID_SECONDARY:
      default:
        return button.solid__secondary;
    }
  };

  const getClassName = () => {
    return [button.button, cssButtonSize(), cssButtonStyle()].join(" ");
  };

  const getIcon = () => {
    if (icon) {
      return <i className={icon + " " + button.icon} />;
    }
    return null;
  };

  switch (type) {
    case BUTTON_TYPE.LINK:
      return (
        <Link to={to} className={getClassName()}>
          {getIcon()}
          {text}
        </Link>
      );
    case BUTTON_TYPE.SUBMIT:
      return (
        <button type="submit" className={getClassName()}>
          {getIcon()}
          {text}
        </button>
      );
    case BUTTON_TYPE.BUTTON:
    default:
      return (
        <button onClick={onClick} className={getClassName()}>
          {getIcon()}
          {text}
        </button>
      );
  }
}
