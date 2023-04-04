import React from 'react';
import {Card, Divider} from "@mui/material";
import UserNameAvatar from "./UserNameAvatar";
import TimeAgo from 'javascript-time-ago';
// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en';


const Post = ({
  user,
  createdAt,
  text,
  imageUrl,
}) => {


  // Add locale-specific relative date/time formatting rules.
  TimeAgo.addLocale(en);

  // Create relative date/time formatter.
  const timeAgo = new TimeAgo('en-US');
  const timeAgoMessage = timeAgo.format(new Date(createdAt));

  return (
    <Card style={{
      margin: "2em 0 0 0",
      padding: "2em 3em"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 0 1em 0",
        gap: "16px"
      }}>
        <UserNameAvatar user={user}/>
        <em>{timeAgoMessage}</em>
      </div>
      <Divider/>
      <p>{text}</p>
      {imageUrl && <img src={imageUrl} alt={text} style={{
        width: "100%"
      }}/>}
    </Card>
  );
};

export default Post;