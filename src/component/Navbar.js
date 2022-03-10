import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  const signout = () => {
    // localStorage.removeItem("Password");
    navigate("./signup");
  };

  const email1 = localStorage.getItem("Email");
  const email = email1 ? email1.replaceAll('"', "") : null;
  let Authtoken = localStorage.getItem("Password");

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light py-3 shadow-sm fixed-top"
        style={{ backgroundColor: "#eaeae1" }}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/home"></NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {email ? <span>Email:{email}</span> : null}
          {!Authtoken ? (
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
            </div>
          ) : (
            <NavLink
              to="/signup"
              onClick={signout}
              className="btn btn-outline-dark ms-2"
            >
              <i className="fa fa-sign-in me-1"></i>Signout
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
