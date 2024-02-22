import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";

const drawerWidth = 180;
const openedMixin = (theme) => ({
  backgroundColor: "#052E2B",
  width: drawerWidth,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  padding: "8px 0px 32px 0px",
  backgroundColor: "#052E2B",
  overflowX: "hidden",

  width: `calc(${theme.spacing(10)})`,
  [theme.breakpoints.up("sm")]: {
    padding: "8px 0px 32px 0px",
    width: `calc(${theme.spacing(10)})`,
  },
  [theme.breakpoints.up("md")]: {
    padding: "8px 0px 32px 0px",
    width: `calc(${theme.spacing(10)})`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  marginLeft: open ? drawerWidth : 24,
  width: `calc(100% - ${open ? drawerWidth : 80}px)`,
  background: "#fff",
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: "8px 0px 32px 0px",
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const AddIconBox = styled("div")(() => ({
  borderRadius: 16,
  width: 56,
  height: 56,
  background: "#00704B",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
}));

const Procurement = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #020a08;
  font-size: 16px;
  line-height: 20px;
`;
const Homebtn = styled("div")(() => ({
  borderRadius: 16,

  justifyContent: "center",
  display: "flex",
  alignItems: "center",

  "&:hover": {
    background: "#00704B",
    padding: "4px 10px 4px 10px",
  },
}));

const TopIcons = styled("div")(() => ({
  color: "black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const Listbox = styled("ul")(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
    
      margin: 12px 0;
      width : 129.22px
      border-radius: 12px;
      overflow: auto;
      outline: 0px;
      background: #fff;
      border : 0;
      color: black;
     height : 24px
      z-index: 1;
      `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
      list-style: none;
      border : 0;
      border-radius: 8px;
      cursor: default;
      user-select: none;
    color : black
      &:last-of-type {
        border-bottom: none;
      }
      `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
    border : 0;
    justify-content : center;
    align-items : center;
   
    font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      background-color : white;
      border-radius: 8px;
      color: black;
      transition: all 150ms ease;
      cursor: pointer;
      display : flex;
      padding : 4px 8px 4px 4px;
      box-shadow: 0px 2px 6px 2px #00000026; 
      `
);

export {
  Drawer,
  AddIconBox,
  DrawerHeader,
  AppBar,
  Homebtn,
  TopIcons,
  Procurement,
  Listbox,
  MenuItem,
  MenuButton,
};
