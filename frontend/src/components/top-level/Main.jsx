import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../containers/Header";
import Feed from "../Feed";
import PostPrompt from "../PostPrompt";
import MainContentContainer from "../containers/MainContentContainer";

const Main = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <Header />
      <MainContentContainer>
        <PostPrompt/>
        <Feed posts={info.posts}/>
      </MainContentContainer>
    </div>
  );
};

export default Main;