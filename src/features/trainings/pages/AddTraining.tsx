import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { useTrainings } from "../hooks/useTrainings";
import { Training } from "../interfaces/Training";

export default function AddTraining() {
  const navigate = useNavigate();
  const { insertTraining } = useTrainings();

  const onSave = (training: Training) => {
    insertTraining(training).then(() => {
      navigate(ROUTES.TRAININGS);
    });
  };

  return (
    <>
      <TrainingForm onSave={onSave} />
      <Link to={ROUTES.TRAININGS}>Back</Link>
    </>
  );
}
