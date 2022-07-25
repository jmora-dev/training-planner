import { SyntheticEvent, useState } from "react";
import { Button, Input, Label, Textarea } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { INPUT_TYPE } from "../../../../ui/Input/Input";
import { Training } from "../../interfaces/Training";
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
      <Button
        type={BUTTON_TYPE.SUBMIT}
        style={BUTTON_STYLE.SOLID_PRIMARY}
        text="Guardar"
      />
    </form>
  );
}
