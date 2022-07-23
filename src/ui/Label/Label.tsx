import React from "react";
import label from "./label.module.css";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={label.label}>
      {children}
    </label>
  );
}
