import { Link } from "react-router-dom";
import { iTraining } from "../../interfaces/iTraining";

interface iTrainingCardProps {
  training: iTraining;
  onDelete: () => void;
}

export default function TrainingCard({
  training,
  onDelete,
}: iTrainingCardProps) {
  return (
    <div>
      <h2>{training.name}</h2>
      <Link to={`/trainings/update/${training.id}`}>Modificar</Link>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
