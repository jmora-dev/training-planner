import { Exercise } from "../../interfaces/Exercise";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./exercisesList.css";

interface ExercisesListProps {
  exercises: Array<Exercise>;
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
