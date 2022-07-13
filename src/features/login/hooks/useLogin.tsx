import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { loginActionsCreators } from "../reducer/loginActionsCreators";
import { api } from "../services/firebaseApi";

export function useLogin() {
  const { authenticated } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const signIn = (user: string, password: string) => {
    api.login(user, password).then((res) => {
      dispatch(loginActionsCreators.login(res));
    });
  };

  const signOut = () => {
    dispatch(loginActionsCreators.logout);
  };

  return { authenticated, signIn, signOut };
}
