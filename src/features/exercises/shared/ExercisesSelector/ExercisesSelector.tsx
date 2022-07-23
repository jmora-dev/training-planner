import { useEffect, useState } from "react";
import { useExercises } from "../../hooks/useExercises";
import ExerciseSelectorCard from "./components/ExerciseSelectorCard/ExerciseSelectorCard";
import "./exercisesSelector.css";

interface ExercisesSelectorProps {
  idsExercisesSelected: Array<string>;
}

export default function ExercisesSelector({
  idsExercisesSelected,
}: ExercisesSelectorProps) {
  const [exercisesSelected, setExercisesSelected] =
    useState(idsExercisesSelected);
  const { exercises, reloadAllExercises } = useExercises();

  useEffect(() => {
    reloadAllExercises();
  }, [reloadAllExercises]);

  const onClickExercise = (exerciseId: string) => {
    if (checkExerciseIsSelected(exerciseId)) {
      setExercisesSelected(exercisesSelected.filter((id) => id !== exerciseId));
    } else {
      setExercisesSelected([...exercisesSelected, exerciseId]);
    }
  };

  const checkExerciseIsSelected = (exerciseId: string): boolean => {
    return Boolean(exercisesSelected.find((id) => id === exerciseId));
  };

  return (
    <div>
      <ul className="exercise-selector-list">
        {exercises.map((exercise) => (
          <li key={exercise.id!} className="exercise-selector-list__item">
            <ExerciseSelectorCard
              exercise={exercise}
              isSelected={checkExerciseIsSelected(exercise.id!)}
              selectExercise={onClickExercise}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
