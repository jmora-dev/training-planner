import { Training } from "../../interfaces/Training";
import TrainingCard from "../TrainingCard/TrainingCard";
import "./trainingList.css";

interface TrainingsListProps {
  trainings: Array<Training>;
}

export default function TrainingsList({ trainings }: TrainingsListProps) {
  return (
    <ul className="training-list">
      {trainings.map((training) => (
        <li key={training.id} className="training-list__item">
          <TrainingCard training={training} />
        </li>
      ))}
    </ul>
  );
}
