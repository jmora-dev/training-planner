import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { Card } from "../../../../ui";
import { IExercise } from "../../interfaces/IExercise";

interface ExerciseCardProps {
  exercise: IExercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card>
      <Card.Image alt={exercise.name} src={exercise.image} />
      <Card.Content>
        <Card.Title text={exercise.name} />
        <Card.Description text={exercise.description} />
      </Card.Content>
      <Card.Content>
        <Link to={`${ROUTES.EXERCISES_UPDATE}/${exercise.id}`}>Editar</Link>
      </Card.Content>
    </Card>
  );
}
