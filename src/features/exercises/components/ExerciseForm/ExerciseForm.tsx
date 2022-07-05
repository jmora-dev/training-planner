import { SyntheticEvent, useState } from "react";
import { iExercise } from "../../interfaces/iExercise";

interface iExerciseFormProps {
  initialData?: Partial<iExercise>;
  onSave: (exercise: Partial<iExercise>) => void;
}

const INIT_DATA = {
  name: "",
  description: "",
  primaryTarget: "",
  secondaryTarget: "",
  sources: "",
  image: "",
};

export default function ExerciseForm({
  initialData = INIT_DATA,
  onSave = () => {},
}: iExerciseFormProps) {
  const [data, setData] = useState<Partial<iExercise>>(initialData);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="description"
        value={data.description}
        onChange={handleChange}
        placeholder="description"
      />
      <input
        type="text"
        name="primaryTarget"
        value={data.primaryTarget}
        onChange={handleChange}
        placeholder="primaryTarget"
      />
      <input
        type="text"
        name="secondaryTarget"
        value={data.secondaryTarget}
        onChange={handleChange}
        placeholder="secondaryTarget"
      />
      <input
        type="text"
        name="sources"
        value={data.sources}
        onChange={handleChange}
        placeholder="sources"
      />
      <input
        type="text"
        name="image"
        value={data.image}
        onChange={handleChange}
        placeholder="image"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
