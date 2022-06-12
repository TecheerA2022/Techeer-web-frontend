import * as React from "react";

interface SemesterBtnProps {
  label: string;
}

export default function SemesterButton({ label }: SemesterBtnProps) {
  return <button className="semester-button">{label}</button>;
}
