import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import ExerciseForm from "../components/ExerciseForm/ExerciseForm";
import { useExercises } from "../hooks/useExercises";
import { Exercise } from "../interfaces/Exercise";

export default function UpdateExercise() {
  const { getExerciseById, updateExercise } = useExercises();
  const [loading, setLoading] = useState<boolean>(true);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  useEffect(() => {
    if (!exerciseId) {
      setLoading(false);
    } else {
      getExerciseById(exerciseId)
        .then((res) => setExercise(res))
        .finally(() => setLoading(false));
    }
  }, [exerciseId, getExerciseById]);

  const onSave = (updateData: Exercise) => {
    if (exercise) {
      updateExercise(exercise.id!, updateData).then(() => {
        navigate(ROUTES.EXERCISES);
      });
    }
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
      <Link to={ROUTES.EXERCISES}>Back</Link>
    </>
  );
}
