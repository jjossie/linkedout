import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import Feed from "../Feed";
import PostPrompt from "../PostPrompt";
import SuggestedConnections from "../SuggestedConnections";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";

const Main = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <Header/>
      <Grid2 container p={12}>
        <Grid2 laptop={2} mobile={0}></Grid2>
        <Grid2 container laptop={10} mobile={12}>
          <Grid2 laptop={7} tablet={10} mobile={12}>
            <Stack p={2}>
              <PostPrompt/>
              <Feed posts={info?.posts}/>
            </Stack>
          </Grid2>
          <Grid2 laptop={5} p={2} tablet={10} mobile={12}>
            <SuggestedConnections/>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Main;