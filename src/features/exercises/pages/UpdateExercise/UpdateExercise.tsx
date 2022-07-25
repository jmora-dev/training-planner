import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import { useExercises } from "../../hooks/useExercises";
import { Exercise } from "../../interfaces/Exercise";
import "./updateExercise.css";

export default function UpdateExercise() {
  const { getExerciseById, updateExercise, deleteExercise } = useExercises();
  const [loading, setLoading] = useState<boolean>(true);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  useEffect(() => {
    if (!exerciseId) {
      setLoading(false);
    } else {
      getExerciseById(exerciseId)
        .then((res) => setExercise(res))
        .finally(() => setLoading(false));
    }
  }, [exerciseId, getExerciseById]);

  const onSave = (updateData: Exercise) => {
    if (exercise) {
      updateExercise(exercise.id!, updateData).then(() => {
        navigate(ROUTES.EXERCISES);
      });
    }
  };

  const onDelete = () => {
    if (exercise) {
      deleteExercise(exercise.id!).then(() => navigate(ROUTES.EXERCISES));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exercise) {
    return <div>Error</div>;
  }

  return (
    <div className="update-exercise-section">
      <Card>
        <Card.Content>
          <div className="update-exercise-section__title-container">
            <Card.SectionTitle text="Modificar ejercicio" />
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
          <ExerciseForm initialData={exercise} onSave={onSave} />
          <Button
            type={BUTTON_TYPE.LINK}
            style={BUTTON_STYLE.TEXT}
            to={ROUTES.EXERCISES}
            text="Atrás"
            icon="fa-solid fa-angle-left"
          />
        </Card.Content>
      </Card>
    </div>
  );
}
