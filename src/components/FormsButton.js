import React, { useState } from "react";
import selected from "../assets/selected.svg";

const FormsButton = (props) => {
  const [ticked, setTicked] = useState(false);

  let valueFinal = "";

  if (props.value){
    valueFinal = ` | ${props.value} €`
  }

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
          <p>{props.name}</p> <p>{valueFinal}</p>
        </div>
      </button>
    </div>
  );
};

export default FormsButton;
