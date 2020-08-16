import React from "react";
import "./styles.css";

export default function Button(props) {
  const { type, width, height, fontSize, text, onClick } = props;

  const className = type === "submit" ? "button-confirm" : "button-cancel";

  const style = {
    width,
    height,
    fontSize,
  };

  return (
    <button
      className={`${className} button-generic`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
