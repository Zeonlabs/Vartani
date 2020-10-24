import React from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const TopStepper = (props) => {
  return (
    <div className="stepper-container">
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label.title}>
            <StepLabel>{label.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default TopStepper;
