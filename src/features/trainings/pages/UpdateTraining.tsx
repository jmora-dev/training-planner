import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";
import { api } from "../services/firebaseApi";

export default function UpdateTraining() {
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<iTraining | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trainingId } = useParams();

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

  const onSave = (updateData: iTraining) => {
    api.updateTraining(training!.id!, updateData).then((res) => {
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
