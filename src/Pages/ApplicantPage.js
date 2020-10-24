import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

export default class Applicantpage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleNext = (e) => {
    e.preventDefault();
    this.props.history.push(routes.quotes);
  };

  handleBack = () => {
    this.props.history.push(routes.policy);
  };
  render() {
    return (
      <Tamplate button>
        <h1 className="page-title-hading">Applicant details</h1>
        <div>
          <div className="business-form-container">
            <Form onSubmit={this.handleNext}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="John" />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Doe" />
              </Form.Group>
              <Form.Group controlId="emaildAddress">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john.doe@business.com"
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  maxLength={10}
                  placeholder="818-292-0571"
                  className="phone-number-field"
                />
              </Form.Group>

              <div className="bottom-button-wrapper">
                <Button
                  onClick={this.handleBack}
                  className="previous-button-common"
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="next-button-common"
                >
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Tamplate>
    );
  }
}
