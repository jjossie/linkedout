import React from 'react'
import AvatarImage from "./AvatarImage";
import InputTextField from "./InputTextField";
import PostMediaButton from "./PostMediaButton";
import {RiVideoLine, RiArticleLine} from "react-icons/ri";
import {RiCalendar2Line} from "react-icons/ri";
import {HiOutlinePhotograph} from "react-icons/hi";

const PostPrompt = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1em 4em"
  }
  return (
    <div className="post-prompt">
      <div style={style}>
        <AvatarImage size={4}/>
        <InputTextField name="newPostInputText" placeholder="Write a post"/>
      </div>
      <div style={style}>
        <PostMediaButton icon={HiOutlinePhotograph} text="Photo" color="dodgerblue">
        </PostMediaButton>
        <PostMediaButton icon={RiVideoLine} text="Video" color="mediumseagreen">
        </PostMediaButton>
        <PostMediaButton icon={RiCalendar2Line} text="Event" color="peru">
        </PostMediaButton>
        <PostMediaButton icon={RiArticleLine} text="Write article" color="tomato">
        </PostMediaButton>
      </div>
    </div>
  );
}


export default PostPrompt;