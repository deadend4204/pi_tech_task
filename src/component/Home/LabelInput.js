import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LabelInput = ({ text, padding, margin, fontSize, color,textDecoration,fontWeight, icon , fontStyle}) => {
  return (
    <>
      <div
        style={{
          padding: padding || 0,
          margin: margin || 0,
          fontSize: fontSize || "13px",
          color: color || "grey",
          textDecoration : textDecoration || 'none',
          fontFamily : 'Inter, sans-serif',
          fontWeight : fontWeight || 600,
          lineHeight : '16px',
          fontStyle : fontStyle || ''
        }}
      >
        {text}  {icon ? <KeyboardArrowDownIcon sx = {{width : '14px', height : '14px', marginLeft : '10px'}}/> : ''}
      </div>
    </>
  );
};

export default LabelInput;
