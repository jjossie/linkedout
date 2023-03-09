import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {getSuggestedConnections} from "../services/user";
import {useNavigate} from "react-router-dom";

const SuggestedConnections = (props) => {
  const [suggestedConnections, setSuggestedConnections] = useState(null);

  // const navigate = useNavigate();

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
      {suggestedConnections?.map(conn => {
        return <span>{conn.firstName} {conn.lastName}</span>
      })}
    </Paper>
  );
};

const style = {
  padding: "2em"
};

export default SuggestedConnections;