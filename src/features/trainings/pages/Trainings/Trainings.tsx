import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import TrainingsList from "../../components/TrainingsList/TrainingsList";
import { useTrainings } from "../../hooks/useTrainings";

export default function Trainings() {
  const { trainings, reloadAllTrainings } = useTrainings();

  useEffect(() => {
    reloadAllTrainings();
  }, [reloadAllTrainings]);

  return (
    <>
      <h2>Entrenamientos</h2>
      <Link to={ROUTES.TRAININGS_ADD}>Nuevo</Link>
      <TrainingsList trainings={trainings} />
    </>
  );
}
