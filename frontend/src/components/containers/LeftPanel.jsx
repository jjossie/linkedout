import React from 'react';

const LeftPanel = (props) => {
  const style = {
    width: "15vw",
    // marginLeft: "15vw",
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default LeftPanel;