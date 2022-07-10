import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";
import { api } from "../services/firebaseApi";

export default function AddTraining() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (training: iTraining) => {
    api.insertTraining(training).then((res) => {
      dispatch(
        trainingsActionsCreators.add({
          ...training,
          id: res,
        })
      );
      navigate("/");
    });
  };
  return (
    <>
      <TrainingForm onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
