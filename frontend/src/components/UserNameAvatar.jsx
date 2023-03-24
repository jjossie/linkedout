import React from 'react';
import {Link} from "react-router-dom";
import {Avatar, Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  blue,
  blueGrey,
  deepOrange,
  deepPurple,
  green,
  lightBlue,
  lightGreen,
  orange,
  purple,
  red
} from "@mui/material/colors";

function numberFromText(text) {
  return text
    .split('') // => ["A", "A"]
    .map(char => char.charCodeAt(0)) // => [65, 65]
    .join('');
}

const colors = [
  lightGreen[400],
  blue[400],
  blueGrey[400],
  blueGrey[300],
  green[300],
  lightBlue[400],
  deepOrange[400],
  orange[400],
  deepOrange[500],
  blue[300],
  lightGreen[300],
  lightBlue[300],
  deepPurple[300],
  purple[300],
  purple[400],
  deepPurple[400],
  green[400],
  orange[600],
  red[400],
  red[300],
]

const UserNameAvatar = ({userId, firstName, lastName, bold=false}) => {
  const initials = `${firstName[0]}${lastName[0]}`;
  const name = `${firstName} ${lastName}`;
  const color = colors[numberFromText(name) % colors.length];
  return (
    <Link
      style={{
        all: "unset",
        cursor: "pointer"
      }}
      to={`/user/${userId}`} >
      <Box style={{display: "flex", alignItems: "center", gap: "0 0.5em"}}>
        <Avatar sx={{bgcolor: color}}>{initials}</Avatar>
        <Typography variant={bold? "h6" : "" }>{name}</Typography>
      </Box>
    </Link>
  );
};

export default UserNameAvatar;