import { iExercise } from "../../interfaces/iExercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

interface iExercisesListProps {
  exercises: Array<iExercise>;
  onDelete: (id: string) => void;
}

export default function ExercisesList({
  exercises,
  onDelete,
}: iExercisesListProps) {
  return (
    <ul>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          onDelete={() => onDelete(exercise.id)}
        />
      ))}
    </ul>
  );
}
