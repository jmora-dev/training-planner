import { useEffect } from "react";
import { ROUTES } from "../../../../config/routes";
import { Button, Card } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import TrainingsList from "../../components/TrainingsList/TrainingsList";
import { useTrainings } from "../../hooks/useTrainings";
import "./trainings.css";

export default function Trainings() {
  const { trainings, reloadAllTrainings } = useTrainings();

  useEffect(() => {
    reloadAllTrainings();
  }, [reloadAllTrainings]);

  return (
    <div className="trainings-section">
      <Card>
        <Card.Content>
          <div className="trainings-section__title-container">
            <Card.SectionTitle text="Entrenamientos" />
            <Button
              type={BUTTON_TYPE.LINK}
              to={ROUTES.TRAININGS_ADD}
              style={BUTTON_STYLE.SOLID_PRIMARY}
              text="Nuevo"
              icon="fa-solid fa-plus"
            />
          </div>
        </Card.Content>
      </Card>

      <TrainingsList trainings={trainings} />
    </div>
  );
}
