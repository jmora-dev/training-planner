import { iExercise } from "../../interfaces/iExercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

interface iExercisesListProps {
  exercises: Array<iExercise>;
  onDelete: (id: number) => void;
}

export default function ExercisesList({
  exercises,
  onDelete,
}: iExercisesListProps) {
  return (
    <ul>
      {exercises.map((exercise) => (
        <ExerciseCard
          exercise={exercise}
          onDelete={() => onDelete(exercise.id)}
        />
      ))}
    </ul>
  );
}
