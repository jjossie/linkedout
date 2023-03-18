import React from 'react';
import {Avatar, Button, Card} from "@mui/material";
import pfp from "../images/pfp.png";

const ConnectionRequest = (props) => {
  const subContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1em",
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em 2em"
  };
  return (
    <Card sx={containerStyle}>
      <div style={subContainerStyle}>
        <Avatar src={pfp}/>
        <h3>{props.firstName} {props.lastName}</h3>
      </div>
      <div style={subContainerStyle}>
        <Button variant="contained">Accept</Button>
        <Button variant="outlined">Decline</Button>
      </div>
    </Card>
  );
};

export default ConnectionRequest;