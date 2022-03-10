import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Registration from "./component/Registration";
import Adduser from "./component/Adduser";
import Edituser from "./component/Edituser";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/adduser" element={<Adduser />} />
        <Route exact path="/edituser/:id" element={<Edituser />} />
        <Route path="/signout" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
