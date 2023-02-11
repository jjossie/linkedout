import React from 'react';
import {Button} from "@mui/material";
// import Button from "./Button";

const ProfileInfo = (props) => {

  const buttonStyle = {
    margin: "1em 1em 0 0"
  }

  return (<div style={{
    padding: "6em 0 4em 4em"
  }}>
    <h1 className="profile-info--name">{props.name}</h1>
    <p className="body-text">{props.description}</p>
    <p className="greyed-text">{props.location} ·
      <a href={props.contactLink} className="link-text"> Contact Info</a>
    </p>
    <a href={props.connectionsLink} className="link-text">500+ connections</a>
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