import React from 'react';

const LeftPanel = (props) => {
  const style = {
    width: "20vw",
    padding: "2em",
    boxSizing: "border-box"
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default LeftPanel;