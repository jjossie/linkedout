import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../Header";
import Feed from "../Feed";
import PostPrompt from "../PostPrompt";

const Main = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <Header/>
      <PostPrompt/>
      <Feed posts={info.posts} />

    </div>
  );
};

export default Main;