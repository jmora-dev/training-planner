import { SyntheticEvent, useState } from "react";
import { Input, Label, Button } from "../../../../ui";
import {
  BUTTON_SIZE,
  BUTTON_STYLE,
  BUTTON_TYPE,
} from "../../../../ui/Button/Button";
import { INPUT_TYPE } from "../../../../ui/Input/Input";
import { iLoginRequest } from "../../interfaces/iLoginRequest";
import "./loginForm.css";

interface LoginFormProps {
  onSignIn: (data: iLoginRequest) => void;
}

const INIT_DATA: iLoginRequest = { email: "", password: "" };

export default function LoginForm({ onSignIn }: LoginFormProps) {
  const [data, setData] = useState(INIT_DATA);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSignIn(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form__input-group">
        <Label htmlFor="email">Email:</Label>
        <Input
          inputType={INPUT_TYPE.EMAIL}
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="login-form__input-group">
        <Label htmlFor="password">Contraseña:</Label>
        <Input
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
        >
          Acceder
        </Button>
      </div>
    </form>
  );
}
