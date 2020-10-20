import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import { Button } from "@material-ui/core";
import routes from "../router";
import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";

export default class Manufacturingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: "0",
      followed: "0",
      // kept: "1",
      manager: "0",
      supplier: "0",
      plan: "0",
    };
  }

  componentDidMount() {}

  handleNext = (e) => {
    e.preventDefault();
    // console.log("Businesspage -> handleNext -> e", e);
    // this.setState({
    //   activeStep: this.state.activeStep + 1,
    // });

    this.props.history.push(routes.distribution);
  };

  handleBack = () => {
    // this.setState({
    //   activeStep: this.state.activeStep - 1,
    // });
    this.props.history.push(routes.quotes);
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
        quetion: "Do you comply with Good Manufacturing Practices (GMP)?",
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
        quetion: "Are written quality control and testing procedures followed?",
        radio: (
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="followed"
                value={radio.value}
                checked={this.state.followed === radio.value}
                onChange={this.handelRadioChange}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        ),
      },
      {
        quetion: "How long are quality control records kept?",
        radio: (
          <Button
            // disabled={}
            className="previous-button-common"
          >
            3 Years
          </Button>
        ),
      },
      {
        quetion: "Do you have a full time quality control manager?",
        radio: (
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="manager"
                value={radio.value}
                checked={this.state.manager === radio.value}
                onChange={this.handelRadioChange}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        ),
      },
      {
        quetion:
          "Do you obtain certificates evidencing Products Liability insurance from suppliers?",
        radio: (
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="supplier"
                value={radio.value}
                checked={this.state.supplier === radio.value}
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
        <h1 className="page-title-hading">Manufacturing</h1>
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
