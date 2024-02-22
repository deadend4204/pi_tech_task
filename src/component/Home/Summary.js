import React from "react";
import BoxComponent from "./BoxComponent";
import { Order } from "./HomeStyle";
import IconButton from "@mui/material/IconButton";
import LabelInput from "./LabelInput";
import Rating from "@mui/material/Rating";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SuppliesTable from "./SuppliesTable";
const Summary = () => {
  const Data = [
    { name: "Date Authorized", details: "12 Jul 2019" },
    { name: "Authorized By", details: "Jim Darren" },
    { name: "Invoice Chased Date", details: "-" },
    { name: "PO Chased Date", details: "-" },
    { name: "PO Confirmed Date", details: "-" },
    { name: "PO Ref No.", details: "-" },
  ];
  const Info = [
    {
      icon: (
        <LocationOnOutlinedIcon
          sx={{ width: "16px", height: "15px", color: "green" }}
        />
      ),
      details: "1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR",
    },
    {
      icon: (
        <LocalPhoneOutlinedIcon
          sx={{ width: "16px", height: "15px", color: "green" }}
        />
      ),
      details: "+44 (0) 141 305 1300",
    },
    {
      icon: (
        <ContactPhoneOutlinedIcon
          sx={{ width: "16px", height: "15px", color: "green" }}
        />
      ),
      details: "+44 (0) 141 305 1300",
    },
    {
      icon: (
        <EmailOutlinedIcon
          sx={{ width: "16px", height: "15px", color: "green" }}
        />
      ),
      details: "repairs@services.com",
    },
  ];
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <BoxComponent
        width={"100%"}
        height={"85px"}
        backgroundColor={"#E8ECED"}
        padding={"1px 10px 10px 20px"}
      >
        <Order>
          <LabelInput
            line
            fontSize={"13px"}
            text={"COMPONENTS"}
            fontWeight={"700"}
            color={"#020A08"}
            padding={"0px 10px 0px 0px"}
          />
          <IconButton
            sx={{
              backgroundColor: "#CDD6DB",
              width: "24px",
              height: "18px",
              fontSize: "11px",
              fontWeight: "600",
              padding: "5px 8px 5px 8px",
            }}
          >
            0
          </IconButton>
        </Order>
        <LabelInput
          fontStyle={"italic"}
          fontSize={"14px"}
          text={"No items found"}
          fontWeight={"400"}
          color={"#697E85"}
          padding={"15px 10px 0px 0px"}
        />
      </BoxComponent>
      <BoxComponent
        width={"100%"}
        height={"100%"}
        backgroundColor={"#E8ECED"}
        margin={"10px 0px 0px 0px"}
        padding={"20px 10px 20px 20px"}
      >
        <div style={{ display: "flex" }}>
          <LabelInput
            fontSize={"13px"}
            text={"AUTHORIZED SUPPLIER"}
            fontWeight={"700"}
            color={"#020A08"}
            padding={"0px 10px 0px 0px"}
          />
          <BoxComponent
            margin={"0px 0px 0px 20px"}
            padding={"5px 0px 0px 10px"}
            height={"28px"}
            width={"148px"}
            backgroundColor={"#DDE3E5"}
          >
            <LabelInput
              fontSize={"12px"}
              text={"Ref: PRJ001963SRIN"}
              fontWeight={"500"}
              color={"#020A08"}
              padding={"0px 10px 0px 0px"}
            />
          </BoxComponent>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 140px 10px 0px",
          }}
        >
          {Data.map((item, i) => (
            <div>
              <LabelInput
                text={item.name}
                fontWeight={"500"}
                fontSize={"11px"}
                color={"#697E85"}
              />
              <LabelInput
                padding={"3px 0px 0px 0px"}
                text={item.details}
                fontWeight={"500"}
                fontSize={"12px"}
                color={"#020A08"}
              />
            </div>
          ))}
        </div>
        <LabelInput
          padding={"13px 0px 0px 0px"}
          text={"Repairs (Riding Squads / Manpower)"}
          fontWeight={"500"}
          fontSize={"13px"}
          color={"#04487F"}
        />
        <Rating
          name="simple-controlled"
          style={{ padding: 0, marginTop: "5px" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        {Info.map((info, i) => (
          <div style={{ display: "flex", paddingTop: "10px" }}>
            {info.icon}
            <LabelInput
              padding={"0px 0px 0px 20px"}
              text={info.details}
              fontWeight={"500"}
              fontSize={"12px"}
              color={"#00704B"}
            />
          </div>
        ))}
      </BoxComponent>

      <BoxComponent
        width={"100%"}
        height={"100%"}
        backgroundColor={"#E8ECED"}
        margin={"10px 0px 0px 0px"}
        padding={"0px 10px 20px 20px"}
      >
        <div style={{ display: "flex" }}>
          <Order>
            <LabelInput
              line
              fontSize={"13px"}
              text={"SUPPLIERS"}
              fontWeight={"700"}
              color={"#020A08"}
              padding={"0px 10px 0px 0px"}
            />
            <IconButton
              sx={{
                backgroundColor: "#CDD6DB",
                width: "24px",
                height: "18px",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 8px 5px 8px",
              }}
            >
              2
            </IconButton>
          </Order>
        </div>

        <SuppliesTable />
      </BoxComponent>
    </div>
  );
};

export default Summary;
