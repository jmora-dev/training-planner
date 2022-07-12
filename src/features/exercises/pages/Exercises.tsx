import { useEffect } from "react";
import { Link } from "react-router-dom";
import ExercisesList from "../components/ExercisesList/ExercisesList";
import { useExercises } from "../hooks/useExercises";

export default function Exercises() {
  const { exercises, reloadAllExercises } = useExercises();

  useEffect(() => {
    reloadAllExercises();
  }, [reloadAllExercises]);

  return (
    <>
      <Link to="/exercises/add">Nuevo</Link>
      <ExercisesList exercises={exercises} />
    </>
  );
}
