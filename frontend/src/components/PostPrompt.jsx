import React, {useContext, useState} from 'react';
import {Box, Button, Card, TextField} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import {loggedInFetch} from "../utils/fetch";
import {UserContext} from "../services/UserContext";
import AvatarImage from "./AvatarImage";

const PostPrompt = ({onPostCreated}) => {

  const [postText, setPostText] = useState("");
  const loggedInUser = useContext(UserContext);

  const handleCreatePost = async () => {
    const result = await loggedInFetch("/post", "POST", {
      text: postText
    }).then(res => res.json());
    console.log(result);
    onPostCreated(result);
  }

  const subContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: "1em 3em",
    gap: "1em"
  }
  return (
    <Card>
      <Box style={subContainerStyle}>
        <AvatarImage user={loggedInUser}/>
        <TextField id="post-prompt"
                   label="Write a post"
                   variant="outlined"
                   sx={{flexGrow: 1}}
                   size="small"
                   onChange={e => setPostText(e.target.value)}
                   multiline
        >{postText}</TextField>
        <Button variant="contained" onClick={handleCreatePost} size="large">
          <SendIcon h={2}/>
        </Button>
      </Box>
    </Card>
  );
}


export default PostPrompt;