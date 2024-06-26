import { useEffect, useState } from "react";
import { CheckBoxProps } from "./CheckBox.types";

export const CheckBox = ({ label, id, checked, disabled }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Space") {
      handleChange();
    }
  };
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="checkbox"
        style={{
          width: "16px",
          height: "16px",
          cursor: "pointer",
        }}
        checked={isChecked}
        disabled={disabled}
        value={label}
      />
    </div>
  );
};
