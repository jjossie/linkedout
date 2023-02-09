import React from 'react';
import Post from "./Post";
import {Box} from "@mui/material";


const Feed = props => {
  const postComponents = [];

  props.posts.map(post => {
    console.log(post);
    postComponents.push(
      <Post key={post.createdAt + post.userId.firstName}
            username={post.userId.firstName + " " + post.userId.lastName}
            content={post.content}
            date={post.createdAt}/>
    );
  });

  const feedStyle = {
    display: "flex",
    flexDirection: "column",
    width: "75%"
  }

  return (

    <Box sx={feedStyle}>
      {postComponents}
    </Box>
  );
};
export default Feed;