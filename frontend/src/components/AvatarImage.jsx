import React from 'react';
import pfp from "../images/pfp.png";

const AvatarImage = () => {
  return (
    <div className="avatar-image">
      <img src={pfp} alt="profile"/>
    </div>
  );
};

export default AvatarImage;