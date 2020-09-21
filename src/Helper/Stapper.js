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
      <div>
        {/* {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : ( */}

        {/* )} */}
      </div>
    </div>
  );
};

export default TopStepper;
