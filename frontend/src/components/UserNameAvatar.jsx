import React from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import AvatarImage from "./AvatarImage";

const UserNameAvatar = ({userId, firstName, lastName, bold=false}) => {
  const name = `${firstName} ${lastName}`;
  return (
    <Link
      style={{
        all: "unset",
        cursor: "pointer"
      }}
      to={`/user/${userId}`} >
      <Box style={{display: "flex", alignItems: "center", gap: "0 0.5em"}}>
        <AvatarImage firstName={firstName} lastName={lastName}/>
        <Typography variant={bold? "h6" : "" }>{name}</Typography>
      </Box>
    </Link>
  );
};

export default UserNameAvatar;