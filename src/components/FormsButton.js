import React, { useState } from "react";
import selected from "../assets/selected.svg";

const FormsButton = () => {
  const [ticked, setTicked] = useState(false);

  return (
    <div>
      <button
        className={`FormsButton ${ticked ? "FormsButtonAdd" : ""}`}
        onClick={() => setTicked(!ticked)}
      >
        <img
          src={selected}
          alt="selected"
          style={ticked ? { display: "block" } : { display: "none" }}
        />
        <div className="FormsButtonOrg">
          <p>Transportadora Eco-Friendly</p> <p>| +5€</p>
        </div>
      </button>
    </div>
  );
};

export default FormsButton;
