import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, loadsingleUser } from "../redux/Action";
import Navbarr from "./Navbar";

const Edituser = () => {
  let { id } = useParams();
  const classes = useStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  console.log({ user });
  const [error, setError] = useState("");

  const [update, setUpdate] = useState({});
  const { name, dob, contact, address } = update;

  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
    console.log("okk", name);
  };
  useEffect(() => {
    dispatch(loadsingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setUpdate({ ...user });
    }
  }, [user]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !dob || !contact || !address) {
      setError("Please fill input field");
    } else {
      dispatch(updateUser(update, id));
      navigate("/home");
      setError("");
    }
  };

  return (
    <>
      <Navbarr />
      <div className="App">
        <h3 style={styling}> EDIT USER </h3>
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
            value={name || ""}
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
            value={contact || ""}
            type="number"
          />
          <br />
          <TextField
            onChange={handleInputchange}
            name="address"
            id="standard-basic"
            label="Address"
            value={address || ""}
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
            Update
          </Button>
        </form>
      </div>
    </>
  );
};

export default Edituser;

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
