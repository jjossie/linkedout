import React from 'react';
import {Avatar, Card, Divider} from "@mui/material";
import pfp from "../images/pfp.png";

const Post = props => {

  return (
    <Card style={{
      margin: "16px",
      padding: "16px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px"
      }}>
        <Avatar id="post-avatar-image" src={pfp}/>
        <h4>{props.username}</h4>
        <em>{props.date}</em>
      </div>
      <Divider/>
      <p>{props.content}</p>
    </Card>
  );
};

// Post.propTypes = {
//   username: String,
//   date: String,
//   content: String
// };

export default Post;