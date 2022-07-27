import { Button } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { Exercise } from "../../../exercises/interfaces/Exercise";
import DefaultExerciseCard from "../../../shared/DefaultExerciseCard/DefaultExerciseCard";
import SelectorWrapper from "../../../shared/SelectorWrapper/SelectorWrapper";
import "./exercisesSelector.css";

interface ExerciseSelectorProps {
  exercises: Exercise[];
  selectedIds: string[];
  toggleSelection: (id: string) => void;
  onBack: () => void;
}

export default function ExerciseSelector({
  exercises,
  selectedIds,
  toggleSelection,
  onBack,
}: ExerciseSelectorProps) {
  return (
    <div>
      <Button
        type={BUTTON_TYPE.BUTTON}
        style={BUTTON_STYLE.TEXT}
        onClick={onBack}
        text="Atrás"
        icon="fa-solid fa-angle-left"
      />
      <ul className="exercise-selector-list">
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <SelectorWrapper
              onSelect={() => toggleSelection(exercise.id!)}
              isSelected={selectedIds && selectedIds.includes(exercise.id!)}
            >
              <DefaultExerciseCard exercise={exercise} />
            </SelectorWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
}
