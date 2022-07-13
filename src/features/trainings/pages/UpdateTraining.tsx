import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { useTrainings } from "../hooks/useTrainings";
import { iTraining } from "../interfaces/iTraining";

export default function UpdateTraining() {
  const { getTrainingById, updateTraining } = useTrainings();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<iTraining | null>(null);
  const navigate = useNavigate();
  const { trainingId } = useParams();

  useEffect(() => {
    if (!trainingId) {
      setLoading(false);
    } else {
      getTrainingById(trainingId)
        .then((res) => setTraining(res))
        .finally(() => setLoading(false));
    }
  }, [trainingId, getTrainingById]);

  const onSave = (updateData: iTraining) => {
    updateTraining(training!.id!, updateData).then(() => {
      navigate("/");
    });
  };

  if (loading) {
    return null;
  } else if (!training) {
    return null;
  } else {
    return (
      <>
        <TrainingForm initialData={training} onSave={onSave} />
        <Link to="/">Back</Link>
      </>
    );
  }
}
