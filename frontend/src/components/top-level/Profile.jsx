import React from 'react';
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import PostPrompt from "../PostPrompt";
import MainContentContainer from "../containers/MainContentContainer";

const Profile = (props) => {
  const info = useLoaderData();
  const fullName = info.loggedInUser.firstName + " " + info.loggedInUser.lastName;
  return (
    <div>
      <Header/>
      <MainContentContainer>
        <ProfileHeader name={fullName}/>
        <PostPrompt/>
      </MainContentContainer>
    </div>
  );
};

export default Profile;