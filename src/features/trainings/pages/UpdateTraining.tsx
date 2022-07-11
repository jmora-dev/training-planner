import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { useApi } from "../hooks/useApi";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";

export default function UpdateTraining() {
  const { getTrainingById, updateTraining } = useApi();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<iTraining | null>(null);
  const dispatch = useDispatch();
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
    updateTraining(training!.id!, updateData).then((res) => {
      dispatch(trainingsActionsCreators.update(res));
      navigate("/");
    });
  };

  if (loading) {
  } else if (!training) {
  } else {
    return (
      <>
        <TrainingForm initialData={training} onSave={onSave} />
        <Link to="/">Back</Link>
      </>
    );
  }
}
