import React from 'react';
import Button from "./Button";

const ProfileInfo = (props) => {
  return (<div className="profile-info">
    <h1 className="profile-info--name">{props.name}</h1>
    <p className="body-text">{props.description}</p>
    <p className="greyed-text">{props.location} ·
      <a href={props.contactLink} className="link-text"> Contact Info</a>
    </p>
    <a href={props.connectionsLink} className="link-text">500+ connections</a>
    <div className="profile-info--button-container">
      <Button filled={true} text="Open to"/>
      <Button text="Add profile section"/>
      <Button greyed={false} text="More"/>
    </div>
  </div>);
};

export default ProfileInfo;