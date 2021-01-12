import React from "react";
const styles = {
  border: "5px solid darkblue",
  fontSize: "50px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none"
};
const Square = ({ value, onClick }) => {
  return (
    <div style={styles}>
      <button
        style={{
          height: "100%",
          width: "100%",
          fontSize: "50px",
          fontWeight: "800",
          background: "lightblue"
        }}
        value={value}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
