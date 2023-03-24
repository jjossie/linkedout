import React from 'react';
import Header from "../containers/Header";
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Feed from "../Feed";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";
import PostPrompt from "../PostPrompt";

const User = () => {
  const {user, posts} = useLoaderData();
  const name = (user)? user.firstName + " " + user.lastName : "Danny Default";

  return (
    <>
      <Header/>
      <Grid2 container py={12} px={2}>
        <Grid2 laptop={1} mobile={0}></Grid2>
        <Grid2 container laptop={10} mobile={12}>
          <Grid2 laptop={8} tablet={10} mobile={12}>
            <Stack p={2} spacing={4}>
              <ProfileHeader name={name}/>
              <PostPrompt/>
              {posts && <Feed posts={posts}/>}
            </Stack>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default User;