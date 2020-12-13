import React, { useState } from "react";
import { Form, Alert, Spinner } from "react-bootstrap";
import { Button } from "@material-ui/core";

export const PasswordModal = (props) => {
  const [password, setpassword] = useState("");
  const [notification, setNotification] = useState(false);

  const handleSubmit = () => {
    if (password !== "form@357") {
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 2000);
    } else {
      props.handleSubmit(password);
    }
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.close}>
          &times;
        </span>
        {notification ? (
          <Alert
            variant="danger"
            onClose={() => setNotification(false)}
            dismissible
          >
            please enter correct password !
          </Alert>
        ) : (
          ""
        )}
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          placeholder="•••••••"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // disabled={loading}
          onClick={handleSubmit}
          className="get-quotes-button next-button-common"
        >
          {props.passwordloading ? (
            <Spinner animation="border" variant="light" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            "Enter"
          )}
        </Button>
      </div>
    </div>
  );
};
