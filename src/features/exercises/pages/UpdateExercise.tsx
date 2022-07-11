import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ExerciseForm from "../components/ExerciseForm/ExerciseForm";
import { iExercise } from "../interfaces/iExercise";
import { iExerciseAdding } from "../interfaces/iExerciseAdding";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";
import { api } from "../services/firebaseApi";

export default function UpdateExercise() {
  const [loading, setLoading] = useState<boolean>(true);
  const [exercise, setExercise] = useState<iExercise | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  useEffect(() => {
    if (!exerciseId) {
      setLoading(false);
    } else {
      api
        .getExerciseById(exerciseId)
        .then((res) => setExercise(res))
        .finally(() => setLoading(false));
    }
  }, [exerciseId]);

  const onSave = (updateData: iExerciseAdding) => {
    api.updateExercise(exercise!.id, updateData).then((res) => {
      dispatch(exercisesActionsCreators.update(res));
      navigate("/");
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exercise) {
    return <div>Error</div>;
  }

  return (
    <>
      <ExerciseForm initialData={exercise} onSave={onSave} />
      <Link to="/">Back</Link>
    </>
  );
}
