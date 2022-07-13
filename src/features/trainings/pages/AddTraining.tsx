import { Link, useNavigate } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { useTrainings } from "../hooks/useTrainings";
import { iTraining } from "../interfaces/iTraining";

export default function AddTraining() {
  const navigate = useNavigate();
  const { insertTraining } = useTrainings();

  const onSave = (training: iTraining) => {
    insertTraining(training).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <TrainingForm onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
