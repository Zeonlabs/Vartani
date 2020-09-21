import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

class Businesspage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  handleNext = () => {
    // this.setState({
    //   activeStep: this.state.activeStep + 1,
    // });

    this.props.history.push(routes.product);
  };

  handleBack = () => {
    // this.setState({
    //   activeStep: this.state.activeStep - 1,
    // });
    this.props.history.push(routes.seller);
  };

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <Tamplate
        nextNavigate={routes.product}
        backNavigate={routes.seller}
        button
      >
        <h1>This is a BusinessPage</h1>
        <div>
          <div>
            <Button
              // disabled={}
              onClick={this.handleBack}
              // className={this.props.backBtnStyle}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              // className={this.props.nextBtnStyle}
              onClick={this.handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </Tamplate>
    );
  }
}

export default withRouter(Businesspage);
