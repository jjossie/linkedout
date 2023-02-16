import React from 'react';
import {Avatar, Button, Card, TextField} from "@mui/material";
import pfp from "../../images/pfp.png";
import {IoIosSearch} from "react-icons/io";

import {Link} from "react-router-dom";

const Header = (props) => {

  const avatarStyle = {};
  const linkStyle = {all: "unset"};

  // const userId = props.loggedInUser.id;
  const userId = "63dbfc0d187fe1e57908cf8d";

  return (
    <Card sx={{
      width: "100vw",
      position: "fixed",
      top: "0",
      padding: '0.5em',
      zIndex: "10",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5em",
        }}>
          <IoIosSearch
            size="2em"
            sx={{
              color: 'action.active',
              mr: 1,
              my: 0.5,
            }}/>
          <TextField id="input-with-sx" label="Search" variant="standard"/>
        </div>
        <div style={{
          display: "flex",
          gap: "0.5em",
        }}>
          <Link style={linkStyle} key="feed" to="/">
            <Button variant="text">Feed</Button>
          </Link>
          <Link style={linkStyle} key="profile" to="/profile">
            <Button variant="text">Profile</Button>
          </Link>
          <Link style={linkStyle} key="user" to={`/user/${userId}`}>
            <Button variant="text">User</Button>
          </Link>
          <Link style={linkStyle} key="connectionRequests" to="/connectionRequests">
            <Button variant="text">Connection Requests</Button>
          </Link>
          <Link style={linkStyle} key="profileAvatar" to="/profile">
            <Avatar id="header-avatar" src={pfp} sx={avatarStyle}/>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Header;