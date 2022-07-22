import { iExercise } from "../../interfaces/iExercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./exercisesList.css";

interface iExercisesListProps {
  exercises: Array<iExercise>;
}

export default function ExercisesList({ exercises }: iExercisesListProps) {
  return (
    <ul className="exercise-list">
      {exercises.map((exercise) => (
        <li key={exercise.id} className="exercise-list__item">
          <article>
            <ExerciseCard exercise={exercise} />
          </article>
        </li>
      ))}
    </ul>
  );
}
