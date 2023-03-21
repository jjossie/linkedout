import React from 'react';

const LeftPanel = (props) => {
  const style = {
    width: "20vw",
    padding: "2em",
    boxSizing: "border-box",
    flexShrink: "3"
  }
  return (
    <section style={style}>
      {props.children}
    </section>
  );
};

export default LeftPanel;