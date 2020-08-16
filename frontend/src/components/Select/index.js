import React from "react";
import "./styles.css";

export default function Select() {
  return (
    <div className="custom-select">
      <select>
        <option value="0">Organizar</option>
        <option value="1">Menor preço</option>
        <option value="2">Maior preço</option>
        <option value="3">Mais antiga</option>
        <option value="4">Mais recente</option>
      </select>
    </div>
  );
}
