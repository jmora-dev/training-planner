import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrainingInfo from "../components/TrainingInfo/TrainingInfo";
import { iTraining } from "../interfaces/iTraining";
import { api } from "../services/firebaseApi";

export default function TrainingDetail() {
  const { trainingId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<iTraining | null>(null);

  useEffect(() => {
    if (!trainingId) {
      setLoading(false);
    } else {
      api
        .getTrainingById(trainingId)
        .then((res) => setTraining(res))
        .finally(() => setLoading(false));
    }
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
