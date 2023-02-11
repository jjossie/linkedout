import React from 'react';
import Header from "../containers/Header";
import {useLoaderData} from "react-router-dom";
import ConnectionRequest from "../ConnectionRequest";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";

const ConnectionRequests = () => {

  const connectionRequests = useLoaderData();

  const connectionRequestComponents = connectionRequests.map(conReq => {
    return <ConnectionRequest
      username={conReq.userId}
    />
  });

  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          {connectionRequestComponents}
          { /* Single component for testing purposes */ }
          <ConnectionRequest username="Joe Momma"/>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default ConnectionRequests;