import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import ExercisesList from "../components/ExercisesList/ExercisesList";
import { useExercises } from "../hooks/useExercises";

export default function Exercises() {
  const { exercises, reloadAllExercises } = useExercises();

  useEffect(() => {
    reloadAllExercises();
  }, [reloadAllExercises]);

  return (
    <>
      <Link to={ROUTES.EXERCISES_ADD}>Nuevo</Link>
      <ExercisesList exercises={exercises} />
    </>
  );
}
