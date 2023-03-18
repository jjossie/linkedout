import React from 'react';

const RightPanel = (props) => {
  const style = {
    width: "30vw",
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

export default RightPanel;