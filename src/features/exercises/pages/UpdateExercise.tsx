import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ExerciseForm from "../components/ExerciseForm/ExerciseForm";
import { iExercise } from "../interfaces/iExercise";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";

export default function UpdateExercise() {
  const [exercise, setExercise] = useState<iExercise>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  useEffect(() => {
    // setExercise()
  }, [exerciseId]);

  const onSave = (exercise: Partial<iExercise>) => {
    dispatch(exercisesActionsCreators.update(exercise as iExercise));
    navigate("/");
  };
  return (
    <>
      <ExerciseForm initialData={exercise} onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
