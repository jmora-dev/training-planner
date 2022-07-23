import { ITraining } from "../../interfaces/ITraining";

interface TrainingInfoProps {
  training: ITraining;
}

export default function TrainingInfo({ training }: TrainingInfoProps) {
  return (
    <div>
      <h2>{training.name}</h2>
      <p>{training.team}</p>
      <p>{training.description}</p>
    </div>
  );
}
