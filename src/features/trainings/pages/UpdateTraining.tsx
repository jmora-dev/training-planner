import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { useTrainings } from "../hooks/useTrainings";
import { ITraining } from "../interfaces/ITraining";

export default function UpdateTraining() {
  const { getTrainingById, updateTraining } = useTrainings();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<ITraining | null>(null);
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

  const onSave = (updateData: ITraining) => {
    if (training) {
      updateTraining(training.id!, updateData).then(() => {
        navigate("/");
      });
    }
  };

  if (loading) {
    return null;
  } else if (!training) {
    return null;
  } else {
    return (
      <>
        <TrainingForm initialData={training} onSave={onSave} />
        <Link to={ROUTES.TRAININGS}>Back</Link>
      </>
    );
  }
}
