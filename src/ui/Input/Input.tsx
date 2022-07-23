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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputType = INPUT_TYPE.TEXT,
  value,
  name,
  onChange,
}: InputTypeProps) {
  return (
    <input
      type={inputType}
      value={value}
      name={name}
      onChange={(e) => onChange(e)}
      className={input.input}
    />
  );
}
