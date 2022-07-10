import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import TrainingsList from "../components/TrainingsList/TrainingsList";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";
import { api } from "../services/firebaseApi";

export default function Trainings() {
  const { data } = useSelector((state: RootState) => state.trainings);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getTrainings()
      .then((res) => dispatch(trainingsActionsCreators.load(res)));
  }, [dispatch]);

  const onDelete = (id: string) => {
    api.deleteTraining(id).then((res) => {
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
