import React, {useState} from 'react';
import ConnectionRequest from "./ConnectionRequest";
import {Collapse} from "@mui/material";
import {TransitionGroup} from "react-transition-group";

const ConnectionRequestList = ({connectionRequests}) => {
  console.log("Rendering ConnectionRequestList");
  console.log("Prop: ");
  console.log(connectionRequests);
  const [crList, setCrList] = useState(connectionRequests);
  console.log("State:");
  console.log(crList);
  return (
    // <Container sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "1em"
    // }}>
      <TransitionGroup style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em"
      }}>
        {crList?.map?.(cr => {
          return <Collapse key={cr.connectionId}>
            <ConnectionRequest
              connectionId={cr.connectionId}
              userId={cr.userId}
              firstName={cr.firstName}
              lastName={cr.lastName}
              setCrList={setCrList}
              key={cr.userId}
            />
          </Collapse>;
        })}
      </TransitionGroup>
    // </Container>
  );
};

export default ConnectionRequestList;