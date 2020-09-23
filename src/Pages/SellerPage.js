import React, { Component } from "react";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";
import logo from "../Assets/Amazone.svg";
// import { FormControl } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Sellerpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validate: false,
      search: false,
    };
  }

  // componentDidMount() {

  // }

  handleSubmit = (event) => {
    console.log("this is a log in  a name ->", this.state.validate);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      console.log("Sellerpage -> handleSubmit -> form", form);
      this.setState({
        validate: true,
        search: false,
      });
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log("Sellerpage -> handleSubmit -> event", event);
      this.setState({
        validate: false,
      });
      this.props.history.push(routes.business);
    }

    // if (!this.state.validate) {
    //   event.preventDefault();
    //   console.log("Sellerpage -> handleSubmit -> event", event);
    //   this.props.history.push(routes.business);
    // }
  };

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  bottomText = () => {
    return (
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
    );
  };

  handelInputChnage = (e) => {
    if (e.target.value === "") {
      this.setState({
        search: false,
      });
    } else {
      // console.log("Sellerpage -> handelInputChnage -> e", e.target.value);
      if (this.state.validate) {
        this.setState({
          search: true,
        });
      }
    }
  };

  render() {
    return (
      <Tamplate
        bottomText={this.bottomText()}
        // nextBtnStyle="get-quotes-button"
        // nextBtnText="Get Quote"
        nextNavigate={routes.business}
        button
      >
        <img src={logo} alt="amazone-logo" />
        <p className="sellerPolicy-title">Seller's Policy</p>
        <div>
          <span className="paragraphText">Starting at</span>
          <p className="seller-amount">$50</p>
          <p className="per-month">PER MONTH</p>
        </div>
        <Form
          noValidate
          validated={this.state.validate}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="validationCustomUsername">
            <InputGroup className="mb-3 input-box-icon">
              <InputGroup.Prepend>
                <InputGroup.Text
                  id="inputGroupPrepend"
                  className={
                    this.state.validate && !this.state.search
                      ? "error-message"
                      : !this.state.search
                      ? ""
                      : "success-message"
                  }
                >
                  {<Search />}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                placeholder="Enter Seller ID as on Amazon USA"
                // aria-label="Username"
                onChange={this.handelInputChnage}
                type="text"
                aria-describedby="inputGroupPrepend"
              />
              <Form.Control.Feedback type="invalid">
                Please provide sellerId.
              </Form.Control.Feedback>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </InputGroup>
          </Form.Group>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="get-quotes-button next-button-common"
            // onClick={this.handleNext}
          >
            Get Quote
          </Button>
        </Form>
      </Tamplate>
    );
  }
}

export default withRouter(Sellerpage);
