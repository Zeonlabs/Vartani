import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

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
      <Tamplate backNavigate={routes.applicant}>
        <h1>This is a MyQuotesPage</h1>
      </Tamplate>
    );
  }
}
