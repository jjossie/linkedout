import React from 'react';
import ProfileHeader from "../ProfileHeader";
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Stack} from "@mui/material";
import SuggestedConnections from "../SuggestedConnections";
import FeedInteractive from "../FeedInteractive";
import {UserContext} from "../../services/UserContext";

const Profile = (props) => {
  const {user, connectionUserIds, posts} = useLoaderData();

  return (
    <UserContext.Provider value={user}>
      <Box>
        <Header/>
        <Grid2 container py={12} px={2}>
          <Grid2 laptop={1} mobile={0}></Grid2>
          <Grid2 container laptop={10} mobile={12}>
            <Grid2 laptop={8} tablet={10} mobile={12}>
              <Stack p={2} spacing={4}>
                <ProfileHeader user={user} connectionUserIds={connectionUserIds}/>
                <FeedInteractive posts={posts}/>
              </Stack>
            </Grid2>
            <Grid2 laptop={4} p={2} tablet={10} mobile={12}>
              <SuggestedConnections/>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </UserContext.Provider>
  );
};

export default Profile;