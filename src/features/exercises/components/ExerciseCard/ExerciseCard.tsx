import { Link } from "react-router-dom";
import { iExercise } from "../../interfaces/iExercise";

interface iExerciseCardProps {
  exercise: iExercise;
  onDelete: () => void;
}

export default function ExerciseCard({
  exercise,
  onDelete,
}: iExerciseCardProps) {
  return (
    <div>
      <h2>{exercise.name}</h2>
      <Link to={`/exercises/update/${exercise.id}`}>Modificar</Link>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
