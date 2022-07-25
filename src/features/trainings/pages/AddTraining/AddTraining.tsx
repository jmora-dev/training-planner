import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import TrainingForm from "../../components/TrainingForm/TrainingForm";
import { useTrainings } from "../../hooks/useTrainings";
import { Training } from "../../interfaces/Training";
import "./addTraining.css";

export default function AddTraining() {
  const navigate = useNavigate();
  const { insertTraining } = useTrainings();

  const onSave = (training: Training) => {
    insertTraining(training).then(() => {
      navigate(ROUTES.TRAININGS);
    });
  };

  return (
    <>
      <div className="add-training-section">
        <Card>
          <Card.Content>
            <Card.SectionTitle text="Nuevo entrenamiento" />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <TrainingForm onSave={onSave} />
            <Button
              type={BUTTON_TYPE.LINK}
              style={BUTTON_STYLE.TEXT}
              to={ROUTES.TRAININGS}
              text="Atrás"
              icon="fa-solid fa-angle-left"
            />
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
