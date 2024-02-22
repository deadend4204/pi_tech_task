import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import {
  Header,
  Icon,
  PO,
  Responsibility,
  Search,
  Text,
  Code,
  Company,
  Label,
  Clean,
  Order,
} from "./HomeStyle";
import IconButton from "@mui/material/IconButton";
import BalconyIcon from "@mui/icons-material/Balcony";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import LabelInput from "./LabelInput";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={5} xl={3} md={6}>
          <Responsibility>
            <Header>
              <Search>
                <IconButton>
                  <BalconyIcon sx={{ width: "15.8px", height: "16px" }} />
                </IconButton>
                <Text>My Responsibilities</Text>
                <IconButton>
                  <SearchIcon sx={{ width: "15.8px", height: "16px" }} />
                </IconButton>
              </Search>
              <PO>
                <IconButton>
                  <Text>PO</Text>
                </IconButton>
                <IconButton>
                  <KeyboardArrowDownIcon
                    sx={{ width: "15.8px", height: "16px" }}
                  />
                </IconButton>
              </PO>
              <Icon>
                <IconButton>
                  <Badge badgeContent={4} color="success">
                    <TuneIcon sx={{ color: "#68DA6A" }} />
                  </Badge>
                </IconButton>
              </Icon>
            </Header>
            <Code>
              <TextField
                fullWidth
                id="filled-number"
                label="Coy id"
                inputProps={{
                  style: { fontSize: 13, backgroundColor: "#F2EEEB" },
                }}
                defaultValue="Enter coy id"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <TextField
                fullWidth
                sx={{ marginLeft: "24px" }}
                id="filled-number"
                label="Order no"
                inputProps={{
                  style: { fontSize: 13, backgroundColor: "#F2EEEB" },
                }}
                defaultValue="Enter order id"
                InputLabelProps={{
                  shrink: true,
                  fontSize: "18px",
                }}
                variant="filled"
              />
            </Code>
            <Label>
              <Clean>
                <LabelInput
                  icon
                  text={"Sort"}
                  color={"#020A08"}
                  fontSize={"13px"}
                  textDecoration={"underline"}
                  margin={"0px 16px 0px 0px"}
                />
                <LabelInput
                  icon
                  text={"Group By"}
                  color={"#020A08"}
                  fontSize={"13px"}
                  textDecoration={"underline"}
                />
              </Clean>
              <Clean>
                <LabelInput
                  text={"Clean"}
                  color={"#020A08"}
                  fontSize={"13px"}
                  textDecoration={"underline"}
                  margin={"0px 16px 0px 0px"}
                />
                <LabelInput
                  text={"Search"}
                  color={"#020A08"}
                  fontSize={"13px"}
                  textDecoration={"underline"}
                />
              </Clean>
            </Label>
          </Responsibility>
          <Order>
            <LabelInput
              text={"Order"}
              fontWeight={"500"}
              padding={"0px 10px 0px 0px"}
            />
            <IconButton
              sx={{
                backgroundColor: "#D9D1C6",
                width: "24px",
                height: "18px",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 8px 5px 8px",
              }}
            >
              8
            </IconButton>
          </Order>
          {Array.from({ length: 6 }, (_, index) => (
            <Orders key={index} />
          ))}
        </Grid>
        <Grid item xs={12} sm={12} lg={7} xl={9} md={12}>
          <Company>
            <OrderDetails />
          </Company>
        </Grid>
      </Grid>
    </Box>
  );
}
