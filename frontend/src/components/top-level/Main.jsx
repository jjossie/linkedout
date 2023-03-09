import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import Feed from "../Feed";
import PostPrompt from "../PostPrompt";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import SidePanel from "../containers/LeftPanel";
import SuggestedConnections from "../SuggestedConnections";

const Main = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <SidePanel/>
        <CenterPanel>
          <PostPrompt/>
          <Feed posts={info?.posts}/>
        </CenterPanel>
        <SidePanel>
          <SuggestedConnections/>
        </SidePanel>
      </MainPanelContainer>
    </div>
  );
};

export default Main;