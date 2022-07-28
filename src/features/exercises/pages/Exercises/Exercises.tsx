import { useEffect, useState } from "react";
import { ROUTES } from "../../../../config/routes";
import { Card, SearchInput } from "../../../../ui";
import Button, {
  BUTTON_STYLE,
  BUTTON_TYPE,
} from "../../../../ui/Button/Button";
import { normalizeStringForCompare } from "../../../../utils/normalizeString";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import { useExercises } from "../../hooks/useExercises";
import "./exercises.css";

export default function Exercises() {
  const { exercises, reloadAllExercises } = useExercises();
  const [search, setSearch] = useState("");

  useEffect(() => {
    reloadAllExercises();
  }, [reloadAllExercises]);

  const exercisesFiltered = () => {
    if (search) {
      const normalizedSearch = normalizeStringForCompare(search);
      return exercises.filter((exercise) =>
        normalizeStringForCompare(exercise.name).includes(normalizedSearch)
      );
    }
    return exercises;
  };

  return (
    <div className="exercises-section">
      <Card>
        <Card.Content>
          <div className="exercise-section__title-container">
            <Card.SectionTitle text="Ejercicios" />
            <div className="exercise-section__buttons-title-container">
              <SearchInput
                value={search}
                onChange={(value: string) => setSearch(value)}
              />
              <Button
                type={BUTTON_TYPE.LINK}
                to={ROUTES.EXERCISES_ADD}
                style={BUTTON_STYLE.SOLID_PRIMARY}
                text="Nuevo"
                icon="fa-solid fa-plus"
              />
            </div>
          </div>
        </Card.Content>
      </Card>

      <ExercisesList exercises={exercisesFiltered()} />
    </div>
  );
}
