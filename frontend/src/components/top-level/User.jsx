import React from 'react';
import Header from "../containers/Header";
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Feed from "../Feed";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";

const User = () => {
  const {user, posts} = useLoaderData();
  const fullName = (user)? user.firstName + " " + user.lastName : "Danny Default";

  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          <ProfileHeader name={fullName}/>
        <Feed posts={posts}/>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default User;