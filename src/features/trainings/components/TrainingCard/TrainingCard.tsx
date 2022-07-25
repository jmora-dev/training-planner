import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { Training } from "../../interfaces/Training";
import "./trainingCard.css";

interface TrainingCardProps {
  training: Training;
}

export default function TrainingCard({ training }: TrainingCardProps) {
  return (
    <Card>
      <Card.Content>
        <div className="training-card__content">
          <div>
            <h3>{training.name}</h3>
          </div>
          <div className="training-card__buttons-container ">
            <Button
              type={BUTTON_TYPE.LINK}
              style={BUTTON_STYLE.TEXT}
              to={`${ROUTES.TRAININGS_UPDATE}/${training.id}`}
              text="Modificar"
            />
            <Button
              type={BUTTON_TYPE.LINK}
              style={BUTTON_STYLE.TEXT}
              to={`${ROUTES.TRAININGS_DETAIL}/${training.id}`}
              text="Ver"
            />
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
