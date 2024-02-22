import * as React from "react";
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
import AddIcon from "@mui/icons-material/Add";
import {
  AddIconBox,
  AppBar,
  Drawer,
  DrawerHeader,
  Homebtn,
  Procurement,
} from "./SidebarStyles";
import PackageIcon from "../../assets/icons/package.png";
import Home from "../Home/Home";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CssBaseline />
      {/* header start */}
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          open={open}
          style={{
            marginLeft: "80px",
            marginRight: "30%",
            width: "65%",
            boxShadow: "none",
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Procurement noWrap component="div">
              Procurement
            </Procurement>
          </Toolbar>
        </AppBar>
        {/* header end */}

        {/* drawer start */}
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
              <AddIcon
                sx={{ width: "24px", height: "24px", color: "#68DA6A" }}
              />
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
                    px: 4.5,
                  }}
                >
                  <Homebtn>
                    <ListItemIcon
                      sx={{
                        width: "24px",
                        heigth: "24px",
                        minWidth: 0,
                        mr: "auto",
                        justifyContent: "center",
                        color: "#68DA6A",
                      }}
                    >
                      <img src={PackageIcon} width="24px" alt="packageIcon" />
                    </ListItemIcon>
                  </Homebtn>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* drawer end */}

        {/* content body start */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            //  backgroundColor: "#F5F5F5"
          }}
        >
          <DrawerHeader />
          <Home />
        </Box>

        {/* content body end */}
      </Box>
    </div>
  );
};

export default Sidebar;
