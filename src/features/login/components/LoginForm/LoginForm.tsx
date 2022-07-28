import { SyntheticEvent, useState } from "react";
import { Input, Label, Button } from "../../../../ui";
import {
  BUTTON_SIZE,
  BUTTON_STYLE,
  BUTTON_TYPE,
} from "../../../../ui/Button/Button";
import { INPUT_TYPE } from "../../../../ui/Input/Input";
import { LoginRequest } from "../../interfaces/LoginRequest";
import "./loginForm.css";

interface LoginFormProps {
  onSignIn: (data: LoginRequest) => void;
}

const INIT_DATA: LoginRequest = { email: "", password: "" };

export default function LoginForm({ onSignIn }: LoginFormProps) {
  const [data, setData] = useState(INIT_DATA);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSignIn(data);
  };

  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form__input-group">
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          inputType={INPUT_TYPE.EMAIL}
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="login-form__input-group">
        <Label htmlFor="password">Contraseña:</Label>
        <Input
          id="password"
          inputType={INPUT_TYPE.PASSWORD}
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div className="login-form__buttons-container">
        <Button
          type={BUTTON_TYPE.SUBMIT}
          size={BUTTON_SIZE.BIG}
          style={BUTTON_STYLE.SOLID_PRIMARY}
          text="Acceder"
        />
      </div>
    </form>
  );
}
