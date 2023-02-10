import React from 'react';
import Header from "../containers/Header";
import {useLoaderData} from "react-router-dom";
import ConnectionRequest from "../ConnectionRequest";
import MainContentContainer from "../containers/MainContentContainer";

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
      <MainContentContainer>
        {connectionRequestComponents}
        // Single component for testing purposes
        <ConnectionRequest username="Joe Momma"/>
      </MainContentContainer>
    </div>
  );
};

export default ConnectionRequests;