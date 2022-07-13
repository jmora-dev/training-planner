import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import ExerciseForm from "../components/ExerciseForm/ExerciseForm";
import { useExercises } from "../hooks/useExercises";
import { iExercise } from "../interfaces/iExercise";

export default function AddExercise() {
  const { insertExercise } = useExercises();
  const navigate = useNavigate();

  const onSave = (exercise: iExercise) => {
    insertExercise(exercise).then(() => {
      navigate(ROUTES.EXERCISES);
    });
  };

  return (
    <>
      <ExerciseForm onSave={onSave} />
      <Link to={ROUTES.EXERCISES}>Back</Link>
    </>
  );
}
