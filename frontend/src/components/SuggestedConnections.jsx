import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {getSuggestedConnections} from "../services/user";
import SuggestedConnection from "./SuggestedConnection";

const SuggestedConnections = (props) => {
  const [suggestedConnections, setSuggestedConnections] = useState(null);

  useEffect(() => {
    console.log("Using Effect!");
    getSuggestedConnections()
      .then((scs) => {
        console.log(scs);
        setSuggestedConnections(scs);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <Paper elevation={2} style={style}>
      <Typography>Suggested Connections</Typography>
      {suggestedConnections?.map((conn) => {
        return <SuggestedConnection key={conn._id} user={conn}/>
      })}
    </Paper>
  );
};

const style = {
  padding: "2em"
};

export default SuggestedConnections;