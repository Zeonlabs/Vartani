import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import { Button } from "@material-ui/core";
import routes from "../router";
import { generatePath } from "react-router-dom";
import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";

export default class Distribution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: "0",
      plan: "0",
    };
  }

  componentDidMount() {
    // console.log("asdasdasdasd", this.props);
  }

  handleNext = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: generatePath(routes.quotes, { id: 1 }),
    });
  };

  handleBack = () => {
    // this.setState({
    //   activeStep: this.state.activeStep - 1,
    // });
    this.props.history.push(routes.manufacturing);
  };
  // }

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
        <h1 className="page-title-hading">Distribution</h1>
        <div>
          <div className="business-form-container">
            <div className="radio-form-wrapper">
              {queations.map((value) => (
                <Row className="line-wrapper">
                  <Col sm={9}>
                    <span>{value.quetion}</span>
                  </Col>
                  <Col sm={3}>{value.radio}</Col>
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
