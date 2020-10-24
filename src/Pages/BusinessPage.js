// import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import Bussinessform from "./BussinessForm";

class Businesspage extends Component {
  constructor(props) {
    super(props);

    this.state = { sellerDetail: {} };
  }

  componentDidMount = () => {
    // this.setState({
    //   sellerDetail: this.props.sellerData
    //     ? this.props.sellerData.detailObject.business_details
    //     : {},
    // });
    this.setState({
      sellerDetail:
        localStorage.getItem("apicall") === "yes"
          ? JSON.parse(localStorage.getItem("userDetails"))
          : {},
    });
  };

  handleNext = (e) => {
    e.preventDefault();

    this.props.history.push(routes.product);
  };

  handleBack = () => {
    this.props.history.push(routes.seller);
  };
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
          sellerDetail={this.state.sellerDetail}
        />
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default withRouter(connect(mapStateToProps)(Businesspage));
