import { Card } from "../../../../../../ui";
import { iExercise } from "../../../../interfaces/iExercise";
import "./exerciseSelectorCard.css";

interface iExerciseSelectorCardProps {
  exercise: iExercise;
  isSelected: boolean;
  selectExercise: (id: string) => void;
}

export default function ExerciseSelectorCard({
  exercise,
  isSelected,
  selectExercise,
}: iExerciseSelectorCardProps) {
  return (
    <article
      onClick={() => selectExercise(exercise.id!)}
      className={
        "exercise-selector__article" + (isSelected ? " is-selected" : "")
      }
    >
      {isSelected && (
        <div className="exercise-selector__select-container">
          <i className="fa-solid fa-circle-check"></i>
        </div>
      )}
      <Card>
        <Card.Image alt={exercise.name} src={exercise.image} />
        <Card.Content>
          <Card.Title text={exercise.name} />
          <Card.Description text={exercise.description} />
        </Card.Content>
      </Card>
    </article>
  );
}
