import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Card } from "../../../../ui";
import { iExercise } from "../../interfaces/iExercise";

interface iExerciseCardProps {
  exercise: iExercise;
}

export default function ExerciseCard({ exercise }: iExerciseCardProps) {
  return (
    <Card>
      <Card.Image alt={exercise.name} src={exercise.image} />
      <Card.Content>
        <Card.Title text={exercise.name} />
        <Card.Description text={exercise.description} />
      </Card.Content>
      <Card.Content>
        <Link to={`${ROUTES.EXERCISES_UPDATE}/${exercise.id}`}>Editar</Link>
      </Card.Content>
    </Card>

    // <article
    //   onClick={() => onClickCard()}
    //   className={"exercise-card" + cardExtraClasses()}
    // >
    //   {isSelectable && isSelected && (
    //     <div
    //       className="exercise-card__selected-container"
    //       aria-label="exercise selected"
    //     >
    //       <i className="fa-solid fa-circle-check"></i>
    //     </div>
    //   )}
    //   <div>
    //     <img src={exercise.image} alt={"Exercise plan"} />
    //   </div>
    //   <div>
    //     <h4>{exercise.name}</h4>
    //     <p>{exercise.description}</p>
    //   </div>
    //   {isEditable && (
    //     <div>
    //       <Link to={`${ROUTES.EXERCISES_UPDATE}/${exercise!.id!}`}>Editar</Link>
    //     </div>
    //   )}
    //   {false && (
    //     <div>
    //       <Link to={`${ROUTES.EXERCISES_DETAIL}/${exercise!.id!}`}>Ver</Link>
    //     </div>
    //   )}
    // </article>
  );
}
