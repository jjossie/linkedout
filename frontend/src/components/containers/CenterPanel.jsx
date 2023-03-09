import React from 'react';

const CenterPanel = (props) => {
  const style = {
    width: "40vw",
    boxSizing: "border-box"
    // marginLeft: "15vw",
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default CenterPanel;