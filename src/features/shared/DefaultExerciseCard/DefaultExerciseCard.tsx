import { Card } from "../../../ui";
import { Exercise } from "../../exercises/interfaces/Exercise";

interface ExerciseSelectorCardProps {
  exercise: Exercise;
}

export default function DefaultExerciseCard({
  exercise,
}: ExerciseSelectorCardProps) {
  return (
    <article>
      <Card>
        <Card.Image alt={exercise.name} src={exercise.image} />
        <Card.Content>
          <Card.ArticleTitle text={exercise.name} />
          <Card.Description text={exercise.description} />
        </Card.Content>
      </Card>
    </article>
  );
}
