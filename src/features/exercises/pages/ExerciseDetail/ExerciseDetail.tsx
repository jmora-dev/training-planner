import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { useExercises } from "../../hooks/useExercises";
import { Exercise } from "../../interfaces/Exercise";
import "./exerciseDetail.css";

export default function ExerciseDetail() {
  const { exerciseId } = useParams();
  const { getExerciseById } = useExercises();
  const [loading, setLoading] = useState<boolean>(true);
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    if (!exerciseId) {
      setLoading(false);
    } else {
      getExerciseById(exerciseId)
        .then((res) => setExercise(res))
        .finally(() => setLoading(false));
    }
  }, [getExerciseById, exerciseId]);

  if (loading) {
    return <p>Loading</p>;
  } else if (!exercise) {
    return <p>Error</p>;
  } else {
    return (
      <Card>
        <Card.Content>
          <div className="exercise-detail__exercise-data">
            <h2>{exercise.name}</h2>
            <div className="exercise-detail__text-block">
              <p className="exercise-detail__label">Descripción:</p>
              <p className="exercise-detail__text">{exercise.description}</p>
            </div>
            {exercise.primaryTarget && (
              <div className="exercise-detail__text-block">
                <p className="exercise-detail__label">Objetivo principal:</p>
                <p className="exercise-detail__text">
                  {exercise.primaryTarget}
                </p>
              </div>
            )}
            {exercise.secondaryTarget && (
              <div className="exercise-detail__text-block">
                <p className="exercise-detail__label">Objetivo secundario:</p>
                <p className="exercise-detail__text">
                  {exercise.secondaryTarget}
                </p>
              </div>
            )}
            {exercise.sources && (
              <div className="exercise-detail__text-block">
                <p className="exercise-detail__label">Fuentes:</p>
                <p className="exercise-detail__text">{exercise.sources}</p>
              </div>
            )}
            {exercise.image && (
              <div className="exercise-detail__image-container">
                <img src={exercise.image} alt={exercise.name} />
              </div>
            )}
          </div>
          <Button
            type={BUTTON_TYPE.LINK}
            style={BUTTON_STYLE.TEXT}
            to={ROUTES.EXERCISES}
            text="Atrás"
            icon="fa-solid fa-angle-left"
          />
        </Card.Content>
      </Card>
    );
  }
}
