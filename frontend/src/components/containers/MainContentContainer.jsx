import React from 'react';

const MainContentContainer = (props) => {
  return (
    <main style={{
      marginTop: "6em"
    }}>
      {props.children}
    </main>
  );
};

export default MainContentContainer;