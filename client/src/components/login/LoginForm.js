import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function LoginForm() {
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  //TODO: Write handle submit for login form and redirection
  const handleSubmit = e => {};

  return (
    <Container fluid className="h100 flex">
      <Row className="h-100 flex ">
        <Col className="h-100 ">
          <div className="flex">
            <div className="form-box vertical-center ">
              <h1>Login</h1>
              <hr />
              <Form>
                <Form.Group controlId="emailId">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="Enter your email Id"
                  />
                </Form.Group>
                <Form.Group controlId="pass">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
