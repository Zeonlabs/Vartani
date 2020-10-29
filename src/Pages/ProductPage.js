import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { Component } from "react";
import { connect } from "react-redux";
import Tamplate from "../Containers/Tamplate";
import ProductTable from "../Helper/ProductTable";
import routes from "../router";

class Productpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellerDetail: [],
      apicall: false,
      selected: false,
      openAlert: false,
    };
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

  handleSubmit = () => {
    this.setState({
      openAlert: true,
    });
  };

  handelSelected = (data) => {
    // console.log("Productpage -> handelSelected -> data", data);
    if (data.length > 0) {
      this.setState({
        selected: true,
      });
    } else {
      this.setState({
        selected: false,
      });
    }
  };

  render() {
    return (
      <Tamplate
        nextNavigate={routes.policy}
        backNavigate={routes.business}
        cardStyle="productTableCard"
        handelPay={this.handleSubmit}
        last={!this.state.selected && localStorage.getItem("apicall") === "yes"}
      >
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.openAlert}
          autoHideDuration={2000}
          onClose={() => this.setState({ openAlert: false })}
        >
          <Alert
            onClose={() => this.setState({ openAlert: false })}
            severity="error"
          >
            Please Select a row
          </Alert>
        </Snackbar>
        <h1 className="page-title-hading">Product Portfolio</h1>
        <div className="product-table-container">
          <ProductTable
            producteData={this.state.sellerDetail}
            apicall={this.state.apicall}
            handelSelected={this.handelSelected}
          />
        </div>
      </Tamplate>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.Test });

export default connect(mapStateToProps)(Productpage);
