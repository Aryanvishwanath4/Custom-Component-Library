import { useEffect, useState } from "react";
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton = ({
  label,
  id,
  checked,
  disabled,
}: RadioButtonProps) => {
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
        type="radio"
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
