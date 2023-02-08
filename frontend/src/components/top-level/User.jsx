import React from 'react';
import Header from "../Header";
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Feed from "../Feed";

const User = () => {
  const {user, posts} = useLoaderData();
  const fullName = user.firstName + " " + user.lastName;

  return (
    <div>
      <Header/>
      <ProfileHeader name={fullName}/>
      <Feed posts={posts}/>
    </div>
  );
};

export default User;