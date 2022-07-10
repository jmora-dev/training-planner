import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ExerciseForm from "../components/ExerciseForm/ExerciseForm";
import { iExerciseAdding } from "../interfaces/iExerciseAdding";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";
import { api } from "../services/firebaseApi";

export default function AddExercise() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (exercise: iExerciseAdding) => {
    const newExercise = {
      ...exercise,
      creationDate: new Date().toString(),
    };

    api.insertExercise(newExercise).then((res) => {
      dispatch(
        exercisesActionsCreators.add({
          ...newExercise,
          id: res,
        })
      );
      navigate("/");
    });
  };

  return (
    <>
      <ExerciseForm onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
