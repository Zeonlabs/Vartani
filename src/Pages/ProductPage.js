import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import ProductTable from "../Helper/ProductTable";
import routes from "../router";

export default class Productpage extends Component {
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
        nextNavigate={routes.policy}
        backNavigate={routes.business}
        cardStyle="productTableCard"
      >
        <h1 className="page-title-hading">Business Details</h1>
        <div className="product-table-container">
          <ProductTable />
        </div>
      </Tamplate>
    );
  }
}
