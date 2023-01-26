import React from 'react';
import BackgroundImage from "./BackgroundImage";
import AvatarImage from "./AvatarImage";
import ProfileInfo from "./ProfileInfo";
import RecentExperience from "./RecentExperience";

import vanguardImg from "../images/vanguard.jpeg";
import byuiImg from "../images/byui.jpeg";

const ProfileHeader = () => {
  const experienceItems = [
    {name: "Vanguard", image: vanguardImg},
    {name: "BYU-Idaho", image: byuiImg}
  ]
  return (<div className="profile-header">
    <BackgroundImage/>
    <AvatarImage size={12}/>
    <ProfileInfo
      name="Layne Moseley"
      description="🍪"
      location="Pleasant Grove, Utah, United States"
      contactLink="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwithZePiuL8AhX7hIkEHS5WBOcQwqsBegQIDRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
      connectionsLink="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwithZePiuL8AhX7hIkEHS5WBOcQwqsBegQIDRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
    />
    <RecentExperience experienceItems={experienceItems}/>
  </div>);
}

export default ProfileHeader;