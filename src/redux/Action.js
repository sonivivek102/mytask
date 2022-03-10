import * as types from "./Actiontypes";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const loadUser = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/user`)
      .then((res) => {
        localStorage.setItem("load_user", JSON.stringify(res.data));
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

const Userdelete = () => ({
  type: types.DELETE_USER,
});
export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then((resp) => {
        console.log("del_user_resp", resp);
        dispatch(Userdelete(resp.data));
        dispatch(loadUser());
      })
      .catch((error) => console.log(error));
  };
};

const Useradd = () => ({
  type: types.ADD_USER,
});
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:5000/user`, user)
      .then((resp) => {
        console.log("add_user_resp", resp);
        dispatch(Useradd());
        dispatch(loadUser());
      })
      .catch((error) => console.log(error));
  };
};

const Userlog = () => ({
  type: types.LOG_USER,
});
export const logUser = (login) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_LOGIN_API}`, login)
      .then((resp) => {
        localStorage.setItem("login", JSON.stringify(resp.data));
        console.log("log_user_resp", resp);
        dispatch(Userlog());
      })
      .catch((error) => console.log(error));
  };
};

const getsingleUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});
export const loadsingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getsingleUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

const Userupdate = () => ({
  type: types.UPDATE_USER,
});
export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/user/${id}`, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(Userupdate());
      })
      .catch((error) => console.log(error));
  };
};
