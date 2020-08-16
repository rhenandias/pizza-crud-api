import React from "react";
import "./styles.css";

import loadingIcon from "../../assets/loading.png";

export default function Loading() {
  return (
    <div className="loading-div">
      <h2>Carregando ...</h2>
      <img src={loadingIcon} alt="Loading Icon" width="20" />
      <p>Espere mais um pouquinho que os resultados já vão aparecer ;)</p>
    </div>
  );
}
