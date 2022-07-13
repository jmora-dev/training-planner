import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrainingsList from "../components/TrainingsList/TrainingsList";
import { useTrainings } from "../hooks/useTrainings";

export default function Trainings() {
  const { trainings, reloadAllTrainings } = useTrainings();

  useEffect(() => {
    reloadAllTrainings();
  }, [reloadAllTrainings]);

  return (
    <>
      <Link to="/exercises/add">Nuevo</Link>
      <TrainingsList trainings={trainings} />
    </>
  );
}
