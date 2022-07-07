import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ExerciseForm from "../components/ExerciseForm/ExerciseForm";
import { iExercise } from "../interfaces/iExercise";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";

export default function AddExercise() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (exercise: Partial<iExercise>) => {
    const newExercise = {
      ...exercise,
      id: Math.floor(Math.random() * 100000),
      creationDate: new Date(),
    } as iExercise;
    dispatch(exercisesActionsCreators.add(newExercise));
    navigate("/");
  };

  return (
    <>
      <ExerciseForm onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
