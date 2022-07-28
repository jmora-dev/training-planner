import input from "./input.module.css";

export enum INPUT_TYPE {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

interface InputTypeProps {
  id?: string;
  inputType?: INPUT_TYPE;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export default function Input({
  id,
  inputType = INPUT_TYPE.TEXT,
  value,
  name,
  onChange,
}: InputTypeProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <input
      id={id}
      type={inputType}
      value={value}
      name={name}
      onChange={handleChange}
      className={input.input}
    />
  );
}
