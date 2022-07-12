import { Link } from "react-router-dom";
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
      <Link to={`/exercises/update/${exercise.id}`}>Modificar</Link>
      <button onClick={() => deleteExercise(exercise.id!)}>Delete</button>
    </div>
  );
}
