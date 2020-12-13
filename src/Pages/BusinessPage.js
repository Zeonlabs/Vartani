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
      loading: false,
      apiCall: false,
    };
  }

  componentDidMount = () => {
    console.log(
      "🚀 ~ file: BusinessPage.js ~ line 46 ~ Businesspage ~ this.props.sellerDetailsState",
      this.props.sellerDetailsState
    );
    if (this.props.sellerDetailsState !== undefined) {
      const sellerDetailsApiData = this.props.sellerDetailsState.res.dataObject
        .seller_detail;
      this.setState({
        sellerId: sellerDetailsApiData.seller_node,
        storeName: sellerDetailsApiData.seller_name,
        bussiness: sellerDetailsApiData.seller_detail_business_name,
        corporation: sellerDetailsApiData.seller_business_incorporation_type,
        address: sellerDetailsApiData.seller_detail_business_address,
        city: sellerDetailsApiData.seller_business_city,
        zip: sellerDetailsApiData.seller_business_postcode,
        state: sellerDetailsApiData.seller_business_state,
        country: sellerDetailsApiData.seller_business_country,
        revenue: "Less than 10,000",
      });
    } else {
      this.setState({
        sellerDetail:
          localStorage.getItem("apicall") === "yes"
            ? JSON.parse(localStorage.getItem("userDetails"))
            : {},
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.asinDetails !== this.props.asinDetails) {
      if (this.state.loading && this.props.asinDetails !== undefined) {
        if (this.state.date === "") {
          this.setState({
            openAlert: true,
            loading: false,
          });
        } else {
          this.setState({
            loading: false,
          });
          this.props.history.push(routes.product);
        }
      }
    }
  };

  handleNext = (data) => {
    console.log(
      "🚀 ~ file: BusinessPage.js ~ line 93 ~ Businesspage ~ this.props.asinDetails",
      this.props.asinDetails
    );

    data.preventDefault();
    this.setState({
      loading: true,
    });
    if (this.props.sellerDetailsState === undefined) {
      if (this.state.date === "" && localStorage.getItem("apicall") === "yes") {
        this.setState({
          openAlert: true,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
        this.props.history.push(routes.product);
      }
    } else if (this.props.asinDetails !== undefined) {
      if (this.state.date === "") {
        this.setState({
          openAlert: true,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
        this.props.history.push(routes.product);
      }
    }
    // else {
    //   localStorage.setItem("apiStatus", "buttonPress");
    // }
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
        <div
          className={`${
            this.props.sellerDetailsState !== undefined
              ? "activate-live-other-page"
              : "inactive-live-other-page"
          } live-homepage live-other-page`}
        >
          <div
            className={`${
              this.props.sellerDetailsState !== undefined
                ? "active-dot-behind-live"
                : "inactive-dot-behind-live"
            } dot-behind-live`}
          ></div>
          <span>LIVE</span>
        </div>
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
          loading={this.state.loading}
        />
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default withRouter(connect(mapStateToProps)(Businesspage));
