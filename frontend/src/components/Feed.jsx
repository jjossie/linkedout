import React from 'react';
import Post from "./Post";
import {Alert, Box, Snackbar} from "@mui/material";


const Feed = props => {
  const postComponents = [];

  if (!props.posts) {
    return (<Snackbar
      open={true}
      autoHideDuration={2000}
      anchorOrigin={{vertical: "top", horizontal: "center"}}>
      <Alert severity="error">Couldn't load feed</Alert>
    </Snackbar>);
  } else {
    props.posts.map?.(post => {
      console.log(post);
      postComponents.push(
        <Post key={post.createdAt + post.userId.firstName}
              username={post.userId.firstName + " " + post.userId.lastName}
              content={post.content}
              date={post.createdAt}/>
      );
    });
  }

  const feedStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (

    <Box sx={feedStyle}>
      {postComponents}
    </Box>
  );
};
export default Feed;