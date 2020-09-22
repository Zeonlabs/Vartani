import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import logo from "../Assets/Amazone.svg";
import SignatureCanvas from "react-signature-canvas";

export default class Myquotepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <Tamplate
        backNavigate={routes.applicant}
        nextBtnText="Payment"
        nextBtnStyle="get-quotes-button"
      >
        <h1 className="page-title-hading">Get Quote</h1>
        <img style={{ marginTop: "24px" }} src={logo} alt="amazone-logo" />
        <p className="sellerPolicy-title">Seller's Policy</p>
        <div>
          <span className="paragraphText">Starting at</span>
          <p className="seller-amount">$50</p>
          <p className="per-month">PER MONTH</p>
        </div>
        <p style={{ textAlign: "initial", margin: "0" }}>Signature</p>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 538, height: 150, className: "sigCanvas" }}
        />
      </Tamplate>
    );
  }
}
