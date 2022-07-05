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
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
