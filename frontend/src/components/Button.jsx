import React from 'react';

const Button = (props) => {
  // let className = "button " + props.filled ? "filled" : "";
  // className += props.greyed ? " greyed" : "";
  return (
    <div className="button">
      {props.text}
    </div>
  );
};

export default Button;