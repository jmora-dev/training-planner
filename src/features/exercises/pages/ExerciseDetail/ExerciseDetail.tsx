import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Card } from "../../../../ui";
import { useExercises } from "../../hooks/useExercises";
import { Exercise } from "../../interfaces/Exercise";

export default function ExerciseDetail() {
  const { exerciseId } = useParams();
  const { getExerciseById } = useExercises();
  const [loading, setLoading] = useState<boolean>(true);
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    if (!exerciseId) {
      setLoading(false);
    } else {
      getExerciseById(exerciseId)
        .then((res) => setExercise(res))
        .finally(() => setLoading(false));
    }
  }, [getExerciseById, exerciseId]);

  if (loading) {
    return <p>Loading</p>;
  } else if (!exercise) {
    return <p>Error</p>;
  } else {
    return (
      <Card>
        <Card.Content>
          <div>
            <h3>{exercise.name}</h3>
            <div>
              <p>Descripción:</p>
              <p>{exercise.description}</p>
            </div>
            {exercise.image && (
              <div>
                <img src={exercise.image} alt={exercise.name} />
              </div>
            )}
            <Link to={ROUTES.EXERCISES}>Atrás</Link>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
