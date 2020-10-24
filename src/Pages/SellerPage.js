import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import logo from "../Assets/Amazone.svg";
import { ExpandMore } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Form, Spinner } from "react-bootstrap";
import { Button, TextField } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { sellerDetails } from "../Api/FetchUrl";

class Sellerpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: "",
      loading: false,
      apiCall: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.selectedId === "") {
      // this.setState({
      //   loading: true,
      // });

      localStorage.setItem("apicall", "no");
      // this.props.sellerDetails({ seller_node: "" });
      this.props.history.push(routes.business);
    } else {
      this.setState({
        loading: true,
      });
      this.props.sellerDetails({ seller_node: this.state.selectedId });
    }

    // this.props.history.push(routes.business);
  };

  bottomText = () => {
    return (
      <div className="bottom-text-container">
        <div>
          <p className="paragraph-hading">Coverage</p>
          <span className="paragraphText">
            $1M worth of General Liability Insurance, covering third-party
            bodily injury, property damage, and product liabilty.
          </span>
        </div>
        <div className="last-paragraph">
          <p className="paragraph-hading">Endorsements</p>
          <span className="paragraphText">
            The policy must include “Amazon.com, Inc., and its affiliates and
            assignees” as additional insureds.
          </span>
        </div>
      </div>
    );
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.sellerData !== prevProps.sellerData) {
      this.setState({
        loading: false,
      });
      localStorage.setItem(
        "userDetails",
        JSON.stringify(this.props.sellerData.detailObject.business_details)
      );
      localStorage.setItem(
        "tableData",
        JSON.stringify(this.props.sellerData.detailObject.product_details)
      );
      localStorage.setItem("apicall", "yes");
      this.props.history.push(routes.business);
    }
  };

  handelOnChange = (e, value) => {
    // console.log("Sellerpage -> handelOnChange -> e", value);
    this.setState({
      selectedId: value,
    });
  };

  render() {
    return (
      <Tamplate
        bottomText={this.bottomText()}
        nextNavigate={routes.business}
        button
      >
        <p className="sellerPolicy-title">eCommerce Seller's Insurance</p>

        <div>
          <span className="paragraphText">Starting at</span>
          <p className="seller-amount">
            <span className="dollar-sign-sellerPage">$</span>30
          </p>
          <p className="per-month">PER MONTH</p>
        </div>
        <Form noValidate onSubmit={this.handleSubmit}>
          <Form.Group
            controlId="validationCustomUsername"
            className="sellerpage-form-wrapper"
          >
            <div className="left-side-image">
              <img src={logo} alt="amazone-logo" />
              <span>Seller ID</span>
            </div>

            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              className="autoselect-dorpdown-wrapper"
              options={sellerId.map((option) => option.seller_node)}
              renderInput={(params) => (
                <>
                  <TextField
                    {...params}
                    margin="normal"
                    variant="outlined"
                    placeholder="A1P3JEITQENDBE"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                  <ExpandMore className="expanded-svg" />
                </>
              )}
              onChange={this.handelOnChange}
            />
          </Form.Group>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={this.state.loading}
            className="get-quotes-button next-button-common"
          >
            {this.state.loading ? (
              <Spinner animation="border" variant="light" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              "Get Quote"
            )}
          </Button>
        </Form>
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default withRouter(
  connect(mapStateToProps, { sellerDetails })(Sellerpage)
);

const sellerId = [
  { seller_node: "A13MA8Q8Y6VLEQ" },
  { seller_node: "A14NOP0UE2MSZH" },
  { seller_node: "A155MV85MET80U" },
  { seller_node: "A19SZPGKU8OX1U" },
  { seller_node: "A1CGTP0449BDEW" },
  { seller_node: "A1P3JEITQENDBE" },
  { seller_node: "A1YASA1LPC0F6X" },
  { seller_node: "A2JZHRU3OOILA4" },
  { seller_node: "A2MYHQW035L94Y" },
  { seller_node: "A2NXQS911MA9SQ" },
  { seller_node: "A2OOMWM3ZYMRRJ" },
  { seller_node: "A2OWUYLA50HX3S" },
  { seller_node: "A2V85J3MM3K415" },
  { seller_node: "A3228OJ43G5IL6" },
  { seller_node: "A36H2PRTLQUCZE" },
  { seller_node: "A394AA8LK4R2HT" },
  { seller_node: "A3TOZ30IJEARL1" },
  { seller_node: "A8G21YJL6NV13" },
  { seller_node: "AEHNIJ3VEDT1E" },
  { seller_node: "AGELSHSVKJ5IT" },
  { seller_node: "AHOOEL5OWS0DH" },
];
