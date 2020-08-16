import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Button from "../Button";

export default function Modal(props) {
  const {
    children,
    show,
    close,
    confirm,
    cancelTitle,
    confirmTitle,
    width,
    height,
    fontSize,
  } = props;

  const [node, setNode] = useState();

  const showClassName = show ? "modal display-block" : "modal display-none";

  // Block scroll lock when modal is opened
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";
    if (show) {
      document.querySelector("html").classList.add("scroll-lock");
      document.querySelector("html").style.marginRight = scrollbarWidth;
    } else {
      document.querySelector("html").classList.remove("scroll-lock");
      document.querySelector("html").style.marginRight = "";
    }
  }, [show]);

  // Control click outside and esc key events
  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [show]);

  // Esc key event
  function onKeyDown(e) {
    if (e.keyCode === 27) {
      close();
    }
  }

  // Click outside event
  function onClickOutside(e) {
    if (!node.contains(e.target)) {
      close();
    }
  }

  return ReactDOM.createPortal(
    <div className={showClassName}>
      <div className="modal-main" ref={(node) => setNode(node)}>
        {children}
        <div className="modal-buttons">
          <Button
            type="cancel"
            text={cancelTitle || "Cancelar"}
            width={width || "115px"}
            height={height || "35px"}
            fontSize={fontSize || "15px"}
            onClick={close}
          />
          <Button
            type="submit"
            text={confirmTitle || "Salvar"}
            width={width || "115px"}
            height={height || "35px"}
            fontSize={fontSize || "15px"}
            onClick={confirm}
          />
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
}
