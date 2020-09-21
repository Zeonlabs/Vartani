import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

export default class Sellerpage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <Tamplate bottomText="Helo comu" nextNavigate={routes.business}>
        <h1>This is a SellerPage</h1>
        <h2>asdggsajhdhahjsd</h2>
      </Tamplate>
    );
  }
}
