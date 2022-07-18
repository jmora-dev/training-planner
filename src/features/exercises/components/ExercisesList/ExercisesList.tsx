import { iExercise } from "../../interfaces/iExercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

interface iExercisesListProps {
  exercises: Array<iExercise>;
}

export default function ExercisesList({ exercises }: iExercisesListProps) {
  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </li>
      ))}
    </ul>
  );
}
