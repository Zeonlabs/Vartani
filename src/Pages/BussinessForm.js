import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import getTodayDate from "../Helper/TodaysDate";

export default class Bussinessform extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    getTodayDate();
  }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  render() {
    return (
      <div>
        <div className="business-form-container">
          <Form onSubmit={this.props.handleNext}>
            <Form.Row>
              <Form.Group as={Col} controlId="sellerId">
                <Form.Label>Seller ID</Form.Label>
                <Form.Control placeholder="A1P3JEITQENDBE" />
              </Form.Group>
              <Form.Group as={Col} controlId="storename">
                <Form.Label>Store Name</Form.Label>
                <Form.Control placeholder="Berri Fit®" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="business">
                <Form.Label>Business</Form.Label>
                <Form.Control placeholder="Enter your bussiness" />
              </Form.Group>
              <Form.Group as={Col} controlId="entity_type">
                <Form.Label>Business Entity Type</Form.Label>
                <Form.Control as="select" placeholder="Select legal structure">
                  <option>Corporation</option>
                  <option>Fashion</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="registeredAddress">
              <Form.Label>Registered Business Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="Enter your city" />
              </Form.Group>
              <Form.Group as={Col} controlId="zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="Enter your postal code" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control placeholder="Enter your state" />
              </Form.Group>
              <Form.Group as={Col} controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder="Enter your country" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="dateofEstablishment">
                <Form.Label>Date of Establishment</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={getTodayDate()}
                  placeholder="Enter your country"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Expected Annual Revenue (USD)</Form.Label>
                <Form.Control as="select" placeholder="Select your revenue">
                  <option>5000</option>
                  <option>1000</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <div className="bottom-button-wrapper">
              <Button
                // disabled={}
                onClick={this.props.handleBack}
                className="previous-button-common"
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="next-button-common"
                // onClick={this.props.handleNext}
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
