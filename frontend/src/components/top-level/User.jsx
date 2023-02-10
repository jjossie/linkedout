import React from 'react';
import Header from "../containers/Header";
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Feed from "../Feed";
import MainContentContainer from "../containers/MainContentContainer";

const User = () => {
  const {user, posts} = useLoaderData();
  const fullName = user.firstName + " " + user.lastName;

  return (
    <div>
      <Header/>
      <MainContentContainer><ProfileHeader name={fullName}/>
        <Feed posts={posts}/></MainContentContainer>
    </div>
  );
};

export default User;