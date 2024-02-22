import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  MenuButton,
  TopIcons,
  DropMenu
} from "../RightSideBar/RightSideBarStyles";
import Avatar from "@mui/material/Avatar";

const RightHeader = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} xl={12}>
    <TopIcons>
          <IconButton
            sx={{
              border: "1px solid black",
              height: "28px",
              marginRight: "10px",
              backgroundColor: "white",
            }}
          >
            <SearchIcon
              sx={{ width: "12px", height: "14px", color: "black" }}
            />
          </IconButton>
          <IconButton>
            <NotificationAddOutlinedIcon />
          </IconButton>
          <IconButton sx={{ marginRight: "24px" }}>
            <AppsOutlinedIcon />
          </IconButton>
          <DropMenu>
            <MenuButton>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png"
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#CDD6DB",
                  color: "#CDD6DB",
                }}
              />{" "}
              Daniel Rogers
              <ArrowDropDownIcon />
            </MenuButton>
          </DropMenu>
        </TopIcons>
      </Grid>
      </Grid>
  )
}

export default RightHeader
