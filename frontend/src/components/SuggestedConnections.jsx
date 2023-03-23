import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {getSuggestedConnections} from "../services/user";
import SuggestedConnection from "./SuggestedConnection";
import {TransitionGroup} from "react-transition-group";
import {Collapse} from "@mui/material";

const SuggestedConnections = (props) => {
  const [suggestedConnections, setSuggestedConnections] = useState(null);

  useEffect(() => {
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
      <TransitionGroup enter={true}>
        {suggestedConnections?.map?.((conn) => {
          return <Collapse key={conn._id + "-collapse"}>
            <SuggestedConnection
              key={conn._id}
              user={conn}
              // onRequested={onConnectionRequested}
              setSuggestedConnections={setSuggestedConnections}
            />
          </Collapse>;
        })}
      </TransitionGroup>
    </Paper>
  );
};

const style = {
  padding: "2em"
};

export default SuggestedConnections;