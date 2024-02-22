import React from "react";
import Grid from "@mui/material/Grid";
import { CustomIconButton } from "../Home/HomeStyle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PartsTable from "./PartsTable";

const Parts = () => {
  return (
    <>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{ marginTop: "10px" }}
      >
        <Grid item>
          <div style={{ fontSize: "14px" }}>Spare Parts(8)</div>
        </Grid>
        <Grid item>
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <CustomIconButton
              variant="text"
              startIcon={<AddCircleOutlineIcon />}
            >
              Add Parts
            </CustomIconButton>
            <CustomIconButton
              variant="text"
              startIcon={<AddCircleOutlineIcon />}
            >
              Add Selected To Order Basket
            </CustomIconButton>
          </div>
        </Grid>
      </Grid>
      <div style={{width:"100%"}}>
      <PartsTable />
      </div>
    </>
  );
};

export default Parts;
