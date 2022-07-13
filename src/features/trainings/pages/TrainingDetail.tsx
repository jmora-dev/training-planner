import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrainingInfo from "../components/TrainingInfo/TrainingInfo";
import { useTrainings } from "../hooks/useTrainings";
import { iTraining } from "../interfaces/iTraining";

export default function TrainingDetail() {
  const { trainingId } = useParams();
  const { getTrainingById } = useTrainings();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<iTraining | null>(null);

  useEffect(() => {
    if (!trainingId) {
      setLoading(false);
    } else {
      getTrainingById(trainingId)
        .then((res) => setTraining(res))
        .finally(() => setLoading(false));
    }
  }, [trainingId, getTrainingById]);

  if (loading) {
    return null;
  } else if (!training) {
    return null;
  } else {
    return (
      <div>
        <TrainingInfo training={training} />
      </div>
    );
  }
}
