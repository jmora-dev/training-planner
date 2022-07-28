import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { useExercises } from "../../../exercises/hooks/useExercises";
import { useTrainings } from "../../hooks/useTrainings";
import { Training } from "../../interfaces/Training";
import SelectedExercises from "../../components/SelectedExercises/SelectedExercises";
import "./trainingDetail.css";

export default function TrainingDetail() {
  const { trainingId } = useParams();
  const { exercises, reloadAllExercises } = useExercises();
  const { getTrainingById } = useTrainings();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<Training | null>(null);

  useEffect(() => {
    if (!trainingId) {
      setLoading(false);
    } else {
      Promise.all([reloadAllExercises(), getTrainingById(trainingId)])
        .then((res) => setTraining(res[1]))
        .finally(() => setLoading(false));
    }
  }, [trainingId, getTrainingById, reloadAllExercises]);

  const getSelectedExercises = () => {
    if (training) {
      return exercises.filter((exercise) =>
        training.exercises.includes(exercise.id!)
      );
    }
    return [];
  };

  if (loading) {
    return null;
  } else if (!training) {
    return null;
  } else {
    return (
      <Card>
        <Card.Content>
          <div className="training-detail__exercise-data">
            <h2>{training.name}</h2>
            <div className="training-detail__text-block">
              <p className="training-detail__label">Descripción:</p>
              <p className="training-detail__text">{training.description}</p>
            </div>
            {training.team && (
              <div className="training-detail__text-block">
                <p className="training-detail__label">Equipo:</p>
                <p className="training-detail__text">{training.team}</p>
              </div>
            )}
            {training.target && (
              <div className="training-detail__text-block">
                <p className="training-detail__label">Objetivo:</p>
                <p className="training-detail__text">{training.target}</p>
              </div>
            )}
            <div>
              <p className="training-detail__label">Ejercicios:</p>
              <SelectedExercises exercises={getSelectedExercises()} />
            </div>
          </div>
          <Button
            type={BUTTON_TYPE.LINK}
            style={BUTTON_STYLE.TEXT}
            to={ROUTES.TRAININGS}
            text="Atrás"
            icon="fa-solid fa-angle-left"
          />
        </Card.Content>
      </Card>
    );
  }
}
