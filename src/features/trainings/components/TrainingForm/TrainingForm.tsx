import { SyntheticEvent, useState } from "react";
import { Button, Input, Label } from "../../../../ui";
import { BUTTON_TYPE } from "../../../../ui/Button/Button";
import { INPUT_TYPE } from "../../../../ui/Input/Input";
import { Training } from "../../interfaces/Training";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <Input
          inputType={INPUT_TYPE.TEXT}
          name="description"
          value={data.description}
          onChange={handleChange}
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
      <Button type={BUTTON_TYPE.SUBMIT}>Guardar</Button>
    </form>
  );
}
