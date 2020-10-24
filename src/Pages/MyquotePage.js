import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import logo from "../Assets/Amazone.svg";
import { connect } from "react-redux";

class Myquotepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastPage: false,
      sellerDetail: "",
      amount: { direct: 50, discount: 0 },
    };
  }

  //seller_premium
  //seller_premium_discount
  //seller_valuechain ----> "Manufacturing" , Distribution

  componentDidMount = () => {
    // console.log(
    //   "Myquotepage -> componentDidMount -> this.props.sellerData.detailObject.business_details",
    //   this.props.sellerData.detailObject.business_details
    // );
    this.setState({
      sellerDetail:
        localStorage.getItem("apicall") === "yes"
          ? JSON.parse(localStorage.getItem("userDetails"))
          : "",
      amount: {
        direct:
          localStorage.getItem("apicall") === "yes"
            ? JSON.parse(localStorage.getItem("userDetails")).seller_premium
            : 50,
        discount:
          localStorage.getItem("apicall") === "yes"
            ? JSON.parse(localStorage.getItem("userDetails"))
                .seller_premium_discount
            : 50,
      },
      lastPage: localStorage.getItem("apicall") === "no",
    });
  };

  handelPayButton = () => {
    console.log("Myquotepage -> handelPayButton -> data");
    this.setState({
      lastPage: true,
    });
  };
  render() {
    return (
      <Tamplate
        backNavigate={routes.applicant}
        nextBtnText="Pay"
        addSecondButton={
          this.state.lastPage ||
          this.props.match.params.id === "1" ||
          this.props.match.params.id === "12"
            ? false
            : this.state.sellerDetail.seller_valuechain === "Manufacturing"
            ? routes.manufacturing
            : routes.distribution
        }
        nextBtnStyle="get-quotes-button"
        secondBtnStyle="get-discount"
        backBtnStyle="back-cutton-display"
        last
        handelPay={this.handelPayButton}
      >
        <p className="sellerPolicy-title">eCommerce Seller's Insurance</p>
        <img style={{ height: "24px" }} src={logo} alt="amazone-logo" />
        <div style={{ marginTop: "6px" }}>
          <span className="paragraphText">Starting at</span>
          <p className="seller-amount my-qutes-amount">
            <span className="doller-sign">$</span>
            {this.props.match.params.id === "12"
              ? this.state.amount.discount
              : this.state.amount.direct || 50}
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

const mapStateToProps = (state) => ({ ...state.Test });

export default connect(mapStateToProps)(Myquotepage);
