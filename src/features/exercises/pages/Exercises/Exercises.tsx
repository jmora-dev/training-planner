import { useEffect } from "react";
import { ROUTES } from "../../../../config/routes";
import { Card } from "../../../../ui";
import Button, {
  BUTTON_STYLE,
  BUTTON_TYPE,
} from "../../../../ui/Button/Button";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import { useExercises } from "../../hooks/useExercises";
import "./exercises.css";

export default function Exercises() {
  const { exercises, reloadAllExercises } = useExercises();

  useEffect(() => {
    reloadAllExercises();
  }, [reloadAllExercises]);

  return (
    <div className="exercises-section">
      <Card>
        <Card.Content>
          <div className="exercise-section__title-container">
            <Card.SectionTitle text="Ejercicios" />
            <Button
              type={BUTTON_TYPE.LINK}
              to={ROUTES.EXERCISES_ADD}
              style={BUTTON_STYLE.SOLID_PRIMARY}
              text="Nuevo"
              icon="fa-solid fa-plus"
            />
          </div>
        </Card.Content>
      </Card>

      <ExercisesList exercises={exercises} />
    </div>
  );
}
