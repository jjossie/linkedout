import React from 'react';

const InputTextField = ({name, placeholder}) => {
  const style = {
    fontSize: "12pt",
    width: "max-content",
    borderRadius: "2em",
    padding: "1em",
    border: "1px solid grey",
    left: "1em"
  }
  return (
    <input style={style} type="text" name={name} id={name} placeholder={placeholder}/>
  );
};

export default InputTextField;