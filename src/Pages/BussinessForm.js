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
              <Form.Group as={Col} controlId="storeFront">
                <Form.Label>Store front</Form.Label>
                <Form.Control placeholder="e.g Store" />
              </Form.Group>
              <Form.Group as={Col} controlId="business">
                <Form.Label>Business</Form.Label>
                <Form.Control placeholder="Enter your bussiness" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="productDetail">
                <Form.Label>Store front</Form.Label>
                <Form.Control placeholder="Vaartani Pvt. LTD" />
              </Form.Group>
              <Form.Group as={Col} controlId="legal structure">
                <Form.Label>Legal Structure</Form.Label>
                <Form.Control as="select" placeholder="Select legal structure">
                  <option>Architacture</option>
                  <option>Fashion</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="registeredAddress">
              <Form.Label>Registered Address</Form.Label>
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
              <Form.Group as={Col} controlId="website">
                <Form.Label>Website</Form.Label>
                <Form.Control placeholder="Enter your website " />
              </Form.Group>
              <Form.Group as={Col} controlId="dateofEstablishment">
                <Form.Label>Date of Establishment</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={getTodayDate()}
                  placeholder="Enter your country"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="noOfEmployee">
                <Form.Label>Number of Employees</Form.Label>
                <Form.Control placeholder="Enter the number of employees" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Expected Annual Revenue 2020 (USD)</Form.Label>
                <Form.Control as="select" placeholder="Select your revenue">
                  <option>5000</option>
                  <option>1000</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="identificationNumber">
                <Form.Label>Employer Identification Number</Form.Label>
                <Form.Control placeholder="Enter your Employer ID number" />
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
