import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { loginActionsCreators } from "../reducer/loginActionsCreators";
import { api } from "../services/firebaseApi";

export default function Login() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.login);
  const navigate = useNavigate();

  const signIn = () => {
    api.login("dam2mora@gmail.com", "123456").then((res) => {
      dispatch(loginActionsCreators.login(res));
    });
  };

  const test = () => {
    fetch(process.env.REACT_APP_API_URL + `/exercises.json?auth=${token}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <button onClick={signIn}>signIn</button>
      <button onClick={test}></button>
    </>
  );
}
