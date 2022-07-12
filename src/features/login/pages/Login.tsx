// import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { signIn } = useLogin();
  // const navigate = useNavigate();

  const onSignIn = () => {
    signIn("dam2mora@gmail.com", "123456");
  };

  return (
    <>
      <button onClick={onSignIn}>signIn</button>
    </>
  );
}
