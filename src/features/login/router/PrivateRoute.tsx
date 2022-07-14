import { Link, Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import { useLogin } from "../hooks/useLogin";

export default function PrivateRoute() {
  const { authenticated } = useLogin();

  if (!authenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.TRAININGS}>Trainings</Link>
          </li>
          <li>
            <Link to={ROUTES.EXERCISES}>Exercises</Link>
          </li>
          <li>
            <Link to={ROUTES.LOGOUT}>Logout</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
