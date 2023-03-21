import React, {useCallback, useState} from 'react';
import {Avatar, Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {loggedInFetch} from "../utils/fetch";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";


const requestConnection = async (userId) => {
  await loggedInFetch('/user/requestConnection', "POST", {
    userId: userId
  });
};

const SuggestedConnection = ({user, setSuggestedConnections}) => {
  const {firstName, lastName, _id} = user;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);


  const requestSingleConnection = useCallback(() => {
    setIsError(false);
    setIsLoading(true);
    setIsAdded(false);
    requestConnection(_id)
      .then(() => {
        setIsLoading(false);
        setIsAdded(true);
        setTimeout(() => {
          // Re-render parent
          setSuggestedConnections(old => {
            return old.filter(sc => sc._id !== _id);
          });
        }, 3000);
        console.log("Connection Requested!");
      })
      .catch(e => {
        setIsError(true);
        setIsLoading(false);
        setIsAdded(false);
        console.error("Failed to request connection!");
        console.error(e);
      });
  }, [_id, setSuggestedConnections]);

  const name = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`;
  return (
    <Box style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5em"}}>
      {/*<Avatar {...stringAvatar(name)} />*/}
      <Box style={{display: "flex", alignItems: "center", gap: "0 0.5em"}}>
        <Avatar sx={{bgColor: "blue"}}>{initials}</Avatar>
        <Typography>{name}</Typography>
      </Box>
      <Button variant={"contained"}
              color={isError ? "error" : "primary"}
              onClick={requestSingleConnection}
              disabled={isLoading || isAdded}
      >
        {!isAdded && <SendIcon style={{width: "0.75em", height: "0.75em"}}/>}
        {isAdded && <CheckIcon style={{width: "0.75em", height: "0.75em"}}/>}
      </Button>
    </Box>
  );
};

export default SuggestedConnection;