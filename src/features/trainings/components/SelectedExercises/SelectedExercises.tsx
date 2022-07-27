import { Exercise } from "../../../exercises/interfaces/Exercise";
import DefaultExerciseCard from "../../../shared/DefaultExerciseCard/DefaultExerciseCard";
import "./selectedExercises.css";

interface SelectedExercisesProps {
  exercises: Exercise[];
}

export default function SelectedExercises({
  exercises,
}: SelectedExercisesProps) {
  return (
    <ul className="selected-exercises-list">
      {exercises.map((exercise) => (
        <li key={exercise.id} className="exercise-list__item">
          <article className="exercise-list__article">
            <DefaultExerciseCard exercise={exercise} />
          </article>
        </li>
      ))}
    </ul>
  );
}
