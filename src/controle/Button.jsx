import React from "react";
import "./btn.css"

function Button() {
  return (
    <>
      <button type="button" className="buttonAdd">
        <span className="button__text">Ajouter</span>
        <span className="button__icon">
        <i className="fa-solid fa-plus"></i>
        </span>
      </button>
    </>
  );
}

export default Button;
