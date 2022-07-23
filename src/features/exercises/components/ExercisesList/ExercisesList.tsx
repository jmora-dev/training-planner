import { IExercise } from "../../interfaces/IExercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./exercisesList.css";

interface ExercisesListProps {
  exercises: Array<IExercise>;
}

export default function ExercisesList({ exercises }: ExercisesListProps) {
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
