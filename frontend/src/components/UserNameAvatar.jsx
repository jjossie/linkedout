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
  purple
} from "@mui/material/colors";

function numberFromText(text) {
  // numberFromText("AA");
   // => "6565"
  return text
    .split('') // => ["A", "A"]
    .map(char => char.charCodeAt(0)) // => [65, 65]
    .join('');
}

const colors = [
  blue[400],
  blue[200],
  blueGrey[400],
  blueGrey[200],
  lightBlue[400],
  lightBlue[200],
  green[400],
  green[200],
  lightGreen[400],
  lightGreen[200],
  orange[400],
  orange[200],
  deepOrange[400],
  deepOrange[200],
  purple[400],
  purple[200],
  deepPurple[400],
  deepPurple[200],
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