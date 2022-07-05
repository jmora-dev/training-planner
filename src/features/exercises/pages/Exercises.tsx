import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import ExercisesList from "../components/ExercisesList/ExercisesList";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";

export default function Exercises() {
  const { data } = useSelector((state: RootState) => state.exercises);
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(exercisesActionsCreators.delete(id));
  };

  return (
    <>
      <Link to="/exercises/add">Nuevo</Link>
      <ExercisesList exercises={data} onDelete={onDelete} />
    </>
  );
}