import textarea from "./textarea.module.css";

export default function TextArea({
  name,
  value,
  rows = 2,
  onChange,
}: {
  name: string;
  value: string;
  rows?: number;
  onChange: (name: string, value: string) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      className={textarea.textarea}
      rows={rows}
    ></textarea>
  );
}
