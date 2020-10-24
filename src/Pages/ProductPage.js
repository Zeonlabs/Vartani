import React, { Component } from "react";
import { connect } from "react-redux";
import Tamplate from "../Containers/Tamplate";
import ProductTable from "../Helper/ProductTable";
import routes from "../router";

class Productpage extends Component {
  constructor(props) {
    super(props);

    this.state = { sellerDetail: [], apicall: false };
  }

  componentDidMount = () => {
    // this.setState({
    //   sellerDetail: this.props.sellerData
    //     ? this.props.sellerData.detailObject.product_details
    //     : "",
    //   apicall: this.props.sellerData,
    // });
    this.setState({
      sellerDetail:
        localStorage.getItem("apicall") === "yes"
          ? JSON.parse(localStorage.getItem("tableData"))
          : [],
      apicall: localStorage.getItem("apicall") === "yes",
    });
  };

  render() {
    return (
      <Tamplate
        nextNavigate={routes.policy}
        backNavigate={routes.business}
        cardStyle="productTableCard"
      >
        <h1 className="page-title-hading">Product Portfolio</h1>
        <div className="product-table-container">
          <ProductTable
            producteData={this.state.sellerDetail}
            apicall={this.state.apicall}
          />
        </div>
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default connect(mapStateToProps)(Productpage);
