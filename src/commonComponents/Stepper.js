import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { BorderLinearProgress } from "./StepperStyled";

export default function StepperSteps({ steps, activeStep }) {
  steps = steps || [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  //   const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const checkProgress = (currStep) => {
    const stepVal = Math.ceil(100 / steps.length);
    setProgress(stepVal * currStep);
  };

  React.useEffect(() => {
    checkProgress(activeStep);
  }, [activeStep]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", margin: "10px 0 20px 0" }}>
        <BorderLinearProgress variant="determinate" value={progress} />
      </Box>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"20px"
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </div>
    </Box>
  );
}
