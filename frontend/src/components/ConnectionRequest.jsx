import React from 'react';
import {Avatar, Button, Card} from "@mui/material";
import pfp from "../images/pfp.png";

const ConnectionRequest = (props) => {
  const subContainerStyle = {
    display: "flex",
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2em"
  };
  return (
    <Card sx={containerStyle}>
      <div style={subContainerStyle}>
        <Avatar src={pfp}/>
        <h4>{props.username}</h4>
      </div>
      <div style={subContainerStyle}>
        <Button variant="contained">Accept</Button>
        <Button variant="outlined">Decline</Button>
      </div>
    </Card>
  );
};

export default ConnectionRequest;