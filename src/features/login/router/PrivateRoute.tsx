import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import PrivateLayout from "../../privateLayout/PrivateLayout";
import { useLogin } from "../hooks/useLogin";

export default function PrivateRoute() {
  const { authenticated } = useLogin();

  if (!authenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
}
