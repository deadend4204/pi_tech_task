import { styled } from "@mui/material/styles";

export const AccordionLabelContainer = styled("div")(() => ({
  display: "flex",
  gap: "80px",
  fontSize: "13px",
  fontWeight: 550,
}));
export const AccordionLabelTextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));
export const AccordionLabelText = styled("div")(() => ({
  color: "grey",
  fontSize: "12px",
  fontWeight: 550,
}));
export const AccordionMainText = styled("div",{shouldForwardProp:(props) => props !== "isExpanded"})(({isExpanded}) => ({
    color: isExpanded ? "black" : "grey",width:"200px"
}));
