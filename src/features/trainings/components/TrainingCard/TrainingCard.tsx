import { Link } from "react-router-dom";
import { useTrainings } from "../../hooks/useTrainings";
import { iTraining } from "../../interfaces/iTraining";

interface iTrainingCardProps {
  training: iTraining;
}

export default function TrainingCard({ training }: iTrainingCardProps) {
  const { deleteTraining } = useTrainings();
  return (
    <div>
      <h2>{training.name}</h2>
      <Link to={`/trainings/update/${training.id}`}>Modificar</Link>
      <button onClick={() => deleteTraining(training!.id!)}>Delete</button>
    </div>
  );
}
