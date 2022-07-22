import { iTraining } from "../../interfaces/iTraining";
import TrainingCard from "../TrainingCard/TrainingCard";

interface iTrainingsListProps {
  trainings: Array<iTraining>;
}

export default function TrainingsList({ trainings }: iTrainingsListProps) {
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
