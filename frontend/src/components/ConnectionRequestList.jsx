import React from 'react';
import ConnectionRequest from "./ConnectionRequest";
import Container from "@mui/material/Container";

const ConnectionRequestList = ({setState, connectionRequests}) => {
  console.log("Rendering ConnectionRequestList");

  // const [crList, setCrList] = useState(connectionRequests);

  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1em"
    }}>
      {connectionRequests?.map?.(conReq => {
        return <ConnectionRequest
          setState={setState}
          firstName={conReq.firstName}
          lastName={conReq.lastName}
          userId={conReq.userId}
          connectionId={conReq.connectionId}
          key={conReq.userId}
        />;
      })}
    </Container>
  );
};

export default ConnectionRequestList;