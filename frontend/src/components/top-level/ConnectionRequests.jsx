import React from 'react';
import Header from "../containers/Header";
import {useLoaderData} from "react-router-dom";
import ConnectionRequest from "../ConnectionRequest";
import MainPanelContainer from "../containers/MainPanelContainer";
import CenterPanel from "../containers/CenterPanel";
import LeftPanel from "../containers/LeftPanel";
import Container from "@mui/material/Container";

const ConnectionRequests = () => {

  const connectionRequests = useLoaderData();

  return (
    <div>
      <Header/>
      <MainPanelContainer>
        <LeftPanel/>
        <CenterPanel>
          <Container sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em"
          }}>
            {connectionRequests?.map?.(conReq => {
              return <ConnectionRequest
                firstName={conReq.firstName}
                lastName={conReq.lastName}
                userId={conReq.userId}
                key={conReq.userId}
              />;
            })}
          </Container>
        </CenterPanel>
      </MainPanelContainer>
    </div>
  );
};

export default ConnectionRequests;