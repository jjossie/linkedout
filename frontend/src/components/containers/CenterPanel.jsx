import React from 'react';

const CenterPanel = (props) => {
  const style = {
    maxWidth: "70vw",
    boxSizing: "border-box",
    flexGrow: 1,
  }
  return (
    <section style={style}>
      {props.children}
    </section>
  );
};

export default CenterPanel;