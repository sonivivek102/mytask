import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      navigate("/home");
    }
  }

  return (
    <div style={{ paddingTop: "120px" }}>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <Form.Group
            size="sm"
            controlId="email"
            className="w-25 p-3"
            style={{ margin: "auto" }}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              name="email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </Form.Group>
          <Form.Group
            size="sm"
            controlId="password"
            className="w-25 p-3"
            style={{ margin: "auto" }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </Button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Email or Password.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
