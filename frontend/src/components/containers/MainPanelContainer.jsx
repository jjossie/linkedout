import React from 'react';

const MainPanelContainer = (props) => {
  return (
    <main style={{
      marginTop: "6em",
      display: "flex",

    }}>
      {props.children}
    </main>
  );
};

export default MainPanelContainer;