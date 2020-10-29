import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Tamplate from "../Containers/Tamplate";
import routes from "../router";

export default class Applicantpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lname: "",
      email: "",
      phn: "",
      alertM: {
        status: false,
        msg: "",
      },
    };
  }

  handleNext = (e) => {
    e.preventDefault();
    const { name, lname, email, phn } = this.state;
    if (localStorage.getItem("apicall") === "yes") {
      if (name === "" && lname === "" && email === "" && phn === "") {
        // console.log("Applicantpage -> handleNext -> lname", lname);
        this.setState({
          alertM: {
            status: true,
            msg: "Please Fill the Form",
          },
        });
      } else if (name === "" || lname === "" || email === "" || phn === "") {
        switch (true) {
          case name === "":
            this.setState({
              alertM: {
                status: true,
                msg: "please fill first name",
              },
            });
            break;
          case lname === "":
            this.setState({
              alertM: {
                status: true,
                msg: "please fill last name",
              },
            });
            break;
          case email === "":
            this.setState({
              alertM: {
                status: true,
                msg: "please fill email",
              },
            });
            break;
          case phn === "":
            this.setState({
              alertM: {
                status: true,
                msg: "please fill phone number",
              },
            });
            break;

          default:
            break;
        }
      } else {
        this.props.history.push(routes.quotes);
      }
    } else {
      this.props.history.push(routes.quotes);
    }
  };

  handleBack = () => {
    this.props.history.push(routes.policy);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Tamplate button>
        <h1 className="page-title-hading">Applicant details</h1>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.alertM.status}
          autoHideDuration={2000}
          onClose={() => this.setState({ alertM: { status: false } })}
        >
          <Alert
            onClose={() => this.setState({ alertM: { status: false } })}
            severity="error"
          >
            {this.state.alertM.msg}
          </Alert>
        </Snackbar>
        <div>
          <div className="business-form-container">
            <Form onSubmit={this.handleNext}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                  placeholder="John"
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lname"
                  onChange={this.onChange}
                  value={this.state.lname}
                  placeholder="Doe"
                />
              </Form.Group>
              <Form.Group controlId="emaildAddress">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="john.doe@business.com"
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  maxLength={10}
                  name="phn"
                  onChange={this.onChange}
                  value={this.state.phn}
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
