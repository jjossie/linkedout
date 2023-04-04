import React, {useState} from 'react';
import Post from "./Post";
import {Alert, Box, Collapse, Snackbar} from "@mui/material";
import {TransitionGroup} from "react-transition-group";


const Feed = (props) => {
  const [showError, setShowError] = useState((!props.posts));

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
        <TransitionGroup>
          {props.posts?.map?.(post => {
            console.log(post);
            const key = post.createdAt + post.userId.firstName;
            return <Collapse key={key}>
              <Post key={key + "post"}
                    user={post.userId} // This one is called userId, but it's a populated user object
                    text={post.text}
                    imageUrl={post.imageUrl}
                    createdAt={post.createdAt}/>
            </Collapse>;
          })}
        </TransitionGroup>
      </Box>
    </>
  );
};
export default Feed;