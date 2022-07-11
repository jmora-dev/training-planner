import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { useApi } from "../hooks/useApi";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";

export default function AddTraining() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { insertTraining } = useApi();

  const onSave = (training: iTraining) => {
    insertTraining(training).then((res) => {
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
