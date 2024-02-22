import React from "react";
import BoxComponent from "./BoxComponent";
import { Clean, LabelClean } from "./HomeStyle";
import LabelInput from "./LabelInput";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Balcony from "@mui/icons-material/Balcony";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PrintIcon from "@mui/icons-material/Print";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import CustomTabPanels from "./CustomTabPanel";
const OrderDetails = () => {
  return (
    <div>
      <BoxComponent
        backgroundColor={"#F5F5F5"}
        shadow={"0px 1px 8px 0px #0000001F"}
        width={"100%"}
        height={"100%"}
        radius={"16px"}
        border
      >
        <BoxComponent
          backgroundColor={"#E8ECED"}
          width={"100%"}
          height={"114px"}
          padding={"24px 20px 24px 20px"}
          border={"0px 0px 1px solid black 0px"}
          radius={"0px"}
        >
          <div>
            <LabelClean>
              <div style={{ display: "flex" }}>
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
                <LabelInput
                  padding={"3px 0px 0px 10px"}
                  text={"4907 - 00019"}
                  fontWeight={"600"}
                  fontSize={"14px"}
                  color={"#020A08"}
                />
                <LabelInput
                  padding={"3px 0px 0px 10px"}
                  text={"HOTEL/TECH WORK SQUAD GFR"}
                  fontWeight={"700"}
                  fontSize={"14px"}
                  color={"#020A08"}
                />
              </div>
              <div>
                <BoxComponent
                  margin={"10px 0px 0px 0px"}
                  radius={"5px"}
                  fontSize={"12px"}
                  width={"114px"}
                  height={"28px"}
                  backgroundColor={"#80E7FF"}
                  padding={"6px 12px 0px 8px"}
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
            </LabelClean>

            <LabelClean>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <LabelInput
                    text={"Date Requested"}
                    fontWeight={"500"}
                    fontSize={"11px"}
                    color={"#697E85"}
                  />
                  <LabelInput
                    padding={"3px 0px 0px 0px"}
                    text={"12 Jul 2019"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"#020A08"}
                  />
                </div>

                <div>
                  <LabelInput
                    text={"Type"}
                    fontWeight={"500"}
                    fontSize={"11px"}
                    color={"#697E85"}
                    margin={"0px 0px 0px 20px"}
                  />
                  <LabelInput
                    padding={"3px 0px 0px 20px"}
                    text={"Services"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"#020A08"}
                  />
                </div>
                <div>
                  <LabelInput
                    text={"Account code"}
                    fontWeight={"500"}
                    fontSize={"11px"}
                    color={"#697E85"}
                    margin={"0px 0px 0px 20px"}
                  />
                  <LabelInput
                    padding={"3px 0px 0px 20px"}
                    text={"5830042 - HM PAX ACCOMODATION (LABOUR)"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                    color={"#020A08"}
                  />
                </div>
              </div>
              <div>
                <Clean>
                  <LabelInput
                    text={"Order summary"}
                    color={"#00704B"}
                    fontSize={"12px"}
                    textDecoration={"underline"}
                    margin={"0px 16px 0px 0px"}
                  />
                  <LabelInput
                    text={"Order Progress"}
                    color={"#00704B"}
                    fontSize={"12px"}
                    textDecoration={"underline"}
                  />
                </Clean>
              </div>
            </LabelClean>

            <LabelClean>
              <div></div>
            </LabelClean>
          </div>
        </BoxComponent>

        <BoxComponent
          backgroundColor={"#F5F5F5"}
          display={"flex"}
          borderStyle={"solid"}
          radius={"0px"}
          height={"40px"}
          width={"100%"}
          borderColor={"#CDD6DB"}
          padding={"8px 20px 8px 20px"}
          border={"1px 0px 1px 0px"}
        >
          <div style={{ display: "flex" }}>
            <SaveAsIcon
              sx={{ width: "22px", height: "22px", color: "#00704B" }}
            />
            <LabelInput
              text={"Edit Order Details"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "32px" }}>
            <PrintIcon
              sx={{ width: "22px", height: "22px", color: "#00704B" }}
            />
            <LabelInput
              text={"Print Order Details"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "32px" }}>
            <FileOpenIcon
              sx={{ width: "22px", height: "22px", color: "#00704B" }}
            />
            <LabelInput
              text={"Change Delivery Status"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "32px" }}>
            <FindInPageIcon
              sx={{ width: "22px", height: "22px", color: "#00704B" }}
            />
            <LabelInput
              text={"Reports"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "32px" }}>
            <TouchAppIcon
              sx={{ width: "22px", height: "22px", color: "#00704B" }}
            />
            <LabelInput
              text={"Actions"}
              color={"#00704B"}
              fontSize={"12px"}
              textDecoration={"underline"}
              padding={"2px 0px 0px 10px"}
            />
          </div>
        </BoxComponent>

        <CustomTabPanels />
      </BoxComponent>
    </div>
  );
};

export default OrderDetails;
