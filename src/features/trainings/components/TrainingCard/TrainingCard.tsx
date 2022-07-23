import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { useTrainings } from "../../hooks/useTrainings";
import { Training } from "../../interfaces/Training";

interface TrainingCardProps {
  training: Training;
}

export default function TrainingCard({ training }: TrainingCardProps) {
  const { deleteTraining } = useTrainings();
  return (
    <div>
      <h2>{training.name}</h2>
      <Link to={`${ROUTES.TRAININGS_UPDATE}/${training.id}`}>Modificar</Link>
      <button onClick={() => deleteTraining(training!.id!)}>Delete</button>
    </div>
  );
}
