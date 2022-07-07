import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrainingInfo from "../components/TrainingInfo/TrainingInfo";
import { iTraining } from "../interfaces/iTraining";

export default function TrainingDetail() {
  const { trainingId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTrainig] = useState<iTraining | null>(null);

  useEffect(() => {
    // setTrainig()
  }, [trainingId]);

  if (loading) {
  } else if (!training) {
  } else {
    return (
      <div>
        <TrainingInfo training={training} />
      </div>
    );
  }
}
