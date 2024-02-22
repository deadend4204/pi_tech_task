import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  CustomIconButton,
  Responsibility,
  Search,
  StepperButton,
  Text,
  TextFieldsContainer,
} from "./HomeStyle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import StepperSteps from "../../commonComponents/Stepper";
import CustomTextField from "../../commonComponents/TextField";
import CustomizedAccordions from "../../commonComponents/Accordion";
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    "ADD ORDER BASKET",
    "ORDER DETAILS",
    "DELIVERY DETAILS",
    "SUMMARY",
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
              alignItems: "center",
            }}
          >
            <div>Create Requisition - Spares</div>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <StepperSteps activeStep={activeStep} steps={steps} />
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} xl={12}>
          <div style={{ padding: "0 20px" }}>
            <Responsibility>
              <TextFieldsContainer>
                <CustomTextField
                  label="Component*"
                  defaultValue={"Main Engine"}
                  endAdornmentIcon={<SearchIcon />}
                />
                <CustomTextField
                  label="Part Name"
                  defaultValue={"Enter part name"}
                />
                <CustomTextField
                  label="Marker's Ref No."
                  defaultValue={"Marker's ref no"}
                />
              </TextFieldsContainer>
              <Search>
                <Text>SEARCH</Text>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Search>
            </Responsibility>
            <div
              style={{ display: "flex", justifyContent: "end", width: "100%" }}
            >
              <CustomIconButton
                variant="text"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add To Order Basket
              </CustomIconButton>
            </div>
            <CustomizedAccordions />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2,mb:2 }}>
              {activeStep !== 0 && (
                    <StepperButton
                    variant="text"
                    onClick={handleBack}
                    startIcon={<ArrowLeftIcon />}
                  >
                   Back
                  </StepperButton>
              )}
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep !== steps.length && (
                // <Button onClick={handleNext}>Next</Button>
                <StepperButton
                variant="text"
                onClick={handleNext}
                endIcon={<ArrowRightIcon />}
              >
               Next
              </StepperButton>
              )}
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
