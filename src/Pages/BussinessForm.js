import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Col, Form, Spinner } from "react-bootstrap";
import getTodayDate from "../Helper/TodaysDate";

export default class Bussinessform extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    getTodayDate();
  }

  render() {
    const {
      city,
      country,
      expected_annual_revenue,
      seller_business_incorporation_type,
      seller_business_name,
      seller_id,
      seller_store_name,
      state,
      street_address,
      zip_code,
    } = this.props.sellerDetail;
    return (
      <div>
        <div className="business-form-container">
          <Form onSubmit={this.props.handleNext}>
            <Form.Row>
              <Form.Group as={Col} controlId="sellerId">
                <Form.Label>Seller ID</Form.Label>
                <Form.Control
                  name="sellerId"
                  onChange={this.props.handelOnChange}
                  value={this.props.defaultValue.sellerId || seller_id}
                  placeholder="e.g. A1P3JEITQENDBE"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="storename">
                <Form.Label>Store Name</Form.Label>
                <Form.Control
                  name="storeName"
                  onChange={this.props.handelOnChange}
                  value={this.props.defaultValue.storeName || seller_store_name}
                  placeholder="e.g. Berri Fit®"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="bussiness">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  name="bussiness"
                  onChange={this.props.handelOnChange}
                  value={
                    this.props.defaultValue.bussiness || seller_business_name
                  }
                  placeholder="e.g. Berri Pro Inc."
                />
              </Form.Group>
              <Form.Group as={Col} controlId="entity_type">
                <Form.Label>Business Entity Type</Form.Label>
                <Form.Control
                  as="select"
                  name="corporation"
                  onChange={this.props.handelOnChange}
                  value={
                    this.props.defaultValue.corporation ||
                    seller_business_incorporation_type
                  }
                  placeholder=""
                >
                  <option value="" disabled selected></option>
                  <option>Corporation</option>
                  <option>Individual</option>
                  <option>LLC</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group style={{ padding: "0" }} controlId="registeredAddress">
              <Form.Label>Registered Business Address</Form.Label>
              <Form.Control
                value={this.props.defaultValue.address || street_address}
                name="address"
                onChange={this.props.handelOnChange}
                placeholder="e.g. 3159 Donald Douglas Loop S Ste 300"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  onChange={this.props.handelOnChange}
                  value={this.props.defaultValue.city || city}
                  placeholder="e.g. Santa Monica"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="zip"
                  onChange={this.props.handelOnChange}
                  value={this.props.defaultValue.zip || zip_code}
                  placeholder="e.g. 90405"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="state"
                  onChange={this.props.handelOnChange}
                  value={this.props.defaultValue.state || state}
                  placeholder="e.g. California"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  name="country"
                  onChange={this.props.handelOnChange}
                  value={this.props.defaultValue.country || country}
                  placeholder="e.g. US"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="dateofEstablishment">
                <Form.Label>Date of Establishment</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={this.props.handelOnChange}
                  // defaultValue={getTodayDate()}
                  placeholder="dd-mmm-yyyy"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Expected Annual Revenue (USD)</Form.Label>
                <Form.Control
                  as="select"
                  name="revenue"
                  onChange={this.props.handelOnChange}
                  value={
                    this.props.defaultValue.revenue || expected_annual_revenue
                  }
                  placeholder=""
                >
                  <option value="" disabled selected></option>
                  <option>Less than 10,000</option>
                  <option>10,001 to 50,000</option>
                  <option>50,001 to 100,000</option>
                  <option>100,001 to 200,000</option>
                  <option>200,001 to 300,000</option>
                  <option>500,001 to 600,000</option>
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
              >
                {this.props.loading ? (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  "Next"
                )}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
