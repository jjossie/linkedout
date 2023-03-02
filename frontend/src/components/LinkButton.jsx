import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const LinkButton = (props) => {

  return (
    <Button disabled={props.isLoading}>
      <Link style={linkStyle} key={props.key} to={props.to}>{props.children}</Link>
    </Button>
  );
};

const linkStyle = {
  all: "unset"
};

export default LinkButton;