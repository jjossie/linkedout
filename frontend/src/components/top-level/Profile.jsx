import React from 'react';
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Header from "../Header";
import PostPrompt from "../PostPrompt";

const Profile = (props) => {
  const info = useLoaderData();
  const fullName = info.loggedInUser.firstName + " " + info.loggedInUser.lastName;
  return (
    <div>
      <Header/>
      <ProfileHeader name={fullName}/>
      <PostPrompt/>
    </div>
  );
};

export default Profile;