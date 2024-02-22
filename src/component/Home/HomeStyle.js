import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Responsibility = styled("div")(() => ({
  // width : '430px',
  // minWidth : '430px',
  height: "150px",
  borderRadius: "16px",
  backgroundColor: "#F2EEEB",
  padding: "20px 20px 20px 20px",
  fontFamily: "Inter, sans-serif",
  lineHeight: "16px",
}));

export const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Search = styled("div")(() => ({
  width: "120px",
  height: "28px",
  borderRadius: "18px",
  background: "#F2EEEB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 0 4px 8px",
  border: "1px black solid",
  marginTop: "20px",
  float: "right",
}));

export const Text = styled("div")(() => ({
  fontSize: "12px",
  fontWeight: "400",
}));

export const TextFieldsContainer = styled("div")(() => ({
  display: "flex",
  marginTop: "5px",
  gap: "30px",
  // flexWrap: "wrap",
  // width:"100%"
}));

export const CustomIconButton = styled(Button)(() => ({
  textTransform: "capitalize",
  color: "black",
  fontWeight: 540,
  textDecoration: "underline",
  margin: "5px 0",
}));

export const StepperButton = styled(Button)(() => ({
  textTransform: "uppercase",
  background: "black",
  color: "white",
  borderRadius: "36px",
  padding: "8px 30px",
  '&:hover': {
    backgroundColor: "black", // Change the color for better visibility
  }
}));
