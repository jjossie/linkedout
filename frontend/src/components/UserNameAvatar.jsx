import React from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import AvatarImage from "./AvatarImage";

const UserNameAvatar = ({user, bold=false}) => {
  const name = `${user.firstName} ${user.lastName}`;
  return (
    <Link
      style={{
        all: "unset",
        cursor: "pointer"
      }}
      to={`/user/${user._id}`} >
      <Box style={{display: "flex", alignItems: "center", gap: "0 0.5em"}}>
        <AvatarImage user={user}/>
        <Typography variant={bold? "h6" : "" }>{name}</Typography>
      </Box>
    </Link>
  );
};

export default UserNameAvatar;