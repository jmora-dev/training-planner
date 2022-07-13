import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import { useLogin } from "../hooks/useLogin";

export default function PublicRoute() {
  const { authenticated } = useLogin();

  if (authenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
