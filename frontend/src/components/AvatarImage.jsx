import React from 'react';
import pfp from "../images/pfp.png";
import PropTypes from "prop-types";

const AvatarImage = ({size}) => {
  return (
    <div className="avatar-image" style={{
      width: size + "em",
      height: size + "em",
    }}>
      <img src={pfp} alt="profile"/>
    </div>
  );
};

AvatarImage.propTypes = {
  size: PropTypes.number.isRequired
}

export default AvatarImage;