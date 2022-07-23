import React from "react";
import label from "./label.module.css";

interface iLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: iLabelProps) {
  return (
    <label htmlFor={htmlFor} className={label.label}>
      {children}
    </label>
  );
}
