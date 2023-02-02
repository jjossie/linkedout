import React from 'react';
import InputTextField from "./InputTextField";
import PostMediaButton from "./PostMediaButton";
import {RiVideoLine, RiArticleLine} from "react-icons/ri";
import {RiCalendar2Line} from "react-icons/ri";
import {HiOutlinePhotograph} from "react-icons/hi";
import {Avatar} from "@mui/material";

import pfp from "../images/pfp.png";

const PostPrompt = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1em 4em"
  }
  const avatarStyle = {

  }
  return (
    <div className="post-prompt">
      <div style={style}>
        <Avatar src={pfp} sx={avatarStyle}/>
        <InputTextField name="newPostInputText" placeholder="Write a post"/>
      </div>
      <div style={style}>
        <PostMediaButton icon={HiOutlinePhotograph} text="Photo" color="dodgerblue"/>
        <PostMediaButton icon={RiVideoLine} text="Video" color="mediumseagreen"/>
        <PostMediaButton icon={RiCalendar2Line} text="Event" color="peru"/>
        <PostMediaButton icon={RiArticleLine} text="Write article" color="tomato"/>
      </div>
    </div>
  );
}


export default PostPrompt;