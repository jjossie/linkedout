import React from 'react';
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import PostPrompt from "../PostPrompt";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";

const Profile = (props) => {
  const info = useLoaderData();
  // const fullName = info.loggedInUser.firstName + " " + info.loggedInUser.lastName;
  const fullName = "billy bob";
  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          <ProfileHeader name={fullName}/>
          <PostPrompt/>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default Profile;