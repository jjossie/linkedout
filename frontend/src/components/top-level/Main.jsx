import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import SuggestedConnections from "../SuggestedConnections";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Stack} from "@mui/material";
import FeedInteractive from "../FeedInteractive";
import {UserContext} from "../../services/UserContext";

const Main = () => {
  const info = useLoaderData();
  return (
    <UserContext.Provider value={info.user}>
      <Box>
        <Header/>
        <Grid2 container p={12}>
          <Grid2 laptop={2} mobile={0}></Grid2>
          <Grid2 container laptop={10} mobile={12}>
            <Grid2 laptop={7} tablet={10} mobile={12}>
              <Stack p={2}>
                <FeedInteractive posts={info?.posts}/>
              </Stack>
            </Grid2>
            <Grid2 laptop={5} p={2} tablet={10} mobile={12}>
              <SuggestedConnections/>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </UserContext.Provider>
  );
};

export default Main;