import React, { useEffect } from "react";
import Navbarr from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUser } from "../redux/Action";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handledelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the user"))
      dispatch(deleteUser(id));
    dispatch(loadUser());
  };

  return (
    <div>
      <Navbarr />

      <div className="container" style={{ paddingTop: "60px" }}>
        <div className="row">
          <div className="col-md-4 offset-md-8">
            <Button
              style={{
                fontFamily: "serif",
                marginLeft: "200px",
                marginTop: "38px",
              }}
              onClick={() => navigate("/adduser")}
              variant="contained"
              color="primary"
            >
              Add User
            </Button>
          </div>
        </div>
      </div>
      <h3
        style={{
          fontFamily: "Georgia, serif",
          color: "#84a5ad",
          fontSize: "35px",
        }}
      >
        Student Data
      </h3>

      <table className="table table-striped table-bordered">
        <thead className="headers">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Contact</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {users
            .sort((a, b) => b.id - a.id)
            .map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.dob}</td>
                <td>{user.contact}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => navigate(`/edituser/${user.id}`)}
                    style={{ padding: "6px 28px", marginRight: "10px" }}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    style={{ padding: "6px 24px" }}
                    onClick={() => handledelete(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
