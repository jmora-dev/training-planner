import input from "./input.module.css";

export enum INPUT_TYPE {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

interface InputTypeProps {
  inputType?: INPUT_TYPE;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export default function Input({
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
      type={inputType}
      value={value}
      name={name}
      onChange={handleChange}
      className={input.input}
    />
  );
}
