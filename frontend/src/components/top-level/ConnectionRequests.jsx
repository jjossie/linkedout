import React from 'react';
import Header from "../Header";
import {useLoaderData} from "react-router-dom";
import ConnectionRequest from "../ConnectionRequest";

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
      {connectionRequestComponents}
      // Single component for testing purposes
      <ConnectionRequest username="Joe Momma"/>
    </div>
  );
};

export default ConnectionRequests;