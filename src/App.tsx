import { Route, Routes } from "react-router-dom";
import AddExercise from "./features/exercises/pages/AddExercise";
import Exercises from "./features/exercises/pages/Exercises";
import UpdateExercise from "./features/exercises/pages/UpdateExercise";
import Login from "./features/login/pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Exercises />} />
        <Route path="/exercises/add" element={<AddExercise />} />
        <Route
          path="/exercises/update/:exerciseId"
          element={<UpdateExercise />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
