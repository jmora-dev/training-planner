import { Route, Routes } from "react-router-dom";
import { PRIVATE_SECTION, ROUTES } from "./config/routes";
import AddExercise from "./features/exercises/pages/AddExercise";
import Exercises from "./features/exercises/pages/Exercises";
import UpdateExercise from "./features/exercises/pages/UpdateExercise";
import Login from "./features/login/pages/Login";
import Logout from "./features/login/pages/Logout";
import PrivateRoute from "./features/login/router/PrivateRoute";
import PublicRoute from "./features/login/router/PublicRoute";
import AddTraining from "./features/trainings/pages/AddTraining";
import TrainingDetail from "./features/trainings/pages/TrainingDetail";
import Trainings from "./features/trainings/pages/Trainings";
import UpdateTraining from "./features/trainings/pages/UpdateTraining";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Login />} />
        </Route>
        <Route path={PRIVATE_SECTION} element={<PrivateRoute />}>
          <Route path={ROUTES.TRAININGS} element={<Trainings />} />
          <Route
            path={ROUTES.TRAININGS_DETAIL + "/:trainingId"}
            element={<TrainingDetail />}
          />
          <Route path={ROUTES.TRAININGS_ADD} element={<AddTraining />} />
          <Route
            path={ROUTES.TRAININGS_UPDATE + "/:trainingId"}
            element={<UpdateTraining />}
          />
          <Route path={ROUTES.EXERCISES} element={<Exercises />} />
          {/* <Route
            path={ROUTES.EXERCISE_DETAIL + "/:exerciseId"}
            element={<ExerciseDetail />}
          /> */}
          <Route path={ROUTES.EXERCISE_ADD} element={<AddExercise />} />
          <Route
            path={ROUTES.EXERCISE_UPDATE + "/:exerciseId"}
            element={<UpdateExercise />}
          />
        </Route>
        <Route path={ROUTES.LOGOUT} element={<Logout />} />
      </Routes>
    </>
  );
}
