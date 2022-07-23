import { SyntheticEvent, useState } from "react";
import { Exercise } from "../../interfaces/Exercise";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ejercicio:</label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Descripción:</label>
      <input
        type="text"
        name="description"
        value={data.description}
        onChange={handleChange}
      />
      <label htmlFor="primaryTarget">Objetivo:</label>
      <input
        type="text"
        name="primaryTarget"
        value={data.primaryTarget}
        onChange={handleChange}
      />
      <label htmlFor="secondaryTarget">Objetivo secundario:</label>
      <input
        type="text"
        name="secondaryTarget"
        value={data.secondaryTarget}
        onChange={handleChange}
      />
      <label htmlFor="sources">Fuentes:</label>
      <input
        type="text"
        name="sources"
        value={data.sources}
        onChange={handleChange}
      />
      <label htmlFor="image">Imagen URL:</label>
      <input
        type="text"
        name="image"
        value={data.image}
        onChange={handleChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
