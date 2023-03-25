import React from 'react';
import {Button} from "@mui/material";
// import Button from "./Button";

const ProfileInfo = ({
  name,
  description,
  location,
  contactLink,
  connectionsLink,
  connectionCount,
}) => {

  const buttonStyle = {
    margin: "1em 1em 0 0"
  }

  return (<div style={{
    padding: "6em 0 4em 4em"
  }}>
    <h1 className="profile-info--name">{name}</h1>
    <p className="body-text">{description}</p>
    <p className="greyed-text">{location} ·
      <a href={contactLink} className="link-text"> Contact Info</a>
    </p>
    <a href={connectionsLink} className="link-text">{connectionCount} connections</a>
    <div style={{
      display: "flex",
      flexWrap: "wrap"
    }}>
      <Button sx={buttonStyle} variant="contained">Open to</Button>
      <Button sx={buttonStyle} variant="outlined">Add profile section</Button>
      <Button sx={buttonStyle} variant="outlined">More</Button>
    </div>
  </div>);
};

export default ProfileInfo;