import React, {useCallback, useState} from 'react';
import {Box, Button} from "@mui/material";
import {loggedInFetch} from "../utils/fetch";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import UserNameAvatar from "./UserNameAvatar";


const requestConnection = async (userId) => {
  await loggedInFetch('/user/requestConnection', "POST", {
    userId: userId
  });
  return null;
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
        }, 2000);
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

  return (
    <Box style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5em"}}>
      <UserNameAvatar userId={_id} firstName={firstName} lastName={lastName}/>
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