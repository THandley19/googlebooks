import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Buttons({ type = "default", className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={["btn btn-lg", `btn-${type}`, className].join(" ")}
    >
      {children}
    </button>
  );
}

export default Buttons;
