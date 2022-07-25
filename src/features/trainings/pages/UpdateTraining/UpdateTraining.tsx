import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import TrainingForm from "../../components/TrainingForm/TrainingForm";
import { useTrainings } from "../../hooks/useTrainings";
import { Training } from "../../interfaces/Training";
import "./updateTraining.css";

export default function UpdateTraining() {
  const { getTrainingById, updateTraining, deleteTraining } = useTrainings();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<Training | null>(null);
  const navigate = useNavigate();
  const { trainingId } = useParams();

  useEffect(() => {
    if (!trainingId) {
      setLoading(false);
    } else {
      getTrainingById(trainingId)
        .then((res) => setTraining(res))
        .finally(() => setLoading(false));
    }
  }, [trainingId, getTrainingById]);

  const onSave = (updateData: Training) => {
    if (training) {
      updateTraining(training.id!, updateData).then(() => {
        navigate("/");
      });
    }
  };

  const onDelete = () => {
    if (training) {
      deleteTraining(training.id!).then(() => navigate(ROUTES.TRAININGS));
    }
  };

  if (loading) {
    return null;
  } else if (!training) {
    return null;
  } else {
    return (
      <div className="update-training-section">
        <Card>
          <Card.Content>
            <div className="update-exercise-section__title-container">
              <Card.SectionTitle text="Modificar entrenamiento" />
              <Button
                type={BUTTON_TYPE.BUTTON}
                style={BUTTON_STYLE.SOLID_DANGER}
                text="Borrar"
                icon="fa-solid fa-trash"
                onClick={onDelete}
              />
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <TrainingForm initialData={training} onSave={onSave} />
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
    );
  }
}
