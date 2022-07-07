import { iTraining } from "../../interfaces/iTraining";

interface iTrainingInfoProps {
  training: iTraining;
}

export default function TrainingInfo({ training }: iTrainingInfoProps) {
  return (
    <div>
      <h2>{training.name}</h2>
      <p>{training.team}</p>
      <p>{training.description}</p>
    </div>
  );
}
