import React from 'react';

const LeftPanel = (props) => {
  const style = {
    width: "15vw",
    padding: "2em",
    // marginLeft: "15vw",
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default LeftPanel;