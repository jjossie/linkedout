import React, {useCallback, useState} from 'react';
import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {loggedInFetch} from "../utils/fetch";
import SendIcon from "@mui/icons-material/Send";


const requestConnection = async (userId) => {
  await loggedInFetch('/user/requestConnection', "POST", {
    userId: userId
  });
};

const SuggestedConnection = (props) => {
  const {firstName, lastName, _id} = props.user;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(props.isSent ?? false);

  const requestSingleConnection = useCallback(() => {
    setIsError(false);
    setIsLoading(true);
    setIsSent(false);
    requestConnection(_id)
      .then(() => {
        setIsLoading(false);
        setIsSent(true);
        console.log("Connection Requested!")
      })
      .catch(e => {
        setIsError(true);
        setIsLoading(false);
        console.error("Failed to request connection!")
        console.error(e);
      });
  }, [])

  return (
    <Box style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5em"}}>
      <Typography>{firstName} {lastName}</Typography>
      <Button variant={"contained"}
              color={isSent ? "success" : isError ? "error" : "primary"}
              onClick={requestSingleConnection}
              disabled={isLoading} >
        <SendIcon style={{width: "0.75em", height: "0.75em"}} />
      </Button>
    </Box>
  );
};

export default SuggestedConnection;