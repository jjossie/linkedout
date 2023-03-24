import React from 'react';
import {Link} from "react-router-dom";
import {Avatar, Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const UserNameAvatar = ({userId, firstName, lastName}) => {
  const initials = `${firstName[0]}${lastName[0]}`;
  const name = `${firstName} ${lastName}`;
  return (
    <Link
      style={{
        all: "unset",
        cursor: "pointer"
      }}
      to={`/user/${userId}`} >
      <Box style={{display: "flex", alignItems: "center", gap: "0 0.5em"}}>
        <Avatar sx={{bgColor: "blue"}}>{initials}</Avatar>
        <Typography>{name}</Typography>
      </Box>
    </Link>
  );
};

export default UserNameAvatar;