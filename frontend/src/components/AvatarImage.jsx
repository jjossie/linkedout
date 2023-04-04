import React from 'react';
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
import {Avatar} from "@mui/material";

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
  green[300],
  blueGrey[300],
  lightBlue[400],
  deepOrange[400],
  deepOrange[500],
  blue[300],
  orange[400],
  lightGreen[300],
  lightBlue[300],
  deepPurple[300],
  deepPurple[400],
  green[400],
  purple[300],
  orange[600],
  red[400],
  purple[400],
  red[300],
];


const AvatarImage = ({user}) => {
  const image = user ? user.imageUrl : null;
  const initials = (user?.firstName && user?.lastName) ? `${user?.firstName[0]}${user?.lastName[0]}` : "AB";
  const color = user ? colors[numberFromText(user?.firstName + " " + user?.lastName) % colors.length] : colors[0];

  return (
    <>
      {(!image) && <Avatar sx={{bgcolor: color}}>{initials}</Avatar>}
      {( image) && <Avatar src={image}/> }
    </>
  );
};


export default AvatarImage;