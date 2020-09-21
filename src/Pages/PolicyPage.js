import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

export default class Policypage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <Tamplate nextNavigate={routes.applicant} backNavigate={routes.product}>
        <h1>This is a PolicyPage</h1>
      </Tamplate>
    );
  }
}
