import React, {useState} from 'react';
import {Avatar, Button, Card} from "@mui/material";
import pfp from "../images/pfp.png";
import {loggedInFetch} from "../utils/fetch";

const ConnectionRequest = ({
  connectionId,
  firstName,
  lastName,
  setCrList
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const removeFromParentDelayed = () => {
    window.setTimeout(() => {
      setCrList(oldList => oldList.filter(cr => cr.connectionId !== connectionId));
    }, 2000)
  }

  const handleAcceptConnection = async () => {
    setIsError(false);
    setIsLoading(true);
    const result = await loggedInFetch(`/connection/${connectionId}`, "PUT", {
      "isAccepted": true
    })
      .catch(e => {
        setIsError(true);
      });
    setIsLoading(false);
    setIsAccepted(true);
    removeFromParentDelayed();
    console.log(result);
  }

  const handleRejectConnection = async () => {
    setIsError(false);
    setIsLoading(true);
    const result = await loggedInFetch(`/connection/${connectionId}`, "DELETE")
      .catch(e => {
        setIsError(true);
      });
    setIsLoading(false);
    setIsRejected(true);
    removeFromParentDelayed();
    console.log(result);
  }

  return (
    <Card sx={containerStyle}>
      <div style={subContainerStyle}>
        <Avatar src={pfp}/>
        <h3>{firstName} {lastName}</h3>
      </div>
      <div style={subContainerStyle}>
        {!isRejected &&
         <Button
           onClick={handleAcceptConnection}
           variant={isAccepted ? "outlined" : "contained"}
           disabled={isLoading || isAccepted}>
           {isAccepted ? "Accepted" : "Accept"}
         </Button>}
        {!isAccepted &&
         <Button
           onClick={handleRejectConnection}
           variant="outlined"
           disabled={isLoading || isRejected}>
           {isRejected ? "Declined" : "Decline"}
         </Button>}
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