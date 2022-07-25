import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import { useExercises } from "../../hooks/useExercises";
import { Exercise } from "../../interfaces/Exercise";
import "./addExercise.css";

export default function AddExercise() {
  const { insertExercise } = useExercises();
  const navigate = useNavigate();

  const onSave = (exercise: Exercise) => {
    insertExercise(exercise).then(() => {
      navigate(ROUTES.EXERCISES);
    });
  };

  return (
    <div className="add-exercise-section">
      <Card>
        <Card.Content>
          <Card.SectionTitle text="Nuevo ejercicio" />
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <ExerciseForm onSave={onSave} />
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
