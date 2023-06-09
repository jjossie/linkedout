import React from 'react';
import Header from "../containers/Header";
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Feed from "../Feed";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";
import PostPrompt from "../PostPrompt";
import {UserContext} from "../../services/UserContext";

const User = () => {
  const {user, posts, specifiedUser} = useLoaderData();
  const name = (specifiedUser)? specifiedUser.firstName + " " + specifiedUser.lastName : "Danny Default";

  return (
    <UserContext.Provider value={user}>
      <Header/>
      <Grid2 container py={12} px={2}>
        <Grid2 laptop={1} mobile={0}></Grid2>
        <Grid2 container laptop={10} mobile={12}>
          <Grid2 laptop={8} tablet={10} mobile={12}>
            <Stack p={2} spacing={4}>
              <ProfileHeader user={specifiedUser}/>
              <PostPrompt/>
              {posts && <Feed posts={posts}/>}
            </Stack>
          </Grid2>
        </Grid2>
      </Grid2>
    </UserContext.Provider>
  );
};

export default User;