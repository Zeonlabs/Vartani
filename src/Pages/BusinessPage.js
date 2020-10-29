// import { Button } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import Bussinessform from "./BussinessForm";

class Businesspage extends Component {
  constructor(props) {
    super(props);
    // const sellerData = JSON.parse(localStorage.getItem("userDetails"))
    this.state = {
      sellerDetail: {},
      sellerId: "",
      storeName: "",
      bussiness: "",
      corporation: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      date: "",
      revenue: "",
      openAlert: false,
    };
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

  handleNext = (data) => {
    data.preventDefault();
    if (this.state.date === "" && localStorage.getItem("apicall") === "yes") {
      this.setState({
        openAlert: true,
      });
    } else {
      this.props.history.push(routes.product);
    }
  };

  handleBack = () => {
    this.props.history.push(routes.seller);
  };

  handelOnChange = (e) => {
    // console.log("Businesspage -> handelOnChange -> value", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Tamplate
        nextNavigate={routes.product}
        backNavigate={routes.seller}
        button
      >
        <h1 className="page-title-hading">Business</h1>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.openAlert}
          autoHideDuration={2000}
          onClose={() => this.setState({ openAlert: false })}
        >
          <Alert
            onClose={() => this.setState({ openAlert: false })}
            severity="error"
          >
            Date is not selected
          </Alert>
        </Snackbar>
        <Bussinessform
          handleBack={this.handleBack}
          handleNext={this.handleNext}
          sellerDetail={this.state.sellerDetail}
          handelOnChange={this.handelOnChange}
          defaultValue={this.state}
        />
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default withRouter(connect(mapStateToProps)(Businesspage));
