import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TrainingForm from "../components/TrainingForm/TrainingForm";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";

export default function AddTraining() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (exercise: Partial<iTraining>) => {
    const newTraining = {
      ...exercise,
      id: Math.floor(Math.random() * 100000),
      creationDate: new Date(),
    } as iTraining;
    dispatch(trainingsActionsCreators.add(newTraining));
    navigate("/");
  };
  return (
    <>
      <TrainingForm onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
