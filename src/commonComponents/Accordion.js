import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  AccordionLabelContainer,
  AccordionLabelText,
  AccordionLabelTextContainer,
  AccordionMainText,
} from "./commonStyled";
import Parts from "../component/Parts/Parts";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  borderBottom: "2px solid rgba(0, 0, 0, .125)",
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  //   flexDirection: 'row-reverse',
  //   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //     transform: 'rotate(180deg)',
  //   },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const accordionsData = [
  {
    name: "panel_1",
    headerComponent: (isExpanded) => (
      <AccordionLabelContainer>
        <AccordionMainText isExpanded={isExpanded}>
          M/E TURBOCHARGER #1
        </AccordionMainText>
        <div style={{ display: "flex", gap: "30px" }}>
          <AccordionLabelTextContainer>
            <AccordionLabelText>Maker</AccordionLabelText>
            <div>ABB Turbo Systems AG</div>
          </AccordionLabelTextContainer>
          <AccordionLabelTextContainer>
            <AccordionLabelText>Serial</AccordionLabelText>
            <div>HT 479292/HT 482920</div>
          </AccordionLabelTextContainer>
          <AccordionLabelTextContainer>
            <AccordionLabelText>Maker</AccordionLabelText>
            <div>ABB Turbo Systems AG</div>
          </AccordionLabelTextContainer>
        </div>
      </AccordionLabelContainer>
    ),
    bodyComponent: <Typography>Accordion 1</Typography>,
  },  {
    name: "panel_2",
    headerComponent: (isExpanded) => (
      <AccordionLabelContainer >
        <AccordionMainText isExpanded={isExpanded}>
          M/E AUX BOWLER #1
        </AccordionMainText>
        <div style={{ display: "flex", gap: "30px" }}>
          <AccordionLabelTextContainer>
            <AccordionLabelText>Maker</AccordionLabelText>
            <div>ABB Turbo Systems AG</div>
          </AccordionLabelTextContainer>
          <AccordionLabelTextContainer>
            <AccordionLabelText>Serial</AccordionLabelText>
            <div>HT 479292/HT 482920</div>
          </AccordionLabelTextContainer>
          <AccordionLabelTextContainer>
            <AccordionLabelText>Maker</AccordionLabelText>
            <div>ABB Turbo Systems AG</div>
          </AccordionLabelTextContainer>
        </div>
      </AccordionLabelContainer>
    ),
    bodyComponent: <Parts />,
  },
];

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {accordionsData.map((accordion) => (
        <Accordion
          expanded={expanded === accordion.name}
          onChange={handleChange(accordion.name)}
          key={accordion.name}
        >
          <AccordionSummary
            aria-controls={`${accordion.name}-content`}
            id={`${accordion.name}-header`}
          >
            {accordion.headerComponent(expanded === accordion.name)}
          </AccordionSummary>
          <AccordionDetails>{accordion.bodyComponent}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
