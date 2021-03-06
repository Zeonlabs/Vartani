import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import { Button } from "@material-ui/core";
import routes from "../router";
// import { generatePath } from "react-router-dom";
import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";
import { connect } from "react-redux";
class Distribution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: "0",
      plan: "0",
    };
  }

  handleNext = (e) => {
    e.preventDefault();
    const { radioValue, plan } = this.state;
    let discount = 0;
    if (radioValue === "0" && plan === "0") {
      discount = 0;
    } else {
      discount = 1;
    }
    this.props.history.push(routes.quotes);
    localStorage.setItem("id", discount ? 12 : 1);
    // {
    //   pathname: generatePath(routes.quotes, { id: discount ? 12 : 1 }),
    // });
  };

  handleBack = () => {
    this.props.history.push(routes.quotes);
  };

  handelRadioChange = (e) => {
    this.setState({
      [e.target.name]: e.currentTarget.value,
    });
  };

  getQueations = () => {
    const radios = [
      { name: "Yes", value: "1" },
      { name: "No", value: "2" },
    ];
    return [
      {
        quetion:
          "Do you get certificates of insurance from manufacturers naming you a vendor?",
        radio: (
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radioValue"
                value={radio.value}
                checked={this.state.radioValue === radio.value}
                onChange={this.handelRadioChange}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        ),
      },
      {
        quetion: "Do you have a formal product recall plan?",
        radio: (
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="plan"
                value={radio.value}
                checked={this.state.plan === radio.value}
                onChange={this.handelRadioChange}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        ),
      },
    ];
  };

  render() {
    const queations = this.getQueations();
    return (
      <Tamplate button cardStyle="manufacturingCard">
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
        <h1 className="page-title-hading">Distribution</h1>
        <div>
          <div className="business-form-container">
            <div className="radio-form-wrapper">
              {queations.map((value) => (
                <Row className="line-wrapper">
                  <Col sm={9}>
                    <span>{value.quetion}</span>
                  </Col>
                  <Col sm={3} className="button-width">
                    {value.radio}
                  </Col>
                </Row>
              ))}
            </div>
            <div className="bottom-button-wrapper">
              <Button
                // disabled={}
                onClick={this.handleBack}
                className="previous-button-common"
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="next-button-common"
                onClick={this.handleNext}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default connect(mapStateToProps)(Distribution);
