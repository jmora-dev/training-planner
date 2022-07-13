import { SyntheticEvent, useState } from "react";
import { iLoginRequest } from "../../interfaces/iLoginRequest";

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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">Acceder</button>
    </form>
  );
}
