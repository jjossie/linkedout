import React from 'react';

const InputTextField = (props) => {
  return (
    <div>
      <input type="text" name={props.name} id={props.name} />
    </div>
  );
};

export default InputTextField;