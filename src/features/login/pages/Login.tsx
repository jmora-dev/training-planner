// import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { useLogin } from "../hooks/useLogin";
import { iLoginRequest } from "../interfaces/iLoginRequest";

export default function Login() {
  const { signIn } = useLogin();
  // const navigate = useNavigate();

  const onSignIn = (data: iLoginRequest) => {
    signIn(data.email, data.password);
  };

  return (
    <>
      <LoginForm onSignIn={onSignIn} />
    </>
  );
}
