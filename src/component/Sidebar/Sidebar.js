import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AddIcon from "@mui/icons-material/Add";
import {
  AddIconBox,
  AppBar,
  Drawer,
  DrawerHeader,
  Homebtn,
  Listbox,
  MenuButton,
  MenuItem,
  Procurement,
  TopIcons,
} from "./SidebarStyles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Dropdown } from "@mui/base/Dropdown";
import PackageIcon from "../../assets/icons/package.png"
import { Menu } from "@mui/base/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "@mui/material/Avatar";
import Home from "../Home/Home";

const createHandleMenuClick = (menuItem) => {
  return () => {
    console.log(`Clicked on ${menuItem}`);
  };
};

const DropMenu = styled(Dropdown)(() => ({
  backgroundColor: "white",
}));
const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ marginLeft: "80px" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Procurement noWrap component="div">
            Procurement
          </Procurement>
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
                  src="https://shorturl.at/vxBLV"
                  sx={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#CDD6DB",
                    color: "#CDD6DB",
                  }}
                />{" "}
                Daniel Rogers
                <ArrowDropDownIcon />
              </MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem onClick={createHandleMenuClick("Profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Log out")}>
                  Log out
                </MenuItem>
              </Menu>
            </DropMenu>
          </TopIcons>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <IconButton
          color="white"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon sx={{ color: "white", width: "24px", height: "24px" }} />
        </IconButton>

        <IconButton>
          <AddIconBox>
            <AddIcon sx={{ width: "24px", height: "24px", color: "#68DA6A" }} />
          </AddIconBox>
        </IconButton>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem
              key={text}
              sx={{
                display: "block",
                color: "#68DA6A  ",
                padding: "5px",
                width: 70,
                height: 56,
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 1.5,
                }}
              >
                <Homebtn>
                  <ListItemIcon
                    sx={{
                      width: "24px",
                      heigth: "24px",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#68DA6A",
                    }}
                  >
                    <img src={PackageIcon} />
                  </ListItemIcon>
                </Homebtn>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#F5F5F5" }}
      >
        <DrawerHeader />
        <Home />
      </Box>
    </Box>
  );
};

export default Sidebar;
