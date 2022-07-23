import { ITraining } from "../../interfaces/ITraining";
import TrainingCard from "../TrainingCard/TrainingCard";

interface TrainingsListProps {
  trainings: Array<ITraining>;
}

export default function TrainingsList({ trainings }: TrainingsListProps) {
  return (
    <ul>
      {trainings.map((training) => (
        <li key={training.id}>
          <TrainingCard training={training} />
        </li>
      ))}
    </ul>
  );
}
