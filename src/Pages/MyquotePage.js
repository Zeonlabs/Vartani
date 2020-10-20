import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import logo from "../Assets/Amazone.svg";

export default class Myquotepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastPage: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  handelPayButton = () => {
    console.log("Myquotepage -> handelPayButton -> data");
    this.setState({
      lastPage: true,
    });
  };
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <Tamplate
        backNavigate={routes.applicant}
        nextBtnText="Pay"
        addSecondButton={
          this.state.lastPage || this.props.match.params.id === "1"
            ? false
            : routes.manufacturing
        }
        nextBtnStyle="get-quotes-button"
        secondBtnStyle="get-discount"
        backBtnStyle="back-cutton-display"
        last
        handelPay={this.handelPayButton}
      >
        <p className="sellerPolicy-title">eCommerce Seller's Insurance</p>
        <img style={{ height: "24px" }} src={logo} alt="amazone-logo" />
        <div>
          <p className="seller-amount my-qutes-amount">
            <span className="doller-sign">$</span>50
          </p>
          <p className="per-month my-qutes-month">PER MONTH</p>
        </div>
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
      </Tamplate>
    );
  }
}
