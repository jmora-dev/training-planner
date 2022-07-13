import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { useExercises } from "../../hooks/useExercises";
import { iExercise } from "../../interfaces/iExercise";

interface iExerciseCardProps {
  exercise: iExercise;
}

export default function ExerciseCard({ exercise }: iExerciseCardProps) {
  const { deleteExercise } = useExercises();
  return (
    <div>
      <h2>{exercise.name}</h2>
      <Link to={`${ROUTES.EXERCISES_UPDATE}/${exercise.id}`}>Modificar</Link>
      <button onClick={() => deleteExercise(exercise.id!)}>Delete</button>
    </div>
  );
}
