import React, {useCallback, useContext} from 'react';
import {Button, Card, TextField} from "@mui/material";
import {IoIosSearch} from "react-icons/io";

import {Link, useNavigate} from "react-router-dom";
import {clearToken} from "../../utils/storage";
import {UserContext} from "../../services/UserContext";
import AvatarImage from "../AvatarImage";

const Header = (props) => {

  const avatarStyle = {};
  const linkStyle = {all: "unset"};

  const navigate = useNavigate();
  const user = useContext(UserContext);

  const handleLogout = useCallback(() => {
    clearToken();
    navigate("/login");
  }, [])

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
          <Link style={linkStyle} key="connectionRequests" to="/connectionRequests">
            <Button variant="text">Connection Requests</Button>
          </Link>
          <Link style={linkStyle} key="profileAvatar" to="/profile">
            <AvatarImage user={user}/>
          </Link>
          <Button variant="text" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </Card>
  );
};

export default Header;