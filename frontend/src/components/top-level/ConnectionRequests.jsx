import React from 'react';
import Header from "../containers/Header";
import {useLoaderData} from "react-router-dom";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";
import ConnectionRequestList from "../ConnectionRequestList";
import {UserContext} from "../../services/UserContext";
import {Box} from "@mui/material";

const ConnectionRequests = () => {
  const {connectionRequests, user} = useLoaderData();


  return (
      <UserContext.Provider value={user}>
        <Box>
          <Header/>
          <MainPanelContainer>
            <LeftPanel/>
            <CenterPanel>
              <ConnectionRequestList connectionRequests={connectionRequests}/>
            </CenterPanel>
          </MainPanelContainer>
        </Box>
      </UserContext.Provider>
  );
};

export default ConnectionRequests;