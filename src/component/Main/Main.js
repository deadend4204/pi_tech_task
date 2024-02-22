import React from "react";
import RightSideBar from "../RightSideBar/RightSideBar";
import Sidebar from "../Sidebar/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import {
  LeftSideContainer,
  MainContainer,
  RightSideContainer,
} from "./MainStyles";

const Main = () => {
  return (
    <MainContainer>
      <LeftSideContainer>
        <CssBaseline />
        <Sidebar />
      </LeftSideContainer>
      <RightSideContainer>
        <RightSideBar />
      </RightSideContainer>
    </MainContainer>
  );
};

export default Main;
