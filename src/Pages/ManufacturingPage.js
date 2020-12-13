import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import { Button } from "@material-ui/core";
import routes from "../router";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";
import { connect } from "react-redux";
// import { generatePath } from "react-router-dom";

class Manufacturingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: "0",
      followed: "0",
      // kept: "1",
      manager: "0",
      supplier: "0",
      plan: "0",
      years: 3,
    };
  }

  componentDidMount() {}

  handleNext = (e) => {
    e.preventDefault();
    const { radioValue, followed, manager, supplier, plan } = this.state;
    let discount = 0;
    if (
      radioValue === "0" &&
      followed === "0" &&
      manager === "0" &&
      supplier === "0" &&
      plan === "0"
    ) {
      discount = 0;
    } else {
      discount = 1;
    }
    this.props.history.push(routes.quotes);
    localStorage.setItem("id", discount ? 12 : 1);
    //   {
    //   pathname: generatePath(routes.quotes, { id: discount ? 12 : 1 }),
    // });
  };

  plusIcon = () => {
    if (this.state.years < 10) {
      this.setState({
        years: this.state.years + 1,
      });
    }
  };

  minusIcon = () => {
    if (this.state.years > 0) {
      this.setState({
        years: this.state.years - 1,
      });
    }
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
          <div
            // disabled={}
            className="previous-button-common"
          >
            <div className="number-button-wrapper">
              <RemoveIcon className="icon-number" onClick={this.minusIcon} />
              {this.state.years} Years
              <AddIcon className="icon-number" onClick={this.plusIcon} />
            </div>
          </div>
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
        <h1 className="page-title-hading">Manufacturing</h1>
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

export default connect(mapStateToProps)(Manufacturingpage);
