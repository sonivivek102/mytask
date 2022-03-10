import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      setLogin(!login);
      navigate("/login");
    }
  }

  function handleClick() {
    setLogin(!login);
    navigate("/login");
  }

  return (
    <>
      <div style={{ paddingTop: "120px" }}>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>
            <Form.Group
              size="lg"
              controlId="email"
              className="w-25 p-3"
              style={{ margin: "auto" }}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="w-25 p-3"
              style={{ margin: "auto" }}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <button type="submit" className="btn btn-dark btn-lg btn-block ">
              Register
            </button>

            <p
              onClick={handleClick}
              className="forgot-password text-right"
              style={{ cursor: "pointer" }}
            >
              Already registered log in?
            </p>
            {flag && <Alert variant="danger">Please fill input field</Alert>}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Registration;
