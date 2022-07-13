import { iExercise } from "../../interfaces/iExercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

interface iExercisesListProps {
  exercises: Array<iExercise>;
}

export default function ExercisesList({ exercises }: iExercisesListProps) {
  return (
    <ul>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </ul>
  );
}
