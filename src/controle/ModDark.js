import React, { useState } from "react";
import "./dark.css";

//☀︎ ☽
export default function ModDark() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container containerdark">
        <span className="spandark" style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span  className="slider round spandark"> </span>
          </label>
        </div>
        <span className="spandark" style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
      </div>
    </div>
  );
}
