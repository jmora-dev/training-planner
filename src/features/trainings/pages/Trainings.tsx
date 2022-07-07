import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import TrainingsList from "../components/TrainingsList/TrainingsList";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";

export default function Trainings() {
  const { data } = useSelector((state: RootState) => state.trainings);
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(trainingsActionsCreators.delete(id));
  };

  return (
    <>
      <Link to="/exercises/add">Nuevo</Link>
      <TrainingsList trainings={data} onDelete={onDelete} />
    </>
  );
}
