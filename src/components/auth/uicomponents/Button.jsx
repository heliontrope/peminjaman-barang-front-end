import React from "react";

const Button = ({ text, color, bgcolor, padding, fontsize }) => {
  const style = {
    color: color,
    backgroundColor: bgcolor,
    padding: padding,
    fontSize: fontsize,
  };
  return (
    <button className="welcome-button py round  white" style={style}>
      {text}
    </button>
  );
};

export default Button;
