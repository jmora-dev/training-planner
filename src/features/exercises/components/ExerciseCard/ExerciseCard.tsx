import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { Exercise } from "../../interfaces/Exercise";
import "./exerciseCard.css";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card>
      <Card.Image alt={exercise.name} src={exercise.image} />
      <div className="exercise-card__content">
        <Card.Content>
          <Card.ArticleTitle text={exercise.name} />
          <Card.Description text={exercise.description} />
        </Card.Content>
        <Card.Content>
          <div className="exercise-card__buttons-container">
            <Button
              type={BUTTON_TYPE.LINK}
              style={BUTTON_STYLE.TEXT}
              to={`${ROUTES.EXERCISES_DETAIL}/${exercise.id}`}
              text="Ver"
            />
            <Button
              type={BUTTON_TYPE.LINK}
              style={BUTTON_STYLE.TEXT}
              to={`${ROUTES.EXERCISES_UPDATE}/${exercise.id}`}
              text="Editar"
            />
          </div>
        </Card.Content>
      </div>
    </Card>
  );
}
