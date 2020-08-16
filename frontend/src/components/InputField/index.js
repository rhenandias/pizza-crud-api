import React from "react";
import "./styles.css";

export default function InputField(props) {
  const { type, title, placeHolder, margin, value, onChange, width } = props;

  const style = {
    margin,
  };

  return (
    <div className="input-field-root" style={style}>
      <span>{title}</span>
      <input
        type={type}
        width={width || ""}
        placeholder={placeHolder}
        value={value || ""}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
