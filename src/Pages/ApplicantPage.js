import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

export default class Applicantpage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <Tamplate nextNavigate={routes.quotes} backNavigate={routes.policy}>
        <h1>This is a ApplicantPage</h1>
      </Tamplate>
    );
  }
}
