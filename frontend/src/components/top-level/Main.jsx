import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import Feed from "../Feed";
import PostPrompt from "../PostPrompt";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";

const Main = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          <PostPrompt/>
          <Feed posts={info?.posts}/>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default Main;