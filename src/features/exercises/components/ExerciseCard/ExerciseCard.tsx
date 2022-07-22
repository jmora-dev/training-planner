import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { iExercise } from "../../interfaces/iExercise";

interface iExerciseCardProps {
  exercise: iExercise;
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  isEditable?: boolean;
}

export default function ExerciseCard({
  exercise,
  isSelectable = false,
  isSelected = false,
  onSelect = () => {},
  isEditable = false,
}: iExerciseCardProps) {
  const onClickCard = () => {
    if (isSelectable) {
      onSelect(exercise!.id!);
    }
  };

  const cardExtraClasses = () => {
    if (isSelectable && isSelected) {
      return " is-selected";
    }
  };

  return (
    <article
      onClick={() => onClickCard()}
      className={"exercise-card" + cardExtraClasses()}
    >
      {isSelectable && isSelected && (
        <div
          className="exercise-card__selected-container"
          aria-label="exercise selected"
        >
          <i className="fa-solid fa-circle-check"></i>
        </div>
      )}
      <div>
        <img src={exercise.image} alt={"Exercise plan"} />
      </div>
      <div>
        <h4>{exercise.name}</h4>
        <p>{exercise.description}</p>
      </div>
      {isEditable && (
        <div>
          <Link to={`${ROUTES.EXERCISES_UPDATE}/${exercise!.id!}`}>Editar</Link>
        </div>
      )}
      {false && (
        <div>
          <Link to={`${ROUTES.EXERCISES_DETAIL}/${exercise!.id!}`}>Ver</Link>
        </div>
      )}
    </article>
  );
}
