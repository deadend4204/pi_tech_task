import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Summary from "./Summary";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    style = {{paddingLeft : '10px'}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabPanels = () => {
  const [value, setValue] = React.useState(0);
  const TabText = [
    "Summary",
    "Order Lines",
    "Suppliers",
    "Analysis",
    "Freight Details",
    "Delivery",
    "Invoice",
    "Memos",
    "Notes & Attachments",
    "Budgets",
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#CDD6DB" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ fontSize: "12px", color: "#697E85"}}
          TabIndicatorProps={{
            sx: {
              bgcolor: "#052E2B",
              height: "2px",
              marginLeft : '10px',
            
            }
          }}
        >
          {TabText.map((label, i) => (
            <Tab
              label={label}
              {...a11yProps(i)}
              style = {{marginLeft : '24px'}}
              sx={{
                textTransform: "none",
                "&.Mui-selected": {
                  color: " #052E2B",
                  fontWeight : '600',
                  fontFamily : 'Inter',
                  borderColor : 'black'
                },
              }}
            />
          ))}

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <Summary/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};

export default CustomTabPanels;
