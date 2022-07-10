import { iTraining } from "../../interfaces/iTraining";
import TrainingCard from "../TrainingCard/TrainingCard";

interface iTrainingsListProps {
  trainings: Array<iTraining>;
  onDelete: (id: string) => void;
}

export default function TrainingsList({
  trainings,
  onDelete,
}: iTrainingsListProps) {
  return (
    <ul>
      {trainings.map((training) => (
        <TrainingCard
          training={training}
          onDelete={() => onDelete(training.id!)}
        />
      ))}
    </ul>
  );
}
