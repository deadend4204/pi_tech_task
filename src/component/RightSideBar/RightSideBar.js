import * as React from "react";
import Box from "@mui/material/Box";
import RightHeader from "../RightHeader/RightHeader";
import ActionAreaCard from "./CardComponent";

export default function RightSideBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <RightHeader />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <ActionAreaCard />
        <ActionAreaCard />
      </div>
    </Box>
  );
}
