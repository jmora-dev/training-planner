import LoginForm from "../../components/LoginForm/LoginForm";
import { useLogin } from "../../hooks/useLogin";
import { iLoginRequest } from "../../interfaces/iLoginRequest";
import "./login.css";

export default function Login() {
  const { signIn } = useLogin();

  const onSignIn = (data: iLoginRequest) => {
    signIn(data.email, data.password);
  };

  return (
    <div className="login">
      <div className="login__form-container">
        <LoginForm onSignIn={onSignIn} />
      </div>
    </div>
  );
}
