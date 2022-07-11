import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import TrainingsList from "../components/TrainingsList/TrainingsList";
import { useApi } from "../hooks/useApi";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";

export default function Trainings() {
  const { getTrainings, deleteTraining } = useApi();
  const { data } = useSelector((state: RootState) => state.trainings);
  const dispatch = useDispatch();

  useEffect(() => {
    getTrainings().then((res) => dispatch(trainingsActionsCreators.load(res)));
  }, [dispatch, getTrainings]);

  const onDelete = (id: string) => {
    deleteTraining(id).then((res) => {
      if (res.ok) {
        dispatch(trainingsActionsCreators.delete(id));
      }
    });
  };

  return (
    <>
      <Link to="/exercises/add">Nuevo</Link>
      <TrainingsList trainings={data} onDelete={onDelete} />
    </>
  );
}
