import React, {useState} from 'react';
import {Box} from "@mui/material";
import PostPrompt from "./PostPrompt";
import Feed from "./Feed";

const FeedInteractive = ({posts}) => {

  const [postList, setPostList] = useState(posts);

  const onPostCreated = (newPost) => {
    setPostList(old => [newPost, ...old]);
  }

  return (
    <Box>
      <PostPrompt onPostCreated={onPostCreated}/>
      <Feed posts={postList}/>
    </Box>
  );
};

export default FeedInteractive;