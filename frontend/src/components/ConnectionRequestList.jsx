import React, {useState} from 'react';
import ConnectionRequest from "./ConnectionRequest";
import {Collapse} from "@mui/material";
import {TransitionGroup} from "react-transition-group";
import Typography from "@mui/material/Typography";

const ConnectionRequestList = ({connectionRequests}) => {
  const [crList, setCrList] = useState(connectionRequests);

  const crListComponents = crList?.map?.(cr => {
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
  });

  return (
      <TransitionGroup style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em"
      }}>
        {(crListComponents.length === 0)
          ? <Collapse key="blank"><Typography>Nobody wants to be friends with you 🥲</Typography></Collapse>
          : crListComponents
        }
      </TransitionGroup>
  );
};

export default ConnectionRequestList;