import React from 'react';
import BackgroundImage from "./BackgroundImage";
import {Avatar, Card} from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import RecentExperience from "./RecentExperience";

import vanguardImg from "../images/vanguard.jpeg";
import byuiImg from "../images/byui.jpeg";

import pfp from "../images/pfp.png";

const ProfileHeader = ({
  user,
  connectionUserIds,
}) => {
  const containerStyle = {
    position: "relative"
  };
  const experienceItems = [
    {name: "Vanguard", image: vanguardImg},
    {name: "BYU-Idaho", image: byuiImg}
  ];
  const avatarStyle = {
    height: "12em",
    width: "12em",
    position: "absolute",
    left: "3em",
    top: "12em",
    float: "left"
  }

  const name = `${user.firstName} ${user.lastName}`;

  return (<Card sx={containerStyle}>
      <BackgroundImage/>
      <Avatar id="profile-header-avatar" src={pfp} sx={avatarStyle}/>
      <div style={{
        display: "flex", flexDirection: "row", alignItems: "start",
      }}>
        <ProfileInfo
          name={name ?? "Danny Default"}
          description={user.bio ?? "User Description because there's none in the DB"}
          location="Rexburg, Idaho, United States"
          contactLink="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwithZePiuL8AhX7hIkEHS5WBOcQwqsBegQIDRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
          connectionsLink="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwithZePiuL8AhX7hIkEHS5WBOcQwqsBegQIDRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
          connectionCount={connectionUserIds?.length ?? 500}
        />
        <RecentExperience experienceItems={experienceItems}/>
      </div>
    </Card>);
}

export default ProfileHeader;