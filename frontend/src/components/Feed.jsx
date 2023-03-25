import React, {useState} from 'react';
import Post from "./Post";
import {Alert, Box, Snackbar} from "@mui/material";


const Feed = (props) => {
  const postComponents = [];

  const [showError, setShowError] = useState((!props.posts));

  if (props.posts) {
    props.posts.map?.(post => {
      console.log(post);
      postComponents.push(
        <Post key={post.createdAt + post.userId.firstName}
              username={post.userId.firstName + " " + post.userId.lastName}
              content={post.text}
              date={post.createdAt}/>
      );
    });
  }

  const feedStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
       <Snackbar
         open={showError}
         autoHideDuration={3000}
         onClose={() => setShowError(false)}
         anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
         <Alert severity="error">Couldn't load feed</Alert>
       </Snackbar>
      <Box sx={feedStyle}>
        {postComponents}
      </Box>
    </>
  );
};
export default Feed;