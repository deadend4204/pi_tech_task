import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
}));

export const LeftSideContainer = styled("div")(() => ({
  width: "70%",
}));

export const RightSideContainer = styled("div")(() => ({
  width: "30%",
  padding: "10px 30px",
  background: "#E8ECED",
  height: "100vh",
}));
