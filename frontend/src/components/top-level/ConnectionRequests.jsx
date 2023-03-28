import React from 'react';
import Header from "../containers/Header";
import {useLoaderData} from "react-router-dom";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";
import ConnectionRequestList from "../ConnectionRequestList";

const ConnectionRequests = () => {
  const connectionRequests = useLoaderData();

  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          <ConnectionRequestList connectionRequests={connectionRequests}/>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default ConnectionRequests;