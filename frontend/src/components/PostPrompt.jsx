import React, {useState} from 'react';
import PostMediaButton from "./PostMediaButton";
import {RiArticleLine, RiCalendar2Line, RiVideoLine} from "react-icons/ri";
import {HiOutlinePhotograph} from "react-icons/hi";
import {Avatar, Box, Button, Card, TextField} from "@mui/material";

import pfp from "../images/pfp.png";
import SendIcon from "@mui/icons-material/Send";
import {loggedInFetch} from "../utils/fetch";

const PostPrompt = ({onPostCreated}) => {

  const [postText, setPostText] = useState("");

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
    padding: "1em 4em",
    gap: "1em"
  }
  const avatarStyle = {}
  return (
    <Card>
      <Box style={subContainerStyle}>
        <Avatar src={pfp} sx={avatarStyle}/>
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
      <div style={subContainerStyle}>
        <PostMediaButton key="Photo" icon={HiOutlinePhotograph} text="Photo" color="dodgerblue"/>
        <PostMediaButton key="Video" icon={RiVideoLine} text="Video" color="mediumseagreen"/>
        <PostMediaButton key="Event" icon={RiCalendar2Line} text="Event" color="peru"/>
        <PostMediaButton key="Write" icon={RiArticleLine} text="Write article" color="tomato"/>
      </div>
    </Card>
  );
}


export default PostPrompt;