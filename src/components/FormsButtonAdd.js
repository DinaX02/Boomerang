import React from "react";

const FormsButtonAdd = (props) => {
  return (
    <div>
      <button
        className="FormsButton"
      >
        <div className="FormsButtonOrg">
          <p>{props.name}</p> <p className="adder">+</p>
        </div>
      </button>
    </div>
  );
};

export default FormsButtonAdd;
