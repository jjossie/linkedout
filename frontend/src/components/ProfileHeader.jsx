import React from 'react';
import BackgroundImage from "./BackgroundImage";
import AvatarImage from "./AvatarImage";
import {Avatar} from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import RecentExperience from "./RecentExperience";

import vanguardImg from "../images/vanguard.jpeg";
import byuiImg from "../images/byui.jpeg";

import pfp from "../images/pfp.png"

const ProfileHeader = () => {
  const experienceItems = [
    {name: "Vanguard", image: vanguardImg},
    {name: "BYU-Idaho", image: byuiImg}
  ];
  const avatarStyle = {
    height: "12em",
    width: "12em",
  }
  return (<div className="profile-header">
    <BackgroundImage/>
    <Avatar id="profile-header-avatar" src={pfp} sx={avatarStyle}/>
    <ProfileInfo
      name="Joseph Mother"
      description="Ask me what my nickname is 👀"
      location="Rexburg, Idaho, United States"
      contactLink="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwithZePiuL8AhX7hIkEHS5WBOcQwqsBegQIDRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
      connectionsLink="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwithZePiuL8AhX7hIkEHS5WBOcQwqsBegQIDRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
    />
    <RecentExperience experienceItems={experienceItems}/>
  </div>);
}

export default ProfileHeader;