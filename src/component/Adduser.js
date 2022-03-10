import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Action";
import Navbarr from "./Navbar";
import "react-datetime/css/react-datetime.css";
import { Form } from "react-bootstrap";

const Adduser = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [error, setError] = useState("");

  const [state, setState] = useState({});

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !dob || !contact || !address) {
      setError("Please fill input field");
    } else {
      dispatch(addUser(state));
      navigate("/home");
      setError("");
    }
  };
  const { name, contact, address, dob } = state;

  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <Navbarr />
      <div className="App">
        <h3 style={styling}>ADD USER</h3>
        <form
          onSubmit={handlesubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={handleInputchange}
            name="name"
            id="standard-basic"
            label="Name"
            value={name}
            type="text"
          />
          <div className="mx-auto">
            <Form.Group controlId="dob">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                onChange={handleInputchange}
                type="date"
                name="dob"
                value={dob}
                placeholder="Date of Birth"
              />
            </Form.Group>
          </div>
          <TextField
            onChange={handleInputchange}
            name="contact"
            id="standard-basic"
            label="Contact"
            value={contact}
            type="number"
          />
          <br />
          <TextField
            onChange={handleInputchange}
            name="address"
            id="standard-basic"
            label="Address"
            value={address}
            type="text"
          />
          <br />

          {error && (
            <div
              style={{
                color: "red",
                fontSize: "20px",
                fontVariant: "all-small-caps",
                marginLeft: "30%",
              }}
            >
              {error}
            </div>
          )}

          <Button
            onClick={() => navigate("/home")}
            variant="contained"
            style={{ width: "100px" }}
            color="secondary"
          >
            {" "}
            Go Back
          </Button>
          <Button
            style={{ width: "100px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            {" "}
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
export default Adduser;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 70,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));
const styling = {
  fontFamily: "Georgia, serif",
  marginTop: "100px",
  marginLeft: "20%",
  marginRight: "20%",
  borderRadius: "10px",
  color: "green",
  border: "1px solid green",
};
