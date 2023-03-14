import React from 'react';

const LeftPanel = (props) => {
  const style = {
    width: "30vw",
    padding: "2em",
    boxSizing: "border-box"
    // marginLeft: "15vw",
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default LeftPanel;