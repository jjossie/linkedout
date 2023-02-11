import React from 'react';

const CenterPanel = (props) => {
  const style = {
    width: "65vw",
    // marginLeft: "15vw",
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default CenterPanel;