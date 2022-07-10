import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import ExercisesList from "../components/ExercisesList/ExercisesList";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";
import { api } from "../services/firebaseApi";

export default function Exercises() {
  const { data } = useSelector((state: RootState) => state.exercises);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getExercises()
      .then((res) => dispatch(exercisesActionsCreators.load(res)));
  }, [dispatch]);

  const onDelete = (id: string) => {
    api.deleteExercise(id).then((res) => {
      if (res.ok) {
        dispatch(exercisesActionsCreators.delete(id));
      }
    });
  };

  return (
    <>
      <Link to="/exercises/add">Nuevo</Link>
      <ExercisesList exercises={data} onDelete={onDelete} />
    </>
  );
}
