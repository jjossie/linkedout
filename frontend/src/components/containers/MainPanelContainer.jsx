import React from 'react';

const MainPanelContainer = (props) => {
  return (
    <main style={{
      marginTop: "6em",
      display: "flex",
      flexWrap: "wrap",
      flexShrink: 0
    }}>
      {props.children}
    </main>
  );
};

export default MainPanelContainer;