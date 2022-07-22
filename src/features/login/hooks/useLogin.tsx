import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { loginActionsCreators } from "../reducer/loginActionsCreators";
import { api } from "../services/firebaseApi";

export function useLogin() {
  const { authenticated } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const signIn = useCallback(
    (user: string, password: string) => {
      api.login(user, password).then((res) => {
        dispatch(loginActionsCreators.login(res));
      });
    },
    [dispatch]
  );

  const signOut = useCallback(() => {
    dispatch(loginActionsCreators.logout());
  }, [dispatch]);

  return useMemo(
    () => ({ authenticated, signIn, signOut }),
    [authenticated, signIn, signOut]
  );
}
