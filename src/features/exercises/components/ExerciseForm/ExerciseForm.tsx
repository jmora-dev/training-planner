import { SyntheticEvent, useState } from "react";
import { Button, Input, Label, Textarea } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { INPUT_TYPE } from "../../../../ui/Input/Input";
import { Exercise } from "../../interfaces/Exercise";
import "./exerciseForm.css";

interface ExerciseFormProps {
  initialData?: Exercise;
  onSave: (exercise: Exercise) => void;
}

const INIT_DATA: Exercise = {
  creationDate: "",
  name: "",
  description: "",
  primaryTarget: "",
  secondaryTarget: "",
  sources: "",
  image: "",
};

export default function ExerciseForm({
  initialData = INIT_DATA,
  onSave,
}: ExerciseFormProps) {
  const [data, setData] = useState<Exercise>(initialData);

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
    <form onSubmit={handleSubmit} className="exercise-form">
      <div>
        <Label htmlFor="name">Ejercicio:</Label>
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
        <Label htmlFor="name">Objetivo:</Label>
        <Input
          inputType={INPUT_TYPE.TEXT}
          name="primaryTarget"
          value={data.primaryTarget}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="name">Objetivo secundario:</Label>
        <Input
          inputType={INPUT_TYPE.TEXT}
          name="secondaryTarget"
          value={data.secondaryTarget}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="name">Fuentes:</Label>
        <Input
          inputType={INPUT_TYPE.TEXT}
          name="sources"
          value={data.sources}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="name">URL imagen:</Label>
        <Input
          inputType={INPUT_TYPE.TEXT}
          name="image"
          value={data.image}
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
