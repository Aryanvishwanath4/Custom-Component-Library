import { CheckBoxProps } from "./CheckBox.types";

export const CheckBox = ({ label, id, checked, disabled }: CheckBoxProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        type="checkbox"
        style={{
          width: "16px",
          height: "16px",
          cursor: "pointer",
        }}
        checked={checked}
        disabled={disabled}
      />
    </div>
  );
};
