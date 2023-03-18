import React, {useCallback, useState} from 'react';
import {Avatar, Button, Card} from "@mui/material";
import pfp from "../images/pfp.png";
import {loggedInFetch} from "../utils/fetch";

const ConnectionRequest = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleAcceptConnection = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    const result = await loggedInFetch(`/connection/${props.connectionId}`, "PUT", {
      "isAccepted": true
    })
      .catch(e => {
        setIsError(true);
      });
    setIsLoading(false);
    console.log(result);
  }, []);

  const handleRejectConnection = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    const result = await loggedInFetch(`/connection/${props.connectionId}`, "DELETE")
      .catch(e => {
        setIsError(true);
      });
    setIsLoading(false);
    console.log(result);
  }, []);

  return (
    <Card sx={containerStyle}>
      <div style={subContainerStyle}>
        <Avatar src={pfp}/>
        <h3>{props.firstName} {props.lastName}</h3>
      </div>
      <div style={subContainerStyle}>
        <Button onClick={handleAcceptConnection} variant="contained">Accept</Button>
        <Button onClick={handleRejectConnection} variant="outlined">Decline</Button>
      </div>
    </Card>
  );
};

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

export default ConnectionRequest;