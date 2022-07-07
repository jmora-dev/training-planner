import { SyntheticEvent, useState } from "react";
import { iTraining } from "../../interfaces/iTraining";
interface iExerciseFormProps {
  initialData?: Partial<iTraining>;
  onSave: (training: Partial<iTraining>) => void;
}

const INIT_DATA: Partial<iTraining> = {
  name: "",
  description: "",
  team: "",
  target: "",
  equipment: "",
  exercises: [],
};

export default function TrainingForm({
  initialData = INIT_DATA,
  onSave = () => {},
}: iExerciseFormProps) {
  const [data, setData] = useState<Partial<iTraining>>(initialData);

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
        name="team"
        value={data.team}
        onChange={handleChange}
        placeholder="team"
      />
      <input
        type="text"
        name="target"
        value={data.target}
        onChange={handleChange}
        placeholder="target"
      />
      <input
        type="text"
        name="equipment"
        value={data.equipment}
        onChange={handleChange}
        placeholder="equipment"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
