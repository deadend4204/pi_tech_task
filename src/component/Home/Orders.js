import React from "react";
import BoxComponent from "./BoxComponent";
import LabelInput from "./LabelInput";
import { LabelClean} from "./HomeStyle";
import AnchorIcon from "@mui/icons-material/Anchor";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Balcony from "@mui/icons-material/Balcony";
const Orders = () => {
  return (
    <>
      <BoxComponent
        hover
        width={"430px"}
        height={"102px"}
        margin={"15px 0px 0px 0px"}
        padding={"12px 16px 12px 16px"}
      >
        <LabelClean>
          <div>
            <LabelInput
              text={"4907 - 00019"}
              fontWeight={"700"}
              fontSize={"12px"}
              color={"#052E2B"}
            />
            <LabelInput
              padding={"5px 0px 0px 0px"}
              text={"HOTEL/TECH WORK SQUAD GFR"}
              fontWeight={"700"}
              fontSize={"12px"}
              color={"#052E2B"}
            />
            <BoxComponent
              margin={"10px 0px 0px 0px"}
              radius={"5px"}
              fontSize={"12px"}
              width={"114px"}
              height={"28px"}
              backgroundColor={"#80E7FF"}
              padding={"6px 12px 6px 8px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Balcony
                sx={{ width: "11px", height: "12px", color: "#04487F" }}
              />{" "}
              <LabelInput
                fontSize={"12px"}
                text={"Lorem ipsum"}
                padding={"0px 0px 0px 5px"}
              />
            </BoxComponent>
          </div>
          <div style={{}}>
            <IconButton>
              <AnchorIcon sx={{ width: "22px", height: "22px" }} />
            </IconButton>
            <IconButton>
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  fontSize: "12px",
                  width: "22px",
                  height: "22px",
                }}
              >
                N
              </Avatar>
            </IconButton>

            <LabelInput
              text={"Services"}
              fontWeight={"500"}
              fontSize={"12px"}
              color={"#697E85"}
              margin={"0px 0px 0px 12px"}
            />
            <LabelInput
              padding={"5px 0px 0px 0px"}
              text={"12 Jul 2019"}
              fontWeight={"500"}
              fontSize={"12px"}
              color={"#697E85"}
            />
          </div>
        </LabelClean>
      </BoxComponent>
    </>
  );
};

export default Orders;
