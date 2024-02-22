import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";


export default function CustomTextField({
  label,
  defaultValue,
  endAdornmentIcon,
}) {
  return (
    <TextField
      fullWidth
      id="filled-number"
      label={label}
      inputProps={{
        style: { fontSize: 13, backgroundColor: "#F2EEEB" },
      }}
      defaultValue={defaultValue}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: endAdornmentIcon ? (
          <InputAdornment
            position="start"
            style={{ backgroundColor: "#F2EEEB" }}
          >
            {endAdornmentIcon}
          </InputAdornment>
        ) : undefined,
      }}
      variant="standard"
    />
  );
}
