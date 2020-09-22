import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import logo from "../Assets/Amazone.svg";
// import { FormControl } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { FormControl, InputGroup } from "react-bootstrap";

export default class Sellerpage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

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

  render() {
    return (
      <Tamplate
        bottomText={this.bottomText()}
        nextBtnStyle="get-quotes-button"
        nextBtnText="Get Quote"
        nextNavigate={routes.business}
      >
        <img src={logo} alt="amazone-logo" />
        <p className="sellerPolicy-title">Seller's Policy</p>
        <div>
          <span className="paragraphText">Starting at</span>
          <p className="seller-amount">$50</p>
          <p className="per-month">PER MONTH</p>
        </div>
        <InputGroup className="mb-3 input-box-icon">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">{<Search />}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Enter Seller ID as on Amazon USA"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Tamplate>
    );
  }
}
