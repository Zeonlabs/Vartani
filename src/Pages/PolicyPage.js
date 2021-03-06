import { Slider } from "@material-ui/core";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Tamplate from "../Containers/Tamplate";
import marks from "../Helper/SliderMarks";
// import getTodayDate from "../Helper/TodaysDate";
import routes from "../router";
import "moment/locale/it.js";
import getTodayDate from "../Helper/TodaysDate";
import { connect } from "react-redux";

class Policypage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderText: "1",
    };
  }

  sliderChange = (e, value) => {
    const sliderAmount = value + 10;
    this.setState({
      sliderText: value === 99 ? 10 : sliderAmount.toString().substr(0, 1),
    });
  };

  onChange = (jsDate, dateString) => {
    console.log(
      "Policypage -> onChange -> jsDate, dateString",
      jsDate,
      dateString
    );
  };
  render() {
    return (
      <Tamplate nextNavigate={routes.applicant} backNavigate={routes.product}>
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
        <h1 className="page-title-hading">Policy Coverage</h1>
        <div className="slider-container">
          <p className="seller-amount policy-amount">
            <span className="dollar-sign">$</span>
            {this.state.sliderText}
            <span className="million-text">million</span>
          </p>
          <div className="slider-wrapper">
            <Slider
              defaultValue={1}
              onChange={this.sliderChange}
              getAriaValueText={this.valuetext}
              aria-labelledby="discrete-slider-small-steps"
              valueLabelDisplay="off"
              step={11}
              marks={marks}
            />
          </div>
          <div className="startDate-container">
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" defaultValue={getTodayDate()} />
            </Form.Group>
          </div>
        </div>
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });
export default connect(mapStateToProps)(Policypage);
