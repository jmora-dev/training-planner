import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrainingInfo from "../components/TrainingInfo/TrainingInfo";
import { useApi } from "../hooks/useApi";
import { iTraining } from "../interfaces/iTraining";

export default function TrainingDetail() {
  const { trainingId } = useParams();
  const { getTrainingById } = useApi();
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
  } else if (!training) {
  } else {
    return (
      <div>
        <TrainingInfo training={training} />
      </div>
    );
  }
}
