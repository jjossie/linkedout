import React, {useState} from 'react';
import Header from "../containers/Header";
import {useLoaderData} from "react-router-dom";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";
import ConnectionRequestList from "../ConnectionRequestList";

const ConnectionRequests = () => {
  console.log("Rendering ConnectionRequests Page");

  const [state, setState] = useState(false);

  const connectionRequests = useLoaderData();

  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          <ConnectionRequestList setState={() => {
            setState(!state);
          }} connectionRequests={connectionRequests}/>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default ConnectionRequests;