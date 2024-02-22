import React from "react";
import Box from "@mui/material/Box";

const BoxComponent = ({
  children,
  width,
  height,
  backgroundColor,
  padding,
  margin,
  display,
  justifyContent,
  radius,
  shadow,
  border,
  hover,
  borderColor,borderStyle
}) => {
  return (
    <Box
      sx={{
        borderStyle :borderStyle|| "",
        borderColor: borderColor || "",
        border: border || "",
        boxShadow: shadow || "",
        width: width,
        height: height,
        backgroundColor: backgroundColor || "#E8ECED",
        padding: padding || 0,
        margin: margin || 0,
        borderRadius: radius || "16px",
        display: display || "",
        justifyContent: justifyContent || "",
        transition: "border 0.3s",
        ...(hover
          ? {
              "&:hover": {
                border: "1px solid #052E2B", 
              },
            }
          : {}),
      }}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;
