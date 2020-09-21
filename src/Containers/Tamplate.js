import React, { Component } from "react";
import TopStepper from "../Helper/Stapper";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Sellerpage from "../Pages/SellerPage";
import Businesspage from "../Pages/BusinessPage";
import Productpage from "../Pages/ProductPage";
import Policypage from "../Pages/PolicyPage";
import Applicantpage from "../Pages/ApplicantPage";
import Myquotepage from "../Pages/MyquotePage";
import routes from "../router";
// import Typography from "@material-ui/core/Typography";

function getSteps() {
  return [
    { title: "Seller", component: <Sellerpage /> },
    { title: "Business", component: <Businesspage /> },
    { title: "Product", component: <Productpage /> },
    { title: "Policy", component: <Policypage /> },
    { title: "Applicant details", component: <Applicantpage /> },
    { title: "My quote", component: <Myquotepage /> },
  ];
}

class Tamplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  componentDidMount = () => {
    if (this.props.location.pathname === routes.seller) {
      this.setState({
        activeStep: 0,
      });
    } else if (this.props.location.pathname === routes.business) {
      this.setState({
        activeStep: 1,
      });
    } else if (this.props.location.pathname === routes.product) {
      this.setState({
        activeStep: 2,
      });
    } else if (this.props.location.pathname === routes.policy) {
      this.setState({
        activeStep: 3,
      });
    } else if (this.props.location.pathname === routes.applicant) {
      this.setState({
        activeStep: 4,
      });
    } else if (this.props.location.pathname === routes.quotes) {
      this.setState({
        activeStep: 5,
      });
    }
  };

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  // Class Properties (Stage 3 Proposal)
  // handler = () => { this.setState() }
  handleNext = () => {
    // this.setState({
    //   activeStep: this.state.activeStep + 1,
    // });
    console.log(
      "Tamplate -> handleNext -> this.state.activeStep",
      this.state.activeStep
    );
    this.props.history.push(this.props.nextNavigate);
  };

  // useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: "100%",
  //   },
  //   backButton: {
  //     marginRight: theme.spacing(1),
  //   },
  //   instructions: {
  //     marginTop: theme.spacing(1),
  //     marginBottom: theme.spacing(1),
  //   },
  // }));

  handleBack = () => {
    // this.setState({
    //   activeStep: this.state.activeStep - 1,
    // });
    this.props.history.push(this.props.backNavigate);
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  render() {
    // const classes = this.useStyles();
    const steps = getSteps();
    return (
      <div className="main-containor">
        <div className="header">
          <h3>Insurance</h3>
        </div>
        <div className="main-containt-container">
          <div className="">
            <TopStepper activeStep={this.state.activeStep} steps={steps} />
          </div>
          <div className="main-containt">
            <div>{this.props.children}</div>
            {this.props.button ? (
              ""
            ) : (
              <div>
                <div>
                  {this.state.activeStep === 0 ? (
                    ""
                  ) : (
                    <Button
                      // disabled={}
                      onClick={this.handleBack}
                      className={this.props.backBtnStyle}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    className={this.props.nextBtnStyle}
                    onClick={this.handleNext}
                  >
                    {this.state.activeStep === steps.length - 1
                      ? "Finish"
                      : "Next"}
                  </Button>
                </div>
              </div>
            )}
            {this.state.activeStep === 0 ? (
              <div>{this.props.bottomText}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="footer-container">
          <h5>copyright @vartani</h5>
        </div>
      </div>
    );
  }
}

export default withRouter(Tamplate);
