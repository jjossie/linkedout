import React from 'react';
import PropTypes from "prop-types";

const PostMediaButton = ({icon, text, color}) => {
  const style = {
    all: "unset",
    display: "flex",
    alignItems: "center",
    padding: "0.25em"
  };
  const spanStyle = {
    padding: "0.25em"
  }
  return (
    <a href="/" style={style}>
      {icon({size: 32, color: color})}
      <span style={spanStyle}>{text}</span>
    </a>
  );
};

PostMediaButton.propTypes = {
  // children: PropTypes.element.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default PostMediaButton;