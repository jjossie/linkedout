import React from 'react';
import InputTextField from "./InputTextField";
import PostMediaButton from "./PostMediaButton";
import {RiArticleLine, RiCalendar2Line, RiVideoLine} from "react-icons/ri";
import {HiOutlinePhotograph} from "react-icons/hi";
import {Avatar, Card} from "@mui/material";

import pfp from "../images/pfp.png";

const PostPrompt = () => {
  const subContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1em 4em",
    gap: "1em"
  }
  const avatarStyle = {}
  return (
    <Card>
      <div style={subContainerStyle}>
        <Avatar src={pfp} sx={avatarStyle}/>
        <InputTextField name="newPostInputText" placeholder="Write a post"/>
      </div>
      <div style={subContainerStyle}>
        <PostMediaButton icon={HiOutlinePhotograph} text="Photo" color="dodgerblue"/>
        <PostMediaButton icon={RiVideoLine} text="Video" color="mediumseagreen"/>
        <PostMediaButton icon={RiCalendar2Line} text="Event" color="peru"/>
        <PostMediaButton icon={RiArticleLine} text="Write article" color="tomato"/>
      </div>
    </Card>
  );
}


export default PostPrompt;