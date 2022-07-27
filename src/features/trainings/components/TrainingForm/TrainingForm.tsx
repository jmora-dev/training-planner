import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Input, Label, Textarea } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { INPUT_TYPE } from "../../../../ui/Input/Input";
import { useExercises } from "../../../exercises/hooks/useExercises";
import { Exercise } from "../../../exercises/interfaces/Exercise";
import { Training } from "../../interfaces/Training";
import ExerciseSelector from "../ExercisesSelector/ExercisesSelector";
import SelectedExercises from "../SelectedExercises/SelectedExercises";
import "./trainingForm.css";

interface ExerciseFormProps {
  initialData?: Training;
  onSave: (training: Training) => void;
}

const INIT_DATA: Training = {
  creationDate: "",
  name: "",
  description: "",
  team: "",
  target: "",
  equipment: "",
  players: "",
  observation: "",
  exercises: [],
};

export default function TrainingForm({
  initialData = INIT_DATA,
  onSave,
}: ExerciseFormProps) {
  const [data, setData] = useState<Training>(initialData);
  const [exerciseSelectorVisible, setExerciseSelectorVisible] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const { exercises, reloadAllExercises } = useExercises();

  useEffect(() => {
    reloadAllExercises();
  }, [reloadAllExercises]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setSelectedExercises(
        exercises.filter((exercise) => data.exercises.includes(exercise.id!))
      );
    }
  }, [data.exercises, exercises]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const updateData = { ...data };
    if (!updateData.creationDate) {
      updateData.creationDate = new Date().toJSON();
    }
    onSave(updateData);
  };

  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  const toggleSelectionExercise = (id: string) => {
    if (data && data.exercises) {
      console.log(data.exercises);
      let exercises = [...data.exercises];
      if (exercises.includes(id)) {
        exercises = exercises.filter((link) => link !== id);
      } else {
        exercises.push(id);
      }
      setData({ ...data, exercises });
    }
  };

  if (exerciseSelectorVisible) {
    return (
      <ExerciseSelector
        exercises={exercises}
        selectedIds={data.exercises}
        toggleSelection={toggleSelectionExercise}
        onBack={() => setExerciseSelectorVisible(false)}
      />
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className="training-form">
        <div>
          <Label htmlFor="name">Nombre:</Label>
          <Input
            inputType={INPUT_TYPE.TEXT}
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="name">Descripción:</Label>
          <Textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="name">Equipo:</Label>
          <Input
            inputType={INPUT_TYPE.TEXT}
            name="team"
            value={data.team}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="name">Objetivo:</Label>
          <Input
            inputType={INPUT_TYPE.TEXT}
            name="target"
            value={data.target}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="name">Equipamiento:</Label>
          <Input
            inputType={INPUT_TYPE.TEXT}
            name="equipment"
            value={data.equipment}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            type={BUTTON_TYPE.BUTTON}
            style={BUTTON_STYLE.TEXT}
            onClick={() => setExerciseSelectorVisible(true)}
            text="Navegar"
            icon=""
          />
          <SelectedExercises exercises={selectedExercises} />
        </div>
        <Button
          type={BUTTON_TYPE.SUBMIT}
          style={BUTTON_STYLE.SOLID_PRIMARY}
          text="Guardar"
        />
      </form>
    );
  }
}
