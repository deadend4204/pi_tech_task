import { styled } from "@mui/material/styles";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import Button from "@mui/material/Button";

export const TopIcons = styled("div")(() => ({
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const DropMenu = styled(Dropdown)(() => ({
  backgroundColor: "white",
}));

export const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
      border : 0;
      justify-content : space-between;;
      align-items : center;
     gap:5px;
      font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        background-color : white;
        border-radius: 16px;
        color: black;
        transition: all 150ms ease;
        cursor: pointer;
        display : flex;
        padding : 4px 8px 4px 4px;
        box-shadow: 0px 2px 6px 2px #00000026; 
        `
);

export const LoremButton = styled(Button)(() => ({
  background: "#80E7FF",
  color: "#04487F",
  borderRadius: "16px",
  padding: "4px 12px",
  fontSize:"12px",
  '&:hover': {
    backgroundColor: "#80E7FF",
  color: "#04487F",

  }
}));
