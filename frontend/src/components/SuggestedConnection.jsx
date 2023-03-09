import React, {useCallback} from 'react';
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

  const requestSingleConnection = useCallback(() => {
    requestConnection(_id)
      .then(() => {
        console.log("Connection Requested!")
      })
      .catch(e => {
        console.error("Failed to request connection!")
      });
  }, [])

  return (
    <Box style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5em"}}>
      <Typography>{firstName} {lastName}</Typography>
      <Button variant="contained" onClick={requestSingleConnection}>
        <SendIcon style={{width: "0.75em", height: "0.75em"}} />
      </Button>
    </Box>
  );
};

export default SuggestedConnection;