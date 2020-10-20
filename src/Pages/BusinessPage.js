// import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import Bussinessform from "./BussinessForm";

class Businesspage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  handleNext = (e) => {
    e.preventDefault();
    // console.log("Businesspage -> handleNext -> e", e);
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
        <h1 className="page-title-hading">Business</h1>

        <Bussinessform
          handleBack={this.handleBack}
          handleNext={this.handleNext}
        />
      </Tamplate>
    );
  }
}

export default withRouter(Businesspage);
