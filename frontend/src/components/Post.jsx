import React from 'react';
import {Card, Divider} from "@mui/material";
import UserNameAvatar from "./UserNameAvatar";

const Post = ({
  user,
  createdAt,
  text,
}) => {

  return (
    <Card style={{
      margin: "2em 0 0 0",
      padding: "2em 3em"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px"
      }}>
        <UserNameAvatar userId={user._id} firstName={user.firstName} lastName={user.lastName} />
        <em>{createdAt}</em>
      </div>
      <Divider/>
      <p>{text}</p>
    </Card>
  );
};

// Post.propTypes = {
//   username: String,
//   date: String,
//   content: String
// };

export default Post;